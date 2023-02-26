<script setup lang="ts">
const darkMode = ref(false);

const { useStateUser, initAuth, useStateLoading } = useAuth();
const user = useStateUser();
const isAuthLoading = useStateLoading();

onBeforeMount(() => {
  initAuth();
});
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
