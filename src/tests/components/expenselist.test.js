import React from 'react';
import {shallow} from 'enzyme';
import {ExpenseList} from '../../components/expenselist';
import expenses from '../fixtures/expenses';
test('should rather ExpenseList with expense',() =>{
  const wrapper = shallow(<ExpenseList expenses={expenses}/>);
  expect(wrapper).toMatchSnapshot();
});
test('should render ExpenseList with empty message', () =>{
  const wrapper = shallow(<ExpenseList expenses={[]} />);
  expect(wrapper).toMatchSnapshot();
});
