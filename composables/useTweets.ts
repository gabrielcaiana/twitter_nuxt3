import { Tweet } from '~~/types/Tweet'

export default () => {
  const postTweet = async ({ text }: Tweet) => {
    // create form data from tweet data
    const form = new FormData() as FormData & Tweet

    // append data to form
    form.append('text', text)

    // send request
    return useFetchApi('/api/user/tweets', {
      method: 'POST',
      body: form,
    })
  }

  return {
    postTweet,
  }
}
