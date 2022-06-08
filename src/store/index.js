import Vuex from 'vuex'
import Vue from 'vue'
import expensecategory from './modules/expensecategory'
import addexpensecategory from './modules/addexpensecategory'
import editexpensecategory from './modules/editexpensecategory'


Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        expensecategory,addexpensecategory,editexpensecategory

    }


})