<script setup lang="ts">
interface Props {
  name: string;
  label?: string;
  placeholder?: string;
  type?: string;
  modelValue: string;
}

withDefaults(defineProps<Props>(), {
  type: 'text',
  modelValue: '',
  placeholder: '',
});

const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void;
}>();

const emitValue = (value: string) => emit('update:modelValue', value);
</script>

<template>
  <div>
    <label
      v-if="label"
      :for="name"
      class="block pl-3 ml-px text-sm font-medium text-gray-700"
      >{{ label }}</label
    >
    <input
      :type="type"
      :name="name"
      :value="modelValue"
      :placeholder="placeholder"
      :id="name"
      @input="(e) => emitValue((e.target as HTMLInputElement).value)"
      class="block px-4 w-full border-gray-300 rounded-full shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
    />
  </div>
</template>
