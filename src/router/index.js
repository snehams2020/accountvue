import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import ListExpenseCategories from '@/components/ExpenseCategory/ListExpenseCategories'
import AddExpenseCategory from '@/components/ExpenseCategory/AddExpenseCategory'
import EditExpenseCategory from '@/components/ExpenseCategory/EditExpenseCategory'
import ListPaymentType from '@/components/PaymentType/ListPaymentType'
import AddPaymentType from '@/components/PaymentType/AddPaymentType'
import EditPaymentType from '@/components/PaymentType/EditPaymentType'

import ListIncomeCategory from '@/components/IncomeCategory/ListIncomeCategory'
import AddIncomeCategory from '@/components/IncomeCategory/AddIncomeCategory'
import EditIncomeCategory from '@/components/IncomeCategory/EditIncomeCategory'
import ListExpense from '@/components/Expense/ListExpense'

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

        },
        {
            path: '/payment-type',
            name: 'PaymentType',
            component: ListPaymentType
        },
        {
            path: '/add-payment-type',
            name: 'AddPaymentType',
            component: AddPaymentType
        },
        {
            path: '/edit-payment-type/:id',
            name: 'EditPaymentType',
            component: EditPaymentType,

        },
        {
            path: '/income-category',
            name: 'IncomeCategory',
            component: ListIncomeCategory
        },
        {
            path: '/add-income-category',
            name: 'AddIncomeCategory',
            component: AddIncomeCategory
        },
        {
            path: '/edit-income-category/:id',
            name: 'EditIncomeCategory',
            component: EditIncomeCategory,

        },
        {
            path: '/expense',
            name: 'ListExpense',
            component: ListExpense
        },

    ]
})