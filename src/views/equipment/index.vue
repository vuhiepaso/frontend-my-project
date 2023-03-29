<template>
  <div>
    name equipment
    <el-switch v-model="value1" @change="onchange()" />
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";

const value1 = ref();
function onchange() {
  console.log(value1.value);
}
</script>
