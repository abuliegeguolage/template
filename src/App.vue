<script setup>
  import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <!-- 這裡可以放他媽的header -->
  <!-- 這樣之後就不用他媽的每個文件都打一遍header的碼 -->
  <router-link to="/">首頁</router-link>
  <router-link to="/outside">另一頁</router-link>
  <router-view></router-view>
</template>

<style scoped>
  a {
    margin: 10px;
  }
</style>
