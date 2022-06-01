<template>
  <div>
    <h2>Add PaymentType</h2>
    <p v-if="success">
      <b-alert variant="success" show>Success Alert</b-alert>
    </p>
    <p v-if="error">
      <b-alert variant="danger" show>Not Saved</b-alert>
    </p>

    <b-form @submit="onSubmit" @reset="onReset" v-if="show">
      <b-row class="my-1">
        <b-col sm="6">
          <b-form-group id="input-group-2" label=" Name:" label-for="input-2">
            <b-form-input
              id="input-2"
              v-model="form.name"
              placeholder="Enter name"
              required
            ></b-form-input>
             <b-form-invalid-feedback id="input-live-feedback">
              {{errors.name}}    
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
        form: {
           name: '',
          
        },
         errors: {
          name: '',
         
        },
        show: true
      }
    },
    methods: {
      onSubmit(event) {
        event.preventDefault()

  fetch('http://127.0.0.1:8000/api/add-payment-type',{
method:'POST',
headers:{
    'Content-Type':'application/json',
    'Authorization': 'Bearer '+this.token,

},
body:JSON.stringify({
    name:this.form.name
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
          this.errors.name=(datas['data']['name'])?datas['data']['name'][0]:"";

        }



      })



      ;

        //alert(JSON.stringify(this.form))
      },
      onReset(event) {
        event.preventDefault()
        // Reset our form values
       // this.form.email = ''
        this.form.name = ''
       // this.form.food = null
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
.invalid-feedback {
 display:block !important;
 width:100%;
 margin-top:.25rem;
 font-size:80%;
 color:#dc3545
}

</style>
