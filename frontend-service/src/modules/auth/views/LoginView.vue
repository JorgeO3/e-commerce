<script setup lang="ts">
import AppModal from '../components/AppModal.vue';
import AppInput from '../components/AppInput.vue';
import { ref } from 'vue';

const formState = ref({
	email: '',
	password: ''
});

function onSubmit() {}
</script>

<template>
  <div class="login-container">
    <AppModal>
      <h1 class="login-title">
        Login
      </h1>

      <form
        class="login-form"
        autocomplete="off"
        @submit.prevent="onSubmit"
      >
        <!-- Input Email -->
        <AppInput
          id="ciaemail"
          v-model="formState.email"
          type="text"
          label="Email"
          placeholder="user@gmail.com"
        />

        <!-- Input Password -->
        <AppInput
          id="ciapassword"
          v-model="formState.password"
          type="password"
          label="Password"
          placeholder="&bull&bull&bull&bull"
        />
      </form>
    </AppModal>
  </div>
</template>

<style scoped>
</style>