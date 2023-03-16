<template>
  <h3 class="text-3xl txt-login">LOGIN</h3>
  <div class="mt-1 text-left">
    <p>User name:</p>
    <el-input v-model="userName" placeholder="User name" />
  </div>
  <div class="mt-1 text-left">
    <p>Password:</p>
    <el-input
      v-model="password"
      type="password"
      show-password
      placeholder="Password"
    />
  </div>
  <el-button @click="onClick" type="danger" class="mt-4">Login</el-button>
</template>

<script lang="ts" setup>
import { ref } from "vue";
// declaration of variables
const userName = ref<string>("");
const password = ref<string>("");
let color: string = "red";

function onClick() {
  color = userName.value;
  console.log(userName.value);
  console.log(password.value);
}
</script>

<style>
.txt-login {
  color: v-bind(color);
}
</style>
