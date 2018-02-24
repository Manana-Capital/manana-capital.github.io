import React from 'react';
import { shallow } from 'enzyme';
import Text from './Text';

it('renders empty text', () => {
    const text = shallow(<Text text='Hello World' textIsVisible={true} />);
    const shouldBeRendered = shallow(<h2>Hello World</h2>);

    expect(text).toEqual(shouldBeRendered)
});
