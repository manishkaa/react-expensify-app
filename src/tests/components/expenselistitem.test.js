import React from 'react';
import{shallow} from 'enzyme';
import expenses from '../fixtures/expenses';
import ExpenseListItem from '../../components/expenselistitem';
test('should render ExpenseListItem coorectly',() =>{
  const wrapper = shallow(<ExpenseListItem {...expenses[0]} />);
  expect(wrapper).toMatchSnapshot();
});
