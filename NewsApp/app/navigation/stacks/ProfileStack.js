import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Profile } from '../../screens';

const ProfileStackNav = createStackNavigator();

const ProfileStack = () => (
	<ProfileStackNav.Navigator
		initialRouteName="profile"
	>
		<ProfileStackNav.Screen
			options={{
				headerShown: false
			}}
			name="profile" component={Profile}
		/>
	</ProfileStackNav.Navigator>
);

export default ProfileStack;
