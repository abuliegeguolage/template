<script setup>
  import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <!-- router-view前面可以放header -->
  <!-- 這樣之後就不用每個文件都打一遍header的碼 -->
  <router-link to="/">首頁</router-link>
  <router-link to="/outside">另一頁</router-link>
  <!-- ↑這個標籤之後會被自動替換成a標籤，網址不會外連 -->
  <!-- router-link會把to的路徑接在網址上，route資料夾的index.js會根據路徑吐出對應的文件 -->
  <router-view></router-view>
  <!-- ↑這個標籤會被自動替換成使用者當前的頁面組件 -->
</template>

<style scoped>
/* 
這裡通常會放全域的樣式，所以之後記得幹掉scoped
*/
  a {
    margin: 10px;
  }
</style>
