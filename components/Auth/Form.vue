<script setup lang="ts">
const data = reactive({
  username: '',
  password: '',
});

const handleLogin = () => {
  alert(JSON.stringify(data));
};
</script>

<template>
  <form @submit.prevent="handleLogin" class="pt-5 space-y-6">
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
