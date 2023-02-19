<script setup lang="ts">
const props = defineProps<{
  active: boolean;
}>();

const textClasses = computed<string>(() =>
  props.active ? 'font-semibold' : 'font-normal'
);
</script>

<template>
  <nuxt-link
    to="#"
    class="flex items-center text-black p-3 w-min hover:bg-gray-200 rounded-full gap-4 dark:hover:bg-dim-200 dark:text-white transition-colors"
  >
    <div class="text-dark">
      <slot name="icon" />
    </div>
    <div :class="['text-xl hidden xl:block', textClasses]">
      <slot name="name" />
    </div>
  </nuxt-link>
</template>
