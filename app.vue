<script setup lang="ts">
const darkMode = ref(false);
</script>

<template>
  <div :class="{ dark: darkMode }">
    <NuxtLayout />
  </div>
</template>
