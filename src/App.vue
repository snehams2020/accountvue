<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <the-sidebar></the-sidebar>
    <router-view/>
  </div>
</template>

<script>
import TheSidebar from '@/components/layout/TheSidebar'
import Api from './components/api.vue'

export default {
  name: 'App',
  components:{TheSidebar,Api}
}
</script>

<style>

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
