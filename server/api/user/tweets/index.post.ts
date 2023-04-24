import formidable from 'formidable'
import { createTweet } from '~~/server/db/tweets'
import { tweetTransformer } from '~~/server/transformers/tweet'

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
      
      resolve( { fields, files })
    })
  })

    const { fields } = response as any

      // create the tweet data
      const tweetData: { authorId: string, text: string} = {
        text: fields?.text,
        authorId,
      }

      // create the tweet in the database
      const tweet = await createTweet(tweetData as any)


  return {
    tweet: tweetTransformer(tweet)
  }
})