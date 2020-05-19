/**
 * Global News
 *
 * Navigator
 *
 * @author       Shanindu Rajapaksha
 * @version      0.0.1 2020-May-19
 */
import React, {useState, useEffect} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import TabNavigator from './TabNavigator';
import { SplashScreen } from '../screens';
import {StorageService} from '../services';
import { useStore } from '../store';


const Navigator = () => {
	const { dispatch } = useStore();
	const [ isLoading, setIsLoading ] = useState(true);
	const [ isConnected, setIsConnected ] = useState(false); // TODO: Use of `isConnected`??!!


	const appStart = async() =>
	{
		const user  = await StorageService.getData('USER');

		dispatch({type: 'appStart', network: isConnected, user: user});
		setTimeout(() => {
			setIsLoading(false);
		}, 5000);
	};

	useEffect(() => {
		appStart();
	}, []);

	return (
		<NavigationContainer>
			{isLoading ? <SplashScreen /> : <TabNavigator />}
		</NavigationContainer>
	);
};

export default Navigator;
