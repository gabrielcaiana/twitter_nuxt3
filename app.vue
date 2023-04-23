<script setup lang="ts">
const darkMode = ref(false)

const { useStateUser, initAuth, useStateLoading } = useAuth()
const user = useStateUser()
const isAuthLoading = useStateLoading()

onBeforeMount(() => {
  initAuth()
})

useHead({
  title: 'Twitter Nuxt',
  meta: [
    {
      hid: 'description',
      name: 'description',
      content: 'Twitter Nuxt',
    },
  ],
  link: [
    {
      rel: 'icon',
      type: 'image/x-svg',
      href: '/favicon.svg',
    },
  ],
})
</script>

<template>
  <div :class="{ dark: darkMode }">
    <!-- is loading -->
    <UILoading v-if="isAuthLoading" />

    <!-- is logeed in -->
    <NuxtLayout v-else-if="user">
      <NuxtLoadingIndicator />
      <NuxtPage />
    </NuxtLayout>

    <!-- is not logged in -->
    <AuthPage v-else />
  </div>
</template>
