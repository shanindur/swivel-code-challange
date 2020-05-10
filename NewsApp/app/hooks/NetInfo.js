/**
 * Network connectivity hook
 *
 * @author       Shanindu Rajapaksha
 *
 * @version      0.1.0 2020-May-08
 */
import { useState, useEffect } from 'react';
import NetInfo from '@react-native-community/netinfo';


export const UseNetInfo = () => {
	const [ netInfo, setNetInfo ] = useState({isConnected: true});


	useEffect(() => {
		// Subscribe
		const unsubscribe = NetInfo.addEventListener(state => {
			setNetInfo(state);
		});

		// Event cleanup function
		return () => {
			// Unsubscribe
			unsubscribe();
		};
	}, []);


	return netInfo; // returns current network connection status
};
