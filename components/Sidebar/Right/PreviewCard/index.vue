<script setup lang="ts">
defineProps<{
  title: string;
}>();

const { twitterBorderColor } = useTailwindConfig();
</script>

<template>
  <div
    :class="[
      'm-2 border bg-gray-50 rounded-2xl dark:bg-dim-700 overflow-hidden',
      twitterBorderColor,
    ]"
  >
    <span
      :class="[
        'p-3 block text-xl font-extrabold text-gray-900 border-b dark:text-white',
        twitterBorderColor,
      ]"
    >
      {{ title }}
    </span>

    <slot />

    <div
      class="p-3 text-sm text-blue-400 cursor-pointer hover:bg-gray-100 transition-colors dark:hover:bg-dim-300"
    >
      Show more
    </div>
  </div>
</template>
