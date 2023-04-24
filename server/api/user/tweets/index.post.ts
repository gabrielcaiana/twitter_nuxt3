import formidable from 'formidable'
import { createMediaFile } from '~~/server/db/midiaFiles'
import { createTweet } from '~~/server/db/tweets'
import { tweetTransformer } from '~~/server/transformers/tweet'
import { uploadToCloudinary } from '~/server/utils/cloudinary'
import { CloudinaryResource } from '~~/types/mediaFile'

export default defineEventHandler(async (event) => {
  // get the request object
  const { req } = event.node

  // get the user id from the context
  const authorId = event.context?.auth?.user?.id

  // parse a file upload
  const form = formidable({})

  // parse the request and return a promise
  const response = await new Promise((resolve, reject) => {
    form.parse(req, (err: any, fields: any, files: any) => {
      if (err) {
        reject(err)
      }

      resolve({ fields, files })
    })
  })

  const { fields, files } = response as any

  // create the tweet data
  const tweetData: { authorId: string; text: string } = {
    text: fields?.text,
    authorId,
  }

  // create the tweet in the database
  const tweet = await createTweet(tweetData as any)

  // create the media files
  const filePromises = Object.keys(files).map(async (key) => {
    // get the file
    const file = files[key]

    // upload the file to cloudinary
    const cloudinaryResource = (await uploadToCloudinary(
      file.filepath
    )) as CloudinaryResource

    return createMediaFile({
      url: cloudinaryResource.secure_url,
      providerPublicId: cloudinaryResource.public_id,
      userId: authorId,
      tweetId: tweet.id,
    })
  })

  // wait for all the media files to be created
  await Promise.all(filePromises)

  return {
    tweet: tweetTransformer(tweet),
  }
})
