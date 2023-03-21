<template id="app">
  <!-- <transition name="layout" mode="out-in"> -->
  <component :is="$route.meta.layout ?? 'default'">
    <router-view v-slot="{ Component }">
      <!-- <transition name="route" mode="out-in"> -->
      <component :is="Component" />
      <!-- </transition> -->
    </router-view>
  </component>
  <!-- </transition> -->
  <!-- <router-view> </router-view> -->
</template>

<!-- <script setup lang="ts">
import { useRoute } from "vue-router";
const route = useRoute();
console.log("setup app", route.meta.layout);
</script> -->
