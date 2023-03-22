<template>
  <div class="box-login">
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
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { useAuthStore } from "../store/useAuth";
import { useRouter } from "vue-router";
import { ElMessage } from "element-plus";

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
      ElMessage({
        message: "Login successfully !",
        type: "success",
      });
      router.push("/");
    })
    .catch((error) => {
      ElMessage.error(error.response.data.message);
      console.log("err", error);
    });
}
</script>

<style scoped>
.txt-login {
  color: red;
}
.box-login {
  background-color: rgba(112, 112, 107, 0.493);
  padding: 20px;
  border-radius: 8px;
}
</style>
