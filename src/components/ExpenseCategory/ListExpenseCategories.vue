<template>
  <div align="center">
    <h2>Manage Expense Categories</h2>
    <b-breadcrumb :items="items"></b-breadcrumb>
    <b-link :to="'/add-expense-category'">Add Expense Category</b-link>
    <button @click="LoadExpenseData" v-show="false">Load</button>

    <p v-if="success">
      <b-alert variant="success" show>Success Alert</b-alert>
    </p>
    <p v-if="error">
      <b-alert variant="danger" show>Not Saved</b-alert>
    </p>   
     <!-- <h1>{{$store.state.counter}}</h1> -->
     <!-- <h1>{{$store.state.results}}</h1> -->


    <b-container fluid>
      <!-- Main table element -->
      <b-table striped hover :items="$store.state.results" stacked="md" show-empty small>
        <template #cell(name)="row">
          {{ row.value.first }} {{ row.value.last }}
        </template>

        <template #cell(actions)="row">
          <b-link
            :to="{ name: 'EditExpenseCategory', params:{id:row.item.id}}"
            variant="primary"
            >Edit</b-link
          >
          <b-link v-on:click="deleteExpenseData(row.item.id)" variant="danger"
            >Delete</b-link
          >
        </template>
      </b-table>
    </b-container>
    
  </div>
</template>

<script>
export default {

     data() {
      return {
        // results:[],
        success:false,
      error:false,
  // "token":(localStorage.getItem('token'))?localStorage.getItem('token'):"",

         items: [
          {
            text: 'Home',
            href: '#'
          },

          {
            text: 'Manage Expense Categories',
            active: true
          }
        ]
      }
    },
     mounted(){
       this.LoadExpenseData()
       
       },

   methods:{
     LoadExpenseData(){
      // console.log(this.$store.commit('LoadData'));mutation code
      this.$store.dispatch('LoadData')
          

    

     },
     deleteExpenseData(id){
             this.$store.commit('deleteData',{value:id})

// this.$store.dispatch({
//               type:deleteData,
//               value:id
//               })



     }


    }
}
</script>

<style></style>
