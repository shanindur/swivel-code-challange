/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
/**
 * Global News
 *
 * Splash Screen
 *
 * @author       Shanindu Rajapaksha
 * @version      0.1.0 2020-May-09
 */
import React from 'react';
import {SafeAreaView, ImageBackground} from 'react-native';

const SplashScreen = () => {
	return (
		<SafeAreaView>
			<ImageBackground style={{height: '100%', width: '100%'}} source={require('../../assets/images/splash.jpg')}/>
		</SafeAreaView>
	);
};
export default SplashScreen;
