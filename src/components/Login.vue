<template>
  <div class="vue-tempalte">
    <p v-if="success">
      <b-alert variant="success" show>Success </b-alert>
    </p>
    <p v-if="error">
      <b-alert variant="danger" show>Incorrect password or username</b-alert>
    </p>
    <form @submit.prevent="onSubmit()">
      <h3>Sign In</h3>
      <div class="form-group">
        <label>Email address</label>
        <input
          type="email"
          class="form-control form-control-lg"
          v-model="form.email"
        />
          <b-form-invalid-feedback id="input-live-feedback">
              {{errors.email}}    
            </b-form-invalid-feedback>
      </div>
      <div class="form-group">
        <label>Password</label>
        <input
          type="password"
          class="form-control form-control-lg"
          v-model="form.password"
        />
          <b-form-invalid-feedback id="input-live-feedback">
              {{errors.password}}    
            </b-form-invalid-feedback>
      </div>
      <button type="submit" class="btn btn-dark btn-lg btn-block">
        Sign In
      </button>
     
    </form>
  </div>
</template>

<script>
  export default {
    data() {
      return {
          success:false,
      error:false,
         form: {
           email: '',
          password: '',
        },
         errors: {
         email: '',
          password: '',
         
        },

      };
    },
    methods: {
      onSubmit() {
        // this will be called only after form is valid. You can do api call here to login
      localStorage.removeItem('user');
    localStorage.removeItem('token');
 fetch('http://127.0.0.1:8000/api/login',{
method:'POST',
headers:{
    'Content-Type':'application/json',
    // 'Authorization': 'Bearer '+this.token,

},
body:JSON.stringify({
    email:this.form.email,
    password:this.form.password,

}),

    }).then((response)=>{
      console.log(response);
        if(response.ok){
         return response.json();
        }



      }).then((datas)=>{
        if(datas.status===true){
         // console.log(datas);
          this.success=true;

        localStorage["token"]=datas.data.token;
        localStorage["user"]=datas.data.user;
        this.$router.push('/home');


       }else{
         console.log(datas.status);

          this.error=true;
          this.errors.email=(datas['data']['email'])?datas['data']['email'][0]:"";
          this.errors.password=(datas['data']['password'])?datas['data']['password'][0]:"";

            localStorage.removeItem('user');
            localStorage.removeItem('token');  
       }





        }


      ).catch((error) => {
        console.log(error);
      });





}
    }
  };
</script>
<style scoped>
form{
  margin-left:0em;
}
* {
  box-sizing: border-box;
}
body {
  background: #2554ff !important;
  min-height: 100vh;
  display: flex;
  font-weight: 400;
}
body,
html,
.App,
.vue-tempalte,
.vertical-center {
  width: 100%;
  height: 100%;
}
.navbar-light {
  background-color: #ffffff;
  box-shadow: 0px 14px 80px rgba(34, 35, 58, 0.2);
}
.vertical-center {
  display: flex;
  text-align: left;
  justify-content: center;
  flex-direction: column;
}
.inner-block {
  width: 450px;
  margin: auto;
  background: #ffffff;
  box-shadow: 0px 14px 80px rgba(34, 35, 58, 0.2);
  padding: 40px 55px 45px 55px;
  border-radius: 15px;
  transition: all 0.3s;
}
.vertical-center .form-control:focus {
  border-color: #2554ff;
  box-shadow: none;
}
.vertical-center h3 {
  text-align: center;
  margin: 0;
  line-height: 1;
  padding-bottom: 20px;
}
label {
  font-weight: 500;
}
.invalid-feedback {
 display:block !important;
 width:100%;
 margin-top:.25rem;
 font-size:80%;
 color:#dc3545
}
</style>
