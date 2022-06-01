<template>
  <div>
    <h2>Edit Income</h2>
    <p v-if="success">
      <b-alert variant="success" show>Success Alert</b-alert>
    </p>
    <p v-if="error">
      <b-alert variant="danger" show>Not Saved</b-alert>
    </p>
    <b-form @submit="onSubmit" @reset="onReset" v-if="show">
      <b-row class="my-1">
        <b-col sm="6">
          <b-form-group
            id="input-group-2"
            label=" Description:"
            label-for="input-2"
          >
            <b-form-textarea
              id="textarea"
              v-model="form.description"
              placeholder="Enter something..."
              rows="3"
              max-rows="6"
            ></b-form-textarea>
          </b-form-group>
        </b-col>
      </b-row>
      <b-row class="my-1">
        <b-col sm="6">
          <b-form-group id="input-group-2" label=" Amount:" label-for="input-2">
            <b-form-input
              v-model="form.amount"
              placeholder="Enter Amount"
            ></b-form-input>
          </b-form-group>
        </b-col>
      </b-row>
      <b-row class="my-1">
        <b-col sm="6">
          <b-form-group
            id="input-group-3"
            label="Income Date:"
            label-for="input-3"
          >
            <b-form-datepicker
              id="example-datepicker"
              v-model="form.income_date"
              class="mb-2"
            ></b-form-datepicker>
          </b-form-group>
        </b-col>
      </b-row>
      <b-row class="my-1">
        <b-col sm="6">
          <b-form-group
            id="input-group-3"
            label="Payment Type:"
            label-for="input-3"
          >
            <b-form-select
              v-model="form.payment_type_id"
              :options="options"
            ></b-form-select>
          </b-form-group>
        </b-col>
      </b-row>
      <b-row class="my-1">
        <b-col sm="6">
          <b-form-group
            id="input-group-3"
            label="Income Category:"
            label-for="input-3"
          >
            <b-form-select
              v-model="form.incomecategory_id"
              :options="resultsexp"
            ></b-form-select>
          </b-form-group>
        </b-col>
      </b-row>
      <b-row class="my-1">
        <b-col sm="6">
          <b-button type="submit" variant="primary">Submit</b-button>
          <b-button type="reset" variant="danger">Reset</b-button>
        </b-col>
      </b-row>
    </b-form>
    <b-card class="mt-3" header="Form Data Result">
      <pre class="m-0">{{ form }}</pre>
    </b-card>
  </div>
</template>

<script>
export default {
     data() {
      return {
          "token":(localStorage.getItem('token'))?localStorage.getItem('token'):"",

        names:"",
        results:[],
         success:false,
      error:false,
       selected: null,
        options: [
        ],
        resultsexp:[],
        form: {
           description: '',
           amount: '',
          income_date: '',
           payment_type_id:'',
          incomecategory_id:''

        },
        show: true
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


      fetch('http://127.0.0.1:8000/api/get-an-income?id='+this.$route.params.id,{
    method: 'GET',
    headers: {
        'Authorization': 'Bearer '+this.token,

    },
  // params:{
//     id:this.$route.params.id
// },
} ).then((response)=>{
        console.log(response);
        if(response.ok){
         return response.json();
        }



      }).then((datas)=>{
  // console.log(datas);

 const results=[];
 //for(const data in datas['expenseCategory']){
   //console.log( datas['expenseCategory']);
 this.form.description= datas['income'].description;
 this.form.amount= datas['income'].amount;
 this.form.income_date= datas['income'].income_date;
 this.form.incomecategory_id= datas['income'].incomecategory_id;
 this.form.payment_type_id= datas['income'].payment_type_id;

results.push({

  description: datas['income'].description,
    amount: datas['income'].amount,
 income_date: datas['income'].income_date,
  incomecategory_id: datas['income'].incomecategory_id,
  payment_type_id: datas['income'].payment_type_id,

   id: datas['income'].id,



});
 //}
 this.results=results;
 this.form.name
  });
      }



    ,
    methods: {
      onSubmit(event) {
        event.preventDefault()

  fetch('http://127.0.0.1:8000/api/update-income',{
method:'PUT',
headers:{
    'Content-Type':'application/json',
    'Authorization': 'Bearer '+this.token,

},
body:JSON.stringify({
   description:this.form.description,
    amount:this.form.amount,
    income_date:this.form.income_date,
   incomecategory_id:this.form.incomecategory_id,
    payment_type_id:this.form.payment_type_id,

    id:this.$route.params.id
}),

    }).then((response)=>{
       // console.log(response);
        if(response.ok){
         return response.json();
        }



      }).then((datas)=>{
       // console.log(response);

        if(datas.status=="true"){
                       // console.log(datas.status);

          this.successMessage="Success";
          this.success=true;
        }else{
                             //    console.log(datas.status);

          this.error=true
        }



      })



      ;

        //alert(JSON.stringify(this.form))
      },
      onReset(event) {
        event.preventDefault()
        // Reset our form values
       this.form.amount = ''
        this.form.description = ''
       this.form.income_date = ''
              this.form.incomecategory_id = ''
       this.form.payment_type_id = ''

       // this.form.checked = []
        // Trick to reset/clear native browser form validation state
        this.show = false
        this.$nextTick(() => {
          this.show = true
        })
      }
    }

}
</script>

<style>
form {
  margin-left: 30em;
}
</style>
