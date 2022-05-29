import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import ListExpenseCategories from '@/components/ExpenseCategory/ListExpenseCategories'
import AddExpenseCategory from '@/components/ExpenseCategory/AddExpenseCategory'
import EditExpenseCategory from '@/components/ExpenseCategory/EditExpenseCategory'

Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            name: 'Home',
            component: Home
        },
        {
            path: '/expense-categories',
            name: 'ExpenseCategories',
            component: ListExpenseCategories
        },
        {
            path: '/add-expense-category',
            name: 'AddExpenseCategory',
            component: AddExpenseCategory
        },
        {
            path: '/edit-expense-category/:id',
            name: 'EditExpenseCategory',
            component: EditExpenseCategory,

        }

    ]
})