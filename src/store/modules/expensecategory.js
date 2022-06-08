// import Vuex from 'vuex'
// import Vue from 'vue'
// import { createStore } from 'vuex'
// Vue.use(Vuex)

export default {
    namespaced: true,
   
    state: {
        "token": (localStorage.getItem('token')) ? localStorage.getItem('token') : "",
        results: [],
        out: [],

        success:false,
        error:false,

    },
    mutations: {
        LoadData(state) {
            fetch('http://127.0.0.1:8000/api/get-expense-category', {
                method: 'GET',
                headers: {
                    'Authorization': 'Bearer ' + state.token,

                },
            }).then((response) => {
                //  console.log(response);
                if (response.ok) {
                    return response.json();
                }



            }).then((datas) => {
                // console.log(datas);

                const results = [];
                for (const data in datas['expenseCategory']) {
                    //console.log(data);

                    results.push({
                        id: datas['expenseCategory'][data].id,

                        names: datas['expenseCategory'][data].name,

                        actions: ""


                    });
                }
                state.results = results;


            });
        },
        deleteData(state, payload) {

            fetch('http://127.0.0.1:8000/api/delete-expense-category?id=' + payload.value, {
                method: 'DELETE',
                headers: {
                    'Authorization': 'Bearer ' + state.token,

                },
            }).then((response) => {

                if (response.ok) {
                    // console.log(datas.status);

                    state.success = true;
                } else {
                    //    console.log(datas.status);

                    state.error = true;
                }



            })

            ;


        }



    },
    actions: {
        async LoadData(context) {

            context.commit('LoadData');
        },
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