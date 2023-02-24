<script setup lang="ts">
const darkMode = ref(false);
</script>

<template>
  <div :class="{ dark: darkMode }">
    <!-- is logeed in -->
    <NuxtLayout v-if="false">
      <NuxtLoadingIndicator />
      <NuxtPage />
    </NuxtLayout>

    <!-- is not logged in -->
    <AuthPage v-else />
  </div>
</template>
