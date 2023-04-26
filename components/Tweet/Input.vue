<script setup lang="ts">
import { Tweet } from '~/types/Tweet'
import { User } from '~~/types/user'

defineProps<{
  user: User
}>()

const emits = defineEmits<{
  (e: 'onSubmit', text: Tweet): void
}>()

const text: Ref<string> = ref('')

const handleFormSubmit = () => {
  emits('onSubmit', { text: text.value })
}
</script>

<template>
  <div>
    <div class="flex items-center flex-shrink-0 p-4 pb-0">
      <div class="flex w-12 items-top">
        <img
          :src="user.profileImage!"
          :alt="user.name!"
          class="inline-block w-10 h-10 rounded-full"
        />
      </div>

      <div class="w-full p-2">
        <textarea
          v-model="text"
          class="w-full h-10 text-lg text-gray-900 placeholder:text-gray-400 border-0 dark:text-white focus:ring-0"
        />
      </div>
    </div>

    <div>
      <button @click="handleFormSubmit">Tweet</button>
    </div>
  </div>
</template>
