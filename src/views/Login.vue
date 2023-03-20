<template>
  <h3 class="text-3xl txt-login">LOGIN</h3>
  <div class="mt-1 text-left">
    <p>Email:</p>
    <el-input v-model="email" placeholder="Email" />
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
  <el-button @click="getData" type="danger" class="mt-4"
    >log accounts</el-button
  >
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { useAuthStore } from "../store/useAuth";
import axios from "axios";
import { useRouter, useRoute } from "vue-router";

let color: string = "red";
const router = useRouter();

// declaration of variables
const email = ref<string>("hiepvd@vmodeval.com");
const password = ref<string>("Aa@12345");

function onClick() {
  const data = {
    email: email.value,
    password: password.value,
  };
  useAuthStore()
    .login(data)
    .then(function () {
      router.push("/");
    })
    .catch(() => {
      console.log("loading");
    });
}

const getData = async () => {
  const data = (await axios.get("accounts")).data;
  console.log(data);
};
</script>

<style>
.txt-login {
  color: v-bind(color);
}
</style>
