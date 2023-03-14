<template>
  <h1 class="text-3xl font-bold underline">Hello world!</h1>
  <div>
    <el-row class="mb-4">
      <el-button>Default</el-button>
      <el-button type="primary">Primary</el-button>
      <el-button type="success">Success</el-button>
      <el-button type="info">Info</el-button>
      <el-button type="warning">Warning</el-button>
      <el-button type="danger">Danger</el-button>
    </el-row>
  </div>
  <ul class="">
    <li>
      <router-link to="/">Home</router-link>
    </li>
    ssssss
    <li>
      <router-link to="/login">About</router-link>
    </li>
    sssss
    <li>
      <router-link to="/product/aa">Product</router-link>
    </li>
  </ul>
  <router-view></router-view>
</template>

<script setup lang="ts"></script>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
