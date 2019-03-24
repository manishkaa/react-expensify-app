import React from 'react';
import {shallow} from 'enzyme';
import Header from '../../components/headers';
test('should render Header correctly', () =>{
  const wrapper = shallow(<Header />);
  expect(wrapper).toMatchSnapshot();
/*const renderer = new ReactShalloRenderer();
renderer.render(<Header />);
expect(renderer.getRenderOutput()).toMatchSnapshot();
console.log(renderer.getRenderOutput);*/
});
