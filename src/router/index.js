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
import AddExpense from '@/components/Expense/AddExpense'
import EditExpense from '@/components/Expense/EditExpense'
import ListIncome from '@/components/Income/ListIncome'
import AddIncome from '@/components/Income/AddIncome'
import EditIncome from '@/components/Income/EditIncome'
import Login from '@/components/Login'
import IncomeReport from '@/components/Reports/IncomeReport'
import ExpenseReport from '@/components/Reports/ExpenseReport'
import BalanceSheet from '@/components/Reports/BalanceSheet'

Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            name: 'Home',
            component: Home
        },
        {
            path: '/login',
            name: 'Login',
            component: Login
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
        {
            path: '/add-expense',
            name: 'AddExpense',
            component: AddExpense
        },
        {
            path: '/edit-expense/:id',
            name: 'EditExpense',
            component: EditExpense,

        },
        {
            path: '/income',
            name: 'ListIncome',
            component: ListIncome
        },
        {
            path: '/add-income',
            name: 'AddIncome',
            component: AddIncome
        },
        {
            path: '/edit-income/:id',
            name: 'EditIncome',
            component: EditIncome,

        },
        {
            path: '/income-report',
            name: 'IncomeReport',
            component: IncomeReport,

        },
        {
            path: '/expense-report',
            name: 'ExpenseReport',
            component: ExpenseReport,

        },
        {
            path: '/balance-sheet',
            name: 'BalanceSheet',
            component: BalanceSheet,

        },

    ]
})