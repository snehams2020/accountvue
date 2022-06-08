<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <the-header :loggedIn="loggedIn"></the-header>
        <!-- <h1>{{$store.state.test}}</h1> -->

    <!-- <button @click="$store.commit.LoadData" v-show="false">Load</button> -->
      <!-- <b-table striped hover :items="results" stacked="md" show-empty small>
        <template #cell(name)="row">
          {{ row.value.first }} {{ row.value.last }}
        </template>

        <template #cell(actions)="row">
          <b-link
            :to="{ name: 'EditExpenseCategory', params:{id:row.item.id}}"
            variant="primary"
            >Edit</b-link
          >
          <b-link v-on:click="deleteData(row.item.id)" variant="danger"
            >Delete</b-link
          >
        </template>
      </b-table> -->

    <!-- <the-sidebar></the-sidebar> -->
        <!-- <button v-b-toggle.sidebar-no-header ref="myBtn" v-show="false" @click="myClickEvent">Menu</button> -->

    <router-view/>
  </div>
</template>

<script>
// import TheSidebar from '@/components/layout/TheSidebar'
import TheHeader from '@/components/layout/TheHeader'
import Api from './components/api.vue'
export default {
  name: 'App',
  components:{Api,TheHeader},
  data(){
    return{
        loggedIn:(localStorage.getItem('token'))?localStorage.getItem('token'):""
    }
  },
  watch:{
    $route (to, from){
        this.loggedIn=(localStorage.getItem('token'))?localStorage.getItem('token'):""
    }
} ,
  mounted() {
        //  this.myClickEvent();
        //  this.$createStore.commit('LoadData')
            // this.$store.commit({
            //   type:increase,
            //   value:10
            //   })
     },
      methods:{
    //  myClickEvent(){
    //         const elem = this.$refs.myBtn;
    //         elem.click()
    //     }
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
.invalid-feedback {
 display:block !important;
 width:100%;
 margin-top:.25rem;
 font-size:80%;
 color:#dc3545
}
</style>
