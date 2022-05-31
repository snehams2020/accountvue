<template>
  <div>

          <h2>Add Expense Categories</h2>
                  <p v-if="success">    
                  
                  <b-alert variant="success"  show>Success Alert</b-alert>
                </p>
                    <p v-if="error">    
                  <b-alert variant="danger"  show>Not Saved</b-alert>

                    </p>

    <b-form @submit="onSubmit" @reset="onReset" v-if="show">
     
       

      <b-form-group id="input-group-2" label=" Name:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.name"
          placeholder="Enter name"
          required
        ></b-form-input>
      </b-form-group>
   
      <!-- <b-form-group id="input-group-3" label="Food:" label-for="input-3">
        <b-form-select
          id="input-3"
          v-model="form.food"
          :options="foods"
          required
        ></b-form-select>
      </b-form-group>

      <b-form-group id="input-group-4" v-slot="{ ariaDescribedby }">
        <b-form-checkbox-group
          v-model="form.checked"
          id="checkboxes-4"
          :aria-describedby="ariaDescribedby"
        >
          <b-form-checkbox value="me">Check me out</b-form-checkbox>
          <b-form-checkbox value="that">Check that out</b-form-checkbox>
        </b-form-checkbox-group>
      </b-form-group> -->

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
         "token":(localStorage.getItem('token'))?localStorage.getItem('token'):"",   

         success:false,
      error:false,
        form: {
         // email: '',
           name: '',
          // food: null,
          // checked: []
        },
      //  foods: [{ text: 'Select One', value: null }, 'Carrots', 'Beans', 'Tomatoes', 'Corn'],
        show: true
      }
    },
    methods: {
      onSubmit(event) {
        event.preventDefault()

  fetch('http://127.0.0.1:8000/api/add-expense-category',{
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