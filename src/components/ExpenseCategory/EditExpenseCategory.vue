<template>
  <div>
    <h2>Edit Expense Categories</h2>
    <p v-if="$store.state.editexpensecategory.success">
      <b-alert variant="success" show>Success Alert</b-alert>
    </p>
    <p v-if="$store.state.editexpensecategory.error">
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
          names:"",
          results:[],
          success:false,
          error:false,
        form: {
           name: this.$route.params.name,
           id: this.$route.params.id,
        },
         errors: {
          name: '',
         
        },
        show: true
      }
    },
    mounted(){
       fetch('http://127.0.0.1:8000/api/get-an-expense-category?id='+this.$route.params.id,{
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
 this.form.name= datas['expenseCategory'].name;

results.push({

  names: datas['expenseCategory'].name,
   id: datas['expenseCategory'].id,



});
 //}
 this.results=results;
 this.form.name
  });
 

      },
    methods: {
      onSubmit(event) {
        event.preventDefault();
        this.$store.commit('editexpensecategory/editExpenseCategorySubmit',{value:this.form,id:this.$route.params.id})
      },
      onReset(event) {
        event.preventDefault()
        this.form.name = ''
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
