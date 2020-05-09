/* eslint-disable prettier/prettier */
/**
 * NewsApp
 *
 * Entry point for the app
 *
 * @author       Shanindu Rajapaksha
 * @version      0.0.1 2020-May-08
 */
import React from 'react';
import { StatusBar } from 'react-native';

import { UseNetInfo } from './app/hooks/NetInfo';
import {NoInternet} from './app/screens';
import MainNavigator from './app/navigation/Navigator';
import { StoreProvider } from './app/store';
import { Colors } from './app/util';

import FlashMessage from 'react-native-flash-message';

const App = () => {
	const netInfo = UseNetInfo();

	return (
		<StoreProvider>
			<StatusBar backgroundColor={Colors.primaryColor}/>
			{(netInfo.isConnected) ? <MainNavigator /> : <NoInternet />}
			<FlashMessage position="top" />
		</StoreProvider>
	);
};

export default App;
