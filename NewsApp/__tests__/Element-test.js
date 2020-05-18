// __tests__/Element-test.js
import React from 'react';
import {Profile} from '../app/screens';

import renderer from 'react-test-renderer';

let findElement = (tree, element) => {

	let result;

	for (let node in tree.children){
		if (tree.children[node].props.testID === element) {
			result = tree;
		}
	}
	return result;
};

it('find element', () => {
	const tree = renderer.create(<Profile />).toJSON();

	expect(findElement(tree,'firstName')).toBeDefined();
});
