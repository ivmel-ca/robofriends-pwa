import React from 'react';
import { shallow, mount, render } from 'enzyme';

import CardList from './CardList';


test('expect to render one CardList component', () => {
    const mockRobots = [
        {
            id: 1,
            name: 'Bilbo Baggins',
            username: 'Barrel Rider',
            email: 'brider@gmail.com'
        }
    ];
    expect(shallow( <CardList robots={ mockRobots } /> ))
        .toMatchSnapshot();
});