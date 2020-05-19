// __tests__/Function-test.js
import React from 'react';
import {Chip} from '../app/components';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

global.fetch = jest.fn(() => new Promise(resolve => resolve()));
jest.mock('react-native-gesture-handler', () => {});

it('Testing props', () => {
	const wrapper = shallow(<Chip text={'check'}/>).props();
	console.warn(wrapper.children.props.children.props.children);

	expect(wrapper.children.props.children.props.children).toEqual('check');
});
