<template>
  <div align="center">
    <h2>Manage Expense</h2>
    <b-breadcrumb :items="items"></b-breadcrumb>
    <b-link :to="'/add-expense'">Add Expense</b-link>
    <button @click="LoadData" v-show="false">Load</button>

    <p v-if="success">
      <b-alert variant="success" show>Success Alert</b-alert>
    </p>
    <p v-if="error">
      <b-alert variant="danger" show>Not Saved</b-alert>
    </p>
     <b-container fluid>


    <!-- Main table element -->
    <b-table striped hover
      :items="results"
      
      stacked="md"
      show-empty
      small
    >
      <template #cell(name)="row">
        {{ row.value.first }} {{ row.value.last }}
      </template>

      <template #cell(actions)="row">
         <b-link
        :to="{ name: 'EditExpense', params:{id:row.item.id}}"
        variant="primary">Edit</b-link>
 <b-link v-on:click="deleteData(row.item.id)" variant="danger">Delete</b-link>
      
      </template>

     
    </b-table>

  
  </b-container>

<!-- 
    <b-card
      v-for="result in results"
      :key="result.names"
      style="max-width: 20rem"
      class="mb-2" title="">
      <b-card-text>
               Description: {{result.description}}

      </b-card-text>
       <b-card-text>
                        Amount: {{result.amount}}

      </b-card-text>

      <b-card-text>
                        Expense Date: {{result.expenseDate}}

      </b-card-text>
      <b-card-text>
                        Expense Category: {{result.expenseCategory}}

      </b-card-text>
      <b-card-text>
                        Payment Type: {{result.paymentType}}

      </b-card-text>

      <b-link
        :to="{ name: 'EditExpense', params:{id:result.id}}"
        variant="primary">Edit</b-link>


      <b-link v-on:click="deleteData(result.id)" variant="danger"
        >Delete</b-link>
    </b-card> -->
  </div>
</template>

<script>
export default {

     data() {
      return {
        results:[],
        success:false,
      error:false,
 "token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiNDYxZjQzNTQ0OTI0MTAwZGMyMTBlMGFlNTNkNWJmYjdmODJjZTEwNWJiM2U5YzYxOWIzMmZhYTcwYzE0ZGM1YTRmMTBiOGNmMmMyZTQyZjIiLCJpYXQiOjE2NTM3MTE4NzYuODk3NTUxLCJuYmYiOjE2NTM3MTE4NzYuODk3NTY1LCJleHAiOjE2ODUyNDc4NzYuMzI3NDIyLCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.GDU-z4UN4GH5SXQch2HGBL5tgm9jMBqrfbVysQYL7vRfsCwJykoBpMOz9CwvECCbWYXLrLQmW8ksuRcRjzRpKlpRJMbpE4DyHnEFB58IHDMGy0NqZvy3MHj3XyCN6ldbfUkIBg48j_tedbqc3HrKUHZwKdWHxXsjxzur0bQixt_xqakWA2ooYvq5nc_4aHW2oSIGXCBK_8hXbZ52mMVABHijFqKFhfdU6MazVMC5wW2zhetNIuJqKoVRhQw6p7w9i0_VDKFfUTv2oF3v-8uBO0tY0yhZRDRrkA7384CTWh0G_AlMFNnJ9M4E6A8VzM2a6GGen0DhVl9QR6Ly9XYH1iEvpRznJp9J8LEwgsnK3kdE9fRQUVHeN_Wqd4WmQZdZQlGBowfrCDAINV-Q0n3NsAD26eiKAj_d47oemstL692MgCE0q-ppH5r9P1I8eLnUODZj0qkiOqHxCfPQY8_VQB0nWRxkAM4oubMwrlV3HgrjeUCyloslW0i2oEuYBC9EafSLFxrRoiaI0nNo1GmyMmhh-VQI492qdfM7U5-NtwkQ0kphWGIDgogstLRNScMm6LzBZAgmlkKe0RPb9hLZeMuiDMkEi9TIJ8sg4F-18oaTExUVnP5uSZ37mRF9GS_bKWxz9GYEL8YK50CUrMwN8Gqxtitf6YC4CjGEebmSPS8"
         ,
         items: [
          {
            text: 'Home',
            href: '#'
          },

          {
            text: 'Manage Expense',
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
      fetch('http://127.0.0.1:8000/api/get-expense',{
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
 for(const data in datas['expense']){
   //console.log(data);

results.push({

  // names: datas['expense'][data].name,
   id: datas['expense'][data].id,
   description: datas['expense'][data].description,

   amount: datas['expense'][data].amount,
   expenseDate: datas['expense'][data].expense_date,
   expenseCategory: datas['expense'][data].expenseCategory,
   paymentType: datas['expense'][data].paymentType,
actions:""

});
 }
//  console.log(results);
 this.results=results;
  });
      },
      deleteData(id){

   fetch('http://127.0.0.1:8000/api/delete-expense?id='+id,{
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
