<template>
<div>
 <h2>Manage Balance Sheet</h2>
    <b-breadcrumb :items="items"></b-breadcrumb>
    <!-- <b-link :to="'/add-income-category'">Add Income Category</b-link> -->
    <!-- <button @click="LoadData" v-show="false">Load</button> -->
      <b-form @submit="LoadData" @reset="onReset">
      <b-row class="my-1">
    <b-col sm="3">
      <b-form-datepicker id="example-datepicker" size="sm"  v-model="form.date" class="mb-2"></b-form-datepicker>
</b-col>
    <b-col sm="3">

      <b-button type="submit" variant="primary">Submit</b-button>
      <b-button type="reset" variant="danger">Reset</b-button>
      </b-col>
      </b-row>
    </b-form>
  
    <b-table striped hover :items="results">
    
    
    
    </b-table>
    </div>
    </template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      form: {
        
        date: '',
         
        },

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
            text: 'Manage Balance Sheet',
            active: true
          }
         ]
         
         }
  },
   mounted(){
this.LoadData()
   },

   methods:{
     onReset(event) {
        event.preventDefault()
        // Reset our form values
        this.form.date = ''
      
        
      },
      LoadData(){
      fetch('http://127.0.0.1:8000/api/get-balance-sheet?date='+this.form.date,{
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
 for(const data in datas['balanceSheet']){
   //console.log(data);

results.push({

  date: datas['balanceSheet'][data].date,
   category: datas['balanceSheet'][data].category,
   credit: datas['balanceSheet'][data].credit,
   debit: datas['balanceSheet'][data].debit,
   paymentType: datas['balanceSheet'][data].paymentType,


});
 }
 this.results=results;
  });
      },
}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #5daf8a;
}
</style>
