<template>
  <h1>HOMEss</h1>

  <h1 @click="isActive = !isActive">sss</h1>
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
let isActive = ref(true);

onMounted(async () => {
  // try {
  //   const data = (await axios.get("accounts")).data;
  //   listAccount.value = data.data;
  // } catch (error) {
  //   console.error(error);
  // }
});

const modelValue = ref("");
</script>
