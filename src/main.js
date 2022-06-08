// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import shared from './shared'

import BootstrapVue from "bootstrap-vue"
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-vue/dist/bootstrap-vue.css"
import Vuex from 'vuex'
import store from './store'; /** in my case, it should be js file. */

Vue.config.productionTip = false
Vue.use(BootstrapVue)
Vue.use(Vuex);
// const store = new Vuex.Store({
//     state() {

//         return {
//             counter: 0
//         }
//     },
//     mutations: {

//         increment(state) {

//             state.counter = state.counter + 1;
//         },
//         increase(state, payload) {

//             state.counter = state.counter + payload.value;
//         }
//     },
//     getters: {
//         finalCounter(state) {
//             return state.counter + 2;
//         }
//     }

// })

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,

    components: { App },
    template: '<App/>',
    render: h => h(App)
})
router.beforeEach((to, from, next) => {
    // redirect to login page if not logged in and trying to access a restricted page
    const publicPages = ['/login'];
    const authRequired = !publicPages.includes(to.path);
    const loggedIn = localStorage.getItem('user');

    if (authRequired && !loggedIn) {
        return next('/login');
    }

    next();
})

export default {


}