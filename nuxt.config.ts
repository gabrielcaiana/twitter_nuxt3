// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss', 'nuxt-icon'],
  typescript: {
    strict: true,
  },

  runtimeConfig: {
    cn_cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    cn_api_key: process.env.CLOUDINARY_API_KEY,
    cn_api_secret: process.env.CLOUDINARY_API_SECRET,
    jwtAccessSecret: process.env.JWT_ACCESS_TOKEN_SECRET,
    jwtRefreshSecret: process.env.JWT_REFRESH_TOKEN_SECRET,
  },
});
