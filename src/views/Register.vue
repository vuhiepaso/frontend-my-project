<template>
  <div>
    <div class="box-login">
      <h3 class="text-3xl txt-login">REGISTER</h3>
      <div class="mt-1 text-left">
        <TextInput
          placeholder="User name"
          title="User name:"
          rule="required"
          v-model="username"
          :isActiveValidate="isActiveValidate"
        />
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
          rule="password"
          v-model="password"
          :isActiveValidate="isActiveValidate"
        />
      </div>
      <el-button @click="onClick" type="danger" class="mt-4"
        >Register</el-button
      >
    </div>
    <div class="mt-1 text-left">
      <RouterLink class="font-normal" to="/login"> To page login </RouterLink>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { register } from "../api/auth";
import { ElMessage } from "element-plus";
const router = useRouter();
// declaration of variables
const email = ref<string>("");
const username = ref<string>("");
const password = ref<string>("");
const isActiveValidate = ref(false);

async function onClick() {
  const data = {
    email: email.value,
    password: password.value,
    username: username.value,
  };
  const checkRequired = Object.values(data).includes("");
  if (checkRequired) {
    isActiveValidate.value = true;
    return;
  }
  try {
    const response = await register(data);
    ElMessage({
      message: "Register successfully !",
      type: "success",
    });
    router.push("/login");
  } catch (error: any) {
    console.error(error);
    ElMessage.error(error.response.data.message);
  }
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
  width: 400px;
}
</style>
