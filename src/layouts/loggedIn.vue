<template>
  <el-container>
    <el-header>
      <h1 class="text-3xl txt-login">Login</h1>
    </el-header>
    <el-main>
      <div class="box-layout">
        <slot />
      </div>
    </el-main>
  </el-container>
</template>
<style scoped>
.box-layout {
  display: flex;
  place-items: center;
  margin: 0 auto;
  width: fit-content;
  min-height: 75vh;
}
</style>
