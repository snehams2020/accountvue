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

        editExpenseCategorySubmit(state,payload) {

        fetch('http://127.0.0.1:8000/api/update-expense-category',{
            method:'PUT',
            headers:{
                'Content-Type':'application/json',
                'Authorization': 'Bearer '+state.token,
            
            },
            body:JSON.stringify({
                name:payload.value.name,
                id:payload.id
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
            
            
        },
        // getExpenseCategory(state,payload) {
        // if(payload.id!=""){
        //     fetch('http://127.0.0.1:8000/api/get-an-expense-category?id='+payload.id,{
        //         method: 'GET',
        //         headers: {
        //         'Authorization': 'Bearer ' + state.token,
            
        //         },
             
        //     } ).then((response)=>{
        //             console.log(response);
        //             if(response.ok){
        //              return response.json();
        //             }
            
            
            
        //           }).then((datas)=>{
        //       // console.log(datas);
            
        //      const results=[];
            
        //        state.form.name= datas['expenseCategory'].name;
            
        //     results.push({
            
        //       names: datas['expenseCategory'].name,
        //        id: datas['expenseCategory'].id,
            
            
            
        //     });
            
        //      state.results=results;
        //      state.form.name
        
        //       });

        //     }

//}




    },
    actions: {
      

    },
    getters: {


    },
    modules: {


    }


}
// export default store;