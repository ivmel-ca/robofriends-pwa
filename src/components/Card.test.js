import React from 'react';
import { shallow, mount, render } from 'enzyme';

import Card from './Card';


test('expect to render one Card component', () => {
    expect(shallow( <Card /> ).length).toEqual(1);
    expect(shallow( <Card /> )).toMatchSnapshot();
});