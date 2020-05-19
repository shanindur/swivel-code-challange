/**
 * Global News
 *
 * HeadlineStack
 *
 * @author       Shanindu Rajapaksha
 * @version      0.0.1 2020-May-19
 */
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Headline, Detail } from '../../screens';

const HeadlineStackNav = createStackNavigator();

const HeadlineStack = () => (
	<HeadlineStackNav.Navigator
		initialRouteName="headline"
	>
		<HeadlineStackNav.Screen
			options={{
				headerShown: false
			}}
			name="headline" component={Headline}
		/>
		<HeadlineStackNav.Screen
			options={{
				headerShown: false
			}}
			name="detail" component={Detail}
		/>
	</HeadlineStackNav.Navigator>
);

export default HeadlineStack;
