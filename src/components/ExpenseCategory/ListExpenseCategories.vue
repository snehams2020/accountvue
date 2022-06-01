<template>
  <div align="center">
    <h2>Manage Expense Categories</h2>
    <b-breadcrumb :items="items"></b-breadcrumb>
    <b-link :to="'/add-expense-category'">Add Expense Category</b-link>
    <button @click="LoadData" v-show="false">Load</button>

    <p v-if="success">
      <b-alert variant="success" show>Success Alert</b-alert>
    </p>
    <p v-if="error">
      <b-alert variant="danger" show>Not Saved</b-alert>
    </p>
    <b-container fluid>
      <!-- Main table element -->
      <b-table striped hover :items="results" stacked="md" show-empty small>
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
      </b-table>
    </b-container>
    
  </div>
</template>

<script>
export default {

     data() {
      return {
        results:[],
        success:false,
      error:false,
  "token":(localStorage.getItem('token'))?localStorage.getItem('token'):"",

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
this.LoadData()
   },

   methods:{
      LoadData(){
      fetch('http://127.0.0.1:8000/api/get-expense-category',{
    method: 'GET',
    headers: {
        'Authorization': 'Bearer '+this.token,

    },
} ).then((response)=>{
        console.log(response);
        if(response.ok){
         return response.json();
        }



      }).then((datas)=>{
  // console.log(datas);

 const results=[];
 for(const data in datas['expenseCategory']){
   //console.log(data);

results.push({
   id: datas['expenseCategory'][data].id,

  names: datas['expenseCategory'][data].name,

actions:""


});
 }
 this.results=results;
  });
      },
      deleteData(id){

   fetch('http://127.0.0.1:8000/api/delete-expense-category?id='+id,{
    method: 'DELETE',
    headers: {
        'Authorization': 'Bearer '+this.token,

    },
} ).then((response)=>{

        if(response.ok){
                       // console.log(datas.status);

          this.success=true;
        }else{
                             //    console.log(datas.status);

          this.error=true;
        }



      })

;


      }


    }
}
</script>

<style></style>
