<template>
  <h1>HOMEss</h1>

  <TextInput v-model="modelValue" />
  <!-- <div v-for="(item, index) in listAccount" :key="index">
    <p>{{ item.email }}</p>
  </div> -->
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
  } catch (error) {
    console.error(error);
  }
});

const modelValue = ref("ssss");
</script>
