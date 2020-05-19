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
import styles from './style';

const SplashScreen = () => (
	<SafeAreaView>
		<ImageBackground style={styles.imageBackground} source={require('../../assets/images/splash.jpg')}/>
	</SafeAreaView>
);
export default SplashScreen;
