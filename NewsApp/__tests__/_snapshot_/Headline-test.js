// __tests__/__snapshot__/Headline-test.js
import React from 'react';
import {Headline} from '../../app/screens';

import renderer from 'react-test-renderer';

test('renders correctly', () => {
	const tree = renderer.create(<Headline />).toJSON();
	expect(tree).toMatchSnapshot();
});
