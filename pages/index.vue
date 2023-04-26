<script setup lang="ts">
const loading = ref(false)
const { useStateUser } = useAuth()
const user = useStateUser()
</script>

<template>
  <div>
    <MainSection
      title="Home"
      :loading="loading"
    >
      <TweetForm :user="user" />
    </MainSection>
  </div>
</template>
