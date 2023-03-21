<template>
  <br />
  <!-- <router-link to="/product/333">product</router-link> -->
  <h1>HOMEss</h1>
  <div v-for="(item, index) in listAccount" :key="index">
    <p>{{ item.email }}</p>
  </div>
  <!-- <router-view></router-view> -->
</template>
<script lang="ts" setup>
import axios from "axios";
import { ref, onMounted } from "vue";
interface accounts {
  email: string;
  isActive: boolean;
  username: string;
}
let listAccount = ref<accounts[]>([]);

onMounted(async () => {
  try {
    const data = (await axios.get("accounts")).data;
    listAccount.value = data.data;
    console.log(listAccount);
  } catch (error) {
    console.error(error);
  }
});
</script>
