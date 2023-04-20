<template>
  <div>
    <div class="box-login">
      <h3 class="text-3xl txt-login">LOGIN</h3>
      <div class="mt-1 text-left">
        <TextInput
          placeholder="Email"
          title="Email:"
          rule="email"
          v-model="email"
          :isActiveValidate="isActiveValidate"
        />
      </div>
      <div class="mt-1 text-left">
        <TextInput
          placeholder="Password"
          title="Password:"
          type="password"
          rule="required"
          v-model="password"
          :isActiveValidate="isActiveValidate"
        />
      </div>
      <el-button @click="onClick" type="danger" class="mt-4">Login</el-button>
    </div>
    <div class="mt-1 text-left">
      <RouterLink class="font-normal" to="/register">
        Register account ?
      </RouterLink>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { useAuthStore } from "../store/useAuth";
import { useRouter } from "vue-router";
import { ElMessage } from "element-plus";

const router = useRouter();
// declaration of variables
const email = ref<string>("123@vmdodev.com");
const password = ref<string>("Aa@12345");
const isActiveValidate = ref(false);

function onClick() {
  const data = {
    email: email.value,
    password: password.value,
  };
  const checkRequired = Object.values(data).includes("");
  if (checkRequired) {
    isActiveValidate.value = true;
    return;
  }
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
  width: 300px;
}
</style>
