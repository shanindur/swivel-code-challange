// __tests__/Function-test.js
import React from 'react';
import {News} from '../app/screens';

import renderer from 'react-test-renderer';

it('function and state test care', () => {
	const NewsData = renderer.create(<News />).getInstance();

	NewsData.searchNews('Web');

	expect(NewsData.state.isSearch).toEqual(true);
});
