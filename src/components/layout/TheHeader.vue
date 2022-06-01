<template>
  <div>
    <div>
      <b-navbar type="dark" variant="dark">
        <b-navbar-brand href="#"
          ><router-link to="/home"
            >Account Management</router-link
          ></b-navbar-brand
        >

        <b-navbar-nav v-if="loggedIn != ''">
          <!-- <b-nav-item href="#"><router-link to="/home" >Home</router-link></b-nav-item> -->
          <b-nav-item href="#"
            ><router-link to="/payment-type">Payment Type</router-link>
          </b-nav-item>

          <!-- Navbar dropdowns -->
          <b-nav-item-dropdown text="Categories" right>
            <b-dropdown-item href="#"
              ><router-link to="/expense-categories"
                >Expense Categories</router-link
              ></b-dropdown-item
            >
            <b-dropdown-item href="#"
              ><router-link to="/income-category"
                >Income Category</router-link
              ></b-dropdown-item
            >
          </b-nav-item-dropdown>
          <b-nav-item href="#"
            ><router-link to="/expense">Expense</router-link></b-nav-item
          >
          <b-nav-item href="#"
            ><router-link to="/income">Income</router-link></b-nav-item
          >
          <b-nav-item-dropdown text="Reports" right>
            <b-dropdown-item href="#"
              ><router-link to="/income-report"
                >Income Report</router-link
              ></b-dropdown-item
            >
            <b-dropdown-item href="#"
              ><router-link to="/expense-report"
                >Expense Report</router-link
              ></b-dropdown-item
            >
            <b-dropdown-item href="#"
              ><router-link to="/balance-sheet"
                >Balance Sheet</router-link
              ></b-dropdown-item
            >
          </b-nav-item-dropdown>

          <b-nav-item-dropdown text="User" right>
            <!-- <b-dropdown-item href="#">Account</b-dropdown-item> -->
            <b-dropdown-item href="#" @click="logout">Sign Out</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-navbar>
    </div>
    <!-- <b-navbar toggleable="lg" variant="faded" type="light">
    <b-navbar-brand href="#">Account Management</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
    <b-nav-item-dropdown text="Lang" right>
        <b-dropdown-item href="#">EN</b-dropdown-item>
        <b-dropdown-item href="#">ES</b-dropdown-item>
        <b-dropdown-item href="#">RU</b-dropdown-item>
        <b-dropdown-item href="#">FA</b-dropdown-item>
      </b-nav-item-dropdown>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item href="#" ><router-link to="/home" >Home</router-link></b-nav-item>
        <b-nav-item href="#" ><router-link to="/expense-categories">Expense Categories</router-link></b-nav-item>
        <b-nav-item href="#" ><router-link to="/payment-type">Payment Type</router-link></b-nav-item>
        <b-nav-item href="#" ><router-link to="/income-category">Income Category</router-link></b-nav-item>
        <b-nav-item href="#" ><router-link to="/expense">Expense</router-link></b-nav-item>

      </b-navbar-nav>

      <b-navbar-nav class="ml-auto">
      

        <b-nav-item-dropdown right>
          <template #button-content>
            <em>User</em>
          </template>
          <b-dropdown-item href="#">Profile</b-dropdown-item>
          <b-dropdown-item href="#">Sign Out</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar> -->
  </div>
</template>

<script>
export default {
  props:['loggedIn'],
  data(){
    return{
      //loggedIn:false
    }
  },
   mounted(){
//this.loggedIn()
   },
  methods:{
     logout(){
    localStorage.removeItem('user');
    localStorage.removeItem('token');
        this.$router.push('/login');

       },
    //     loggedIn() {
    //   // `this` points to the component instance
    //   if( localStorage.getItem('token')!=""){

    //     this.loggedIn=true;
    //   }
    //   return loggedIn;
    // }
  }

}
</script>

<style></style>
