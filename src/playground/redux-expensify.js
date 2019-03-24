import {createStore , combineReducers} from 'redux';
import uuid from 'uuid';
//ADD_expense,Remove_expense,Edit_expense,Set_text_filter,
//Sort_by_date,Sort_by_amount,Set_start_date,Set_end_date
//Expenses Reducers


//Store Creation
//filter reducer
const filterReducerDefaultState = {
  test: '',
  sortBy : 'date',
  startDate : undefined,
  endDate : undefined
};
store.subsbcribe(()=>{
  console.log(store.getState());
});
const filterReducer = (state = {filterReducerDefaultState}, action) =>{
  switch(action.type){
    default:
    return state;
  }
};
const store = createStore(
  combineReducers({
    expenses : expensesReducer,
    filters: filterReducer
  })
);
store.subscribe(()=>{
console.log(store.getState());
});
const expenseOne = store.dispatch(addExpense({description: 'Rent',amount:100}));
const expenseTwo = store.dispatch(addExpense({description: 'Coffee',amount:300}));
store.dispatch(removeExpense({id: expenseOne.expense.id}));

const demoState = {
  expenses:[{
    id : 'shhfifgild',
    description : 'January Rent',
    note : 'This was the final payment for that address',
    amount : 54500,
    createdAt: 0
  }],
  filters: {
    text : 'rent',
    sortBy : 'amount',//date or amount
    startDate : undefined,
    endDate : undefined
  }
};
