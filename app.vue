<script setup lang="ts">
const darkMode = ref(true);
</script>

<template>
  <div :class="{ dark: darkMode }">
    <div class="min-h-full bg-red-200">
      <div
        class="grid grid-cols-12 mx-auto sm:px-6 lg:max-w-7xl lg:px-8 lg:gap-5"
      >
        <!-- left sidebar -->
        <div class="hidden bg-red-500 md:block xs-col-span1 xl:col-span-2">
          <div class="sticky top 0">sidebar</div>
        </div>
        <!-- main content -->
        <!-- right sidebar -->
      </div>
    </div>
  </div>
</template>
