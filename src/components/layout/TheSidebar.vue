<template>
  <div>
    <b-sidebar id="sidebar-no-header"  visible="true" aria-labelledby="sidebar-no-header-title" no-header shadow>
      <template #default="{ hide }">
        <div class="p-3">
          <h4 id="sidebar-no-header-title">Account Management System</h4>
          <!-- <p>
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis
            in, egestas eget quam. Morbi leo rissssus, porta ac consectetur ac, vestibulum at eros.
          </p> -->
          <nav class="mb-3">
            <b-nav vertical>
              <!-- <b-nav-item active @click="hide">Active</b-nav-item> -->
            <b-nav-item  @click="hide" active> <router-link to="/home" @click="hide">Home</router-link></b-nav-item>

              <b-nav-item  @click="hide"> <router-link to="/expense-categories" @click="hide">Expense Categories</router-link></b-nav-item>
              <b-nav-item href="#link-2" @click="hide">Another Link</b-nav-item>
            </b-nav>
          </nav>
          <b-button variant="primary" block @click="hide">Close Sidebar</b-button>
        </div>
      </template>
    </b-sidebar>
  </div>
</template>

<script>
export default {

}
</script>

<style>
</style>
