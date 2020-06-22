import React from 'react';
import { shallow, mount, render } from 'enzyme';

import MainPage from './MainPage';

let wrapper;

beforeEach(() => {
    const mockProps = {
        onRequestRobots: jest.fn(),
        robots: [],
        searchField: '',
        isPending: false
    }

    wrapper = shallow(<MainPage { ...mockProps } />);
});


test('renders the mainpage without crashing', () => {
    expect(wrapper).toMatchSnapshot();
});

test('filters robots correctly', () => {
    const mockProps = {
        onRequestRobots: jest.fn(),
        robots: [{
            id: 1,
            name: 'Bilbo Baggins',
            username: 'Barrel Rider',
            email: 'brider@gmail.com'
        }],
        searchField: 'a',
        isPending: false
    }
    const wrapperWithFilledProps = shallow(<MainPage { ...mockProps } />);
    expect(wrapperWithFilledProps.instance().filterRobots(mockProps.robots))
        .not.toEqual([]);

    expect(wrapper.instance().filterRobots([])).toEqual([]);
});