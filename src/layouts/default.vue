<template>
  <div class="common-layout">
    <el-container>
      <el-header class="flex justify-between">
        <h3 class="text-3xl txt-login">HOME PAGE</h3>
        <el-button v-if="isLogin" @click="logOut" type="danger"
          >logOut</el-button
        >
        <router-link v-else :to="{ path: '/login' }"> Login </router-link>
      </el-header>
      <el-main> <slot /></el-main>
    </el-container>
  </div>
</template>
<script lang="ts" setup>
import { useAuthStore } from "../store/useAuth";
import { useRouter } from "vue-router";
const router = useRouter();
const isLogin = useAuthStore().loggedIn;
function logOut() {
  useAuthStore().logout();
  router.push("/login");
}
</script>
