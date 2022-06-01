<template>
  <div>
    <h2>Manage Income Report</h2>
    <b-breadcrumb :items="items"></b-breadcrumb>
    <b-form @submit.prevent="LoadData" @reset="onReset">
      <b-row class="my-1">
        <b-col sm="3">
          <b-form-group id="input-group-3" label="Date:" label-for="input-3">
            <b-form-datepicker
              id="example-datepicker"
              size="sm"
              v-model="form.income_date"
              class="mb-2"
            ></b-form-datepicker>
          </b-form-group>
        </b-col>
        <b-col sm="3">
          <b-form-group
            id="input-group-3"
            label="Payment Type:"
            label-for="input-3"
          >
            <b-form-select
              v-model="form.payment_type"
              :options="options"
            ></b-form-select>
          </b-form-group>
        </b-col>
        <b-col sm="3">
          <b-form-group
            id="input-group-3"
            label="income Category:"
            label-for="input-3"
          >
            <b-form-select
              v-model="form.category"
              :options="resultsexp"
            ></b-form-select>
          </b-form-group>
        </b-col>
        <b-col sm="3">
          <b-button type="submit" variant="primary">Submit</b-button>
          <b-button type="reset" variant="danger">Reset</b-button>
        </b-col>
      </b-row>
    </b-form>

    <b-table striped hover :items="results"> </b-table>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
results:[],
form: {

        payment_type: '',
        category: '',

        income_date: '',


        },
        success:false,
      error:false,
 "token":(localStorage.getItem('token'))?localStorage.getItem('token'):"",

        selected: null,

         options: [
        ],
        resultsexp:[],
          items: [
          {
            text: 'Home',
            href: '#'
          },

          {
            text: 'Manage Income Report',
            active: true
          }]
         }
  },
   mounted(){
      fetch('http://127.0.0.1:8000/api/get-payment-type',{
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

 const options=[];
 for(const data in datas['paymentType']){
   //console.log(data);

options.push({

  text: datas['paymentType'][data].name,
   value: datas['paymentType'][data].id,



});
 }
 this.options=options;
  });
  fetch('http://127.0.0.1:8000/api/get-income-category',{
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

 const resultsexp=[];
 for(const data in datas['incomeCategory']){
   //console.log(data);

resultsexp.push({

  text: datas['incomeCategory'][data].name,
   value: datas['incomeCategory'][data].id,



});
 }
 this.resultsexp=resultsexp;
  });

this.LoadData()
   },

   methods:{
      onReset(event) {
        event.preventDefault()
        // Reset our form values
        this.form.income_date = ''
        this.form.category = ''

        this.form.payment_type = ''



      },
      LoadData(){
      fetch('http://127.0.0.1:8000/api/get-income-report?income_date='+this.form.income_date+'&category='+this.form.category+'&payment_type='+this.form.payment_type,{
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
 for(const data in datas['incomeReport']){
   //console.log(data);

results.push({

  description: datas['incomeReport'][data].description,
   amount: datas['incomeReport'][data].amount,
   income_date: datas['incomeReport'][data].income_date,
   incomeCategory: datas['incomeReport'][data].incomeCategory,
   paymentType: datas['incomeReport'][data].paymentType,


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
h1,
h2 {
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
