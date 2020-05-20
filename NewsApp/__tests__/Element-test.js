// __tests__/Element-test.js
import React from 'react';
import {EmptyList} from '../app/components';

import renderer from 'react-test-renderer';

global.fetch = jest.fn(() => new Promise(resolve => resolve()));
jest.mock('react-native-gesture-handler', () => {});
jest.mock('react-native-image-picker', () => {});
jest.mock('@react-native-community/async-storage', () => {});

const findElement = (tree, element) => {

	let result;

	for (const node in tree.children){
		if (tree.children[node].props.testID === element) {
			result = tree;
		}
	}
	return result;
};

it('Testing element', () => {
	const tree = renderer.create(<EmptyList />).toJSON();

	expect(findElement(tree, 'article')).toBeDefined();
});
