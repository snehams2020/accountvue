

export default {
    namespaced: true,
   
    state: {
        "token": (localStorage.getItem('token')) ? localStorage.getItem('token') : "",
        success:false,
        error:false,
        form: {
            name: '',
          
         },
         errors: {
           name: '',
          
         },

    },
    mutations: {

        onExpenseCategorySubmit(state,payload) {

        fetch('http://127.0.0.1:8000/api/add-expense-category',{
method:'POST',
headers:{
    'Content-Type':'application/json',
    'Authorization': 'Bearer ' + state.token,

},
body:JSON.stringify({
    name:payload.value.name
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

                       state.successMessage="Success";
                       state.success=true;
        }else{
                             //    console.log(datas.status);

                             state.error=true;
                             state.errors.name=(datas['data']['name'])?datas['data']['name'][0]:"";

        }



      });

        }



    },
    actions: {
        // async onSubmit(context) {

        //     context.commit('onSubmit');
        // },
        // deleteData(context, payload) {

        //     context.commit('deleteData'{});
        // }

    },
    getters: {


    },
    modules: {


    }


}
// export default store;