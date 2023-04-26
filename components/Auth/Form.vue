<script setup lang="ts">
const { login } = useAuth()

const data = reactive({
  username: '',
  password: '',
  loading: false,
})

const handleLogin = async () => {
  data.loading = true
  try {
    await login({ username: data.username, password: data.password })
  } catch (err) {
    if (err instanceof CreateErrorImpl) {
      throw createError({
        statusCode: err.statusCode,
        statusMessage: err.statusMessage,
      })
    } else {
      throw err
    }
  } finally {
    data.loading = false
  }
}
</script>

<template>
  <form
    @submit.prevent="handleLogin"
    class="pt-5 space-y-6"
  >
    <UIInput
      v-model="data.username"
      label="Username"
      name="username"
      placeholder="@username"
    />

    <UIInput
      v-model="data.password"
      type="password"
      label="Password"
      name="password"
      placeholder="********"
    />

    <div>
      <button>Login</button>
    </div>
  </form>
</template>
