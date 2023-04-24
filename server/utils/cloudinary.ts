import { v2 as _cloudinary } from 'cloudinary'

// cloudinary configuration
const cloudinary = () => {
  const config = useRuntimeConfig()

  _cloudinary.config({
    cloud_name: config.cn_cloud_name,
    api_key: config.cn_api_key,
    api_secret: config.cn_api_secret,
    secure: true,
  })

  return _cloudinary
}

// upload to cloudinary
export const uploadToCloudinary = (image: any) => {
  return new Promise((resolve, reject) => {
    cloudinary()
      .uploader.upload(image, { folder: 'twitter-nuxt' })
      .then((result) => {
        resolve(result)
      })
      .catch((error) => {
        reject(error)
      })
  })
}
