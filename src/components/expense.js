import React from 'react';
import ExpenseList from './expenselist';
import ExpenseListFilters from './expenselistfilters';
const ExpenseDashboardPage = () =>(
  <div>
  <ExpenseListFilters />
  <ExpenseList />
  </div>
);
export default ExpenseDashboardPage;
