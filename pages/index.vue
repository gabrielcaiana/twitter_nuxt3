<script setup lang="ts">
const loading = ref(false)
const { useStateUser } = useAuth()
const user = useStateUser()
</script>

<template>
  <div>
    <MainSection
      title="Home"
      :loading="loading"
    >
      This is our home page

      <pre>{{ user }}</pre>
    </MainSection>
  </div>
</template>
