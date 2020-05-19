// __tests__/__snapshot__/Splash-test.js
import React from 'react';
import {SplashScreen} from '../../app/screens';
import renderer from 'react-test-renderer';

global.fetch = jest.fn(() => new Promise(resolve => resolve()));
jest.mock('react-native-gesture-handler', () => {});
jest.mock('react-native-image-picker', () => {});
jest.mock('@react-native-community/async-storage', () => {});

test('Snapshot test', () => {
	const tree = renderer.create(<SplashScreen />).toJSON();
	expect(tree).toMatchSnapshot();
});
