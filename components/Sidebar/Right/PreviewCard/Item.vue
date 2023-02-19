<script setup lang="ts">
const { twitterBorderColor } = useTailwindConfig();
</script>

<template>
  <div
    :class="[
      'p-3 cursor-pointer hover:bg-gray-100 dark:hover:bg-dim-300 dark:text-white transition-colors border-b',
      twitterBorderColor,
    ]"
  >
    <slot />
  </div>
</template>
