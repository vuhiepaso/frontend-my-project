<template>
  <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal">
    <el-menu-item index="Equipment">
      <router-link :to="{ path: '/equipment' }"> Equipments </router-link>
    </el-menu-item>
    <el-menu-item index="2">Processing Center</el-menu-item>
  </el-menu>
</template>
<script lang="ts" setup>
import { useRoute } from "vue-router";
import { ref, watchEffect } from "vue";
const route = useRoute();
const activeIndex = ref();

watchEffect(() => {
  activeIndex.value = route.name;
});
</script>
