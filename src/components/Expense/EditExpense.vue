<template>
<div>
      <h2>Edit Expense </h2>
                  <p v-if="success">    
                  
                  <b-alert variant="success"  show>Success Alert</b-alert>
                </p>
                    <p v-if="error">    
                  <b-alert variant="danger"  show>Not Saved</b-alert>

                    </p>
    <b-form @submit="onSubmit" @reset="onReset" v-if="show">
     <b-form-group id="input-group-2" label=" Description:" label-for="input-2">
         <b-form-textarea
      id="textarea"
      v-model="form.description"
      placeholder="Enter something..."
      rows="3"
      max-rows="6"
    ></b-form-textarea>
      </b-form-group>

      <b-form-group id="input-group-2" label=" Amount:" label-for="input-2">

          <b-form-input v-model="form.amount" placeholder="Enter Amount"></b-form-input>
      </b-form-group>
<b-form-group id="input-group-3" label="Expense Date:" label-for="input-3">

          <b-form-datepicker id="example-datepicker" v-model="form.expense_date" class="mb-2"></b-form-datepicker>
    </b-form-group>   
      <b-form-group id="input-group-3" label="Payment Type:" label-for="input-3">
            <b-form-select v-model="form.payment_type_id" :options="options"></b-form-select>
      </b-form-group>
       <b-form-group id="input-group-3" label="Expense Category:" label-for="input-3">
            <b-form-select v-model="form.expensecategory_id" :options="resultsexp"></b-form-select>
      </b-form-group>

         <b-button type="submit" variant="primary">Submit</b-button>
      <b-button type="reset" variant="danger">Reset</b-button>
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
         "token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiNDYxZjQzNTQ0OTI0MTAwZGMyMTBlMGFlNTNkNWJmYjdmODJjZTEwNWJiM2U5YzYxOWIzMmZhYTcwYzE0ZGM1YTRmMTBiOGNmMmMyZTQyZjIiLCJpYXQiOjE2NTM3MTE4NzYuODk3NTUxLCJuYmYiOjE2NTM3MTE4NzYuODk3NTY1LCJleHAiOjE2ODUyNDc4NzYuMzI3NDIyLCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.GDU-z4UN4GH5SXQch2HGBL5tgm9jMBqrfbVysQYL7vRfsCwJykoBpMOz9CwvECCbWYXLrLQmW8ksuRcRjzRpKlpRJMbpE4DyHnEFB58IHDMGy0NqZvy3MHj3XyCN6ldbfUkIBg48j_tedbqc3HrKUHZwKdWHxXsjxzur0bQixt_xqakWA2ooYvq5nc_4aHW2oSIGXCBK_8hXbZ52mMVABHijFqKFhfdU6MazVMC5wW2zhetNIuJqKoVRhQw6p7w9i0_VDKFfUTv2oF3v-8uBO0tY0yhZRDRrkA7384CTWh0G_AlMFNnJ9M4E6A8VzM2a6GGen0DhVl9QR6Ly9XYH1iEvpRznJp9J8LEwgsnK3kdE9fRQUVHeN_Wqd4WmQZdZQlGBowfrCDAINV-Q0n3NsAD26eiKAj_d47oemstL692MgCE0q-ppH5r9P1I8eLnUODZj0qkiOqHxCfPQY8_VQB0nWRxkAM4oubMwrlV3HgrjeUCyloslW0i2oEuYBC9EafSLFxrRoiaI0nNo1GmyMmhh-VQI492qdfM7U5-NtwkQ0kphWGIDgogstLRNScMm6LzBZAgmlkKe0RPb9hLZeMuiDMkEi9TIJ8sg4F-18oaTExUVnP5uSZ37mRF9GS_bKWxz9GYEL8YK50CUrMwN8Gqxtitf6YC4CjGEebmSPS8"

        ,
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
          expense_date: '',
           payment_type_id:'',
           expensecategory_id:''
          
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

 const resultsexp=[];
 for(const data in datas['expenseCategory']){
   //console.log(data);

resultsexp.push({

  text: datas['expenseCategory'][data].name,
   value: datas['expenseCategory'][data].id,



});
 }
 this.resultsexp=resultsexp;
  });
        

      fetch('http://127.0.0.1:8000/api/get-an-expense?id='+this.$route.params.id,{
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
 this.form.description= datas['expense'].description;
 this.form.amount= datas['expense'].amount;
 this.form.expense_date= datas['expense'].expense_date;
 this.form.expensecategory_id= datas['expense'].expensecategory_id;
 this.form.payment_type_id= datas['expense'].payment_type_id;

results.push({

  description: datas['expense'].description,
    amount: datas['expense'].amount,
  expense_date: datas['expense'].expense_date,
  expensecategory_id: datas['expense'].expensecategory_id,
  payment_type_id: datas['expense'].payment_type_id,
 
   id: datas['expense'].id,



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

  fetch('http://127.0.0.1:8000/api/update-expense',{
method:'PUT',
headers:{ 
    'Content-Type':'application/json',
    'Authorization': 'Bearer '+this.token,

},
body:JSON.stringify({
   description:this.form.description,
    amount:this.form.amount,
    expense_date:this.form.expense_date,
    expensecategory_id:this.form.expensecategory_id,
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
       this.form.expense_date = ''
              this.form.expensecategory_id = ''
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

</style>
