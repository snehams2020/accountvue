<template>
  <div>
    <h2>Add Income</h2>
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
              <b-form-invalid-feedback id="input-live-feedback">
              {{errors.description}}    
            </b-form-invalid-feedback>
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
            <b-form-invalid-feedback id="input-live-feedback">
              {{errors.amount}}    
            </b-form-invalid-feedback>
          </b-form-group>
        </b-col>
      </b-row>
      <b-row class="my-1">
        <b-col sm="6">
          <b-form-group
            id="input-group-3"
            label="income Date:"
            label-for="input-3"
          >
            <b-form-datepicker
              id="example-datepicker"
              v-model="form.income_date"
              class="mb-2"
            ></b-form-datepicker>
               <b-form-invalid-feedback id="input-live-feedback">
              {{errors.income_date}}    
            </b-form-invalid-feedback>
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
              <b-form-invalid-feedback id="input-live-feedback">
              {{errors.payment_type_id}}    
            </b-form-invalid-feedback>
          </b-form-group>
        </b-col>
      </b-row>
      <b-row class="my-1">
        <b-col sm="6">
          <b-form-group
            id="input-group-3"
            label="income Category:"
            label-for="input-3"
          >
            <b-form-select
              v-model="form.incomecategory_id"
              :options="resultsexp"
            ></b-form-select>
             <b-form-invalid-feedback id="input-live-feedback">
              {{errors.incomecategory_id}}    
            </b-form-invalid-feedback>
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
         errors: {
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

    },
    methods: {
      onSubmit(event) {
        event.preventDefault()

  fetch('http://127.0.0.1:8000/api/add-income',{
method:'POST',
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

          this.error=true;
           this.errors.description=(datas['data']['description'])?datas['data']['description'][0]:"";
          this.errors.amount=(datas['data']['amount'])?datas['data']['amount'][0]:"";
          this.errors.income_date=(datas['data']['income_date'])?datas['data']['income_date'][0]:"";
          this.errors.incomecategory_id=(datas['data']['incomecategory_id'])?datas['data']['incomecategory_id'][0]:"";
          this.errors.payment_type_id=(datas['data']['payment_type_id'])?datas['data']['payment_type_id'][0]:"";

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
.invalid-feedback {
 display:block !important;
 width:100%;
 margin-top:.25rem;
 font-size:80%;
 color:#dc3545
}
</style>
