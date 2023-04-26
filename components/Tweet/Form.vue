<script setup lang="ts">
import { Tweet } from '~~/types/Tweet'
import { User } from '~~/types/user'

defineProps<{
  user: User
}>()

const { postTweet } = useTweets()

const handleFormSubmit = async ({ text }: Tweet) => {
  try {
    const response = await postTweet({ text })
    console.log(response)
  } catch (err) {
    if (err instanceof CreateErrorImpl) {
      throw createError({
        statusCode: err.statusCode,
        statusMessage: err.statusMessage,
      })
    } else {
      throw err
    }
  }
}
</script>

<template>
  <TweetInput
    :user="user"
    @on-submit="handleFormSubmit($event)"
  />
</template>
