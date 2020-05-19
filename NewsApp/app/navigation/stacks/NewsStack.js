/**
 * Global News
 *
 * NewsStack
 *
 * @author       Shanindu Rajapaksha
 * @version      0.0.1 2020-May-10
 */
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { News, Detail } from '../../screens';

const NewsStackNav = createStackNavigator();

const NewsStack = () => (
	<NewsStackNav.Navigator
		initialRouteName="news"
	>
		<NewsStackNav.Screen
			options={{
				headerShown: false
			}}
			name="news" component={News}
		/>
		<NewsStackNav.Screen
			options={{
				headerShown: false
			}}
			name="detail" component={Detail}
		/>
	</NewsStackNav.Navigator>
);

export default NewsStack;
