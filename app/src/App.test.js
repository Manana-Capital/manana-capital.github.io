import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { mount } from 'enzyme';

it('renders without crashing', () => {
  // const div = document.createElement('div');
  // ReactDOM.render(<App />, div);

  const wrapper = mount(<App />);
  const text = <h2>Hello World</h2>;

  expect(wrapper.contains(text)).toEqual(true)

  expect(2).toEqual(2);
});
