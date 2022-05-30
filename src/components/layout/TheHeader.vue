<template>
    <div>
  <b-navbar toggleable="lg" type="light" variant="success">
    <b-navbar-brand href="#">Account Management</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item href="#" ><router-link to="/home" >Home</router-link></b-nav-item>
        <b-nav-item href="#" ><router-link to="/expense-categories">Expense Categories</router-link></b-nav-item>
        <b-nav-item href="#" ><router-link to="/payment-type">Payment Type</router-link></b-nav-item>
        <b-nav-item href="#" ><router-link to="/income-category">Income Category</router-link></b-nav-item>
        <b-nav-item href="#" ><router-link to="/expense">Expense</router-link></b-nav-item>

      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
      

        <b-nav-item-dropdown right>
          <!-- Using 'button-content' slot -->
          <template #button-content>
            <em>User</em>
          </template>
          <b-dropdown-item href="#">Profile</b-dropdown-item>
          <b-dropdown-item href="#">Sign Out</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</div>
</template>

<script>
export default {

}
</script>

<style>

</style>
