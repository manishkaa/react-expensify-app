import { createStore } from 'redux';

const incrementCount = ({incrementBy = 1} ={}) =>({
  type: 'INCREMENT',
  incrementBy//typeof incrementBy === 'number' ? incrementBy : 1
});
const decrementCount = ({decrementBy = 1} ={}) =>({
  type: 'DECREMENT',
  decrementBy
});
const setCount = ({count }) =>({
  type: 'SET',
  count
});
const resetCount = () =>({
  type: 'RESET'
});
//Reducers
//They are pure functions
//Never change state or function just read and return
/*let a = 10;
const add = (b) => {
  return a+b;
};*/ //this is not a pure function since it has global variable
const countReducers = (state = {count: 0}, action) => {
switch (action.type){
  case 'INCREMENT':
  return{
    count: state.count + action.incrementBy
  };
  case 'DECREMENT':
  //const decrementBy = typeof action.decrementBy === 'number' ? action.decrementBy : 1;
  return{
    count: state.count - action.decrementBy
  };
  case "SET":
  return {
    count:action.count
  };
  case 'RESET':
  return{
    count: 0
  };
  default:
  return state;
}
};
const store = createStore(countReducers);
const unsubscribe = store.subscribe(() =>{
  console.log(store.getState());
});
/*store.dispatch(
  {
    type: 'INCREMENT',
    incrementBy : 5
  }
);*/
store.dispatch(incrementCount({ incrementBy: 5 }));
//unsubscribe();
store.dispatch(incrementCount());
store.dispatch(resetCount());
store.dispatch(decrementCount());
store.dispatch(decrementCount({ decrementBy: 10 }));
store.dispatch(setCont({count : -100}));
//dispatch allows to send an action
