<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <the-header></the-header>

    <!-- <the-sidebar></the-sidebar> -->
        <button v-b-toggle.sidebar-no-header ref="myBtn" v-show="false" @click="myClickEvent">Menu</button>

    <router-view/>
  </div>
</template>

<script>
import TheSidebar from '@/components/layout/TheSidebar'
import TheHeader from '@/components/layout/TheHeader'

import Api from './components/api.vue'

export default {
  name: 'App',
  components:{TheSidebar,Api,TheHeader},
  mounted() {
this.myClickEvent();
     },
      methods:{
     myClickEvent(){
            const elem = this.$refs.myBtn;
            elem.click()
        }
      }
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
