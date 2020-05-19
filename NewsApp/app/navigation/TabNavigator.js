/**
 * Global News
 *
 * TabNavigation
 *
 * @author       Shanindu Rajapaksha
 * @version      0.0.1 2020-May-19
 */
import React from 'react';
import {Image, View, Text, StyleSheet} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {HeadlineStack, NewsStack, ProfileStack} from './stacks';
import {Colors, Fonts} from '../util';

const Tab = createMaterialTopTabNavigator();
const TabStack = createStackNavigator();

const TabStackNavigator = props => (
	<TabStack.Navigator
		screenOptions={{
			headerStyle: {
				elevation: 0
			}
		}}>
		<TabStack.Screen
			name="posts"
			component={TabNavigator}
			options={{
				headerTitle: () => <HeaderLogo />
			}}
		/>
	</TabStack.Navigator>
);

const HeaderLogo = () => (
	<View style={styles.logoView}>
		<Image style={styles.headerLogo} source={require('../assets/images/logo.png')} />
		<Text style={styles.logoText}>Global News</Text>
	</View>
);

const TabNavigator = props => (
	<Tab.Navigator
		swipeEnabled={false}
		tabBarOptions={{
			style: styles.tabNavigatorStyle,
			activeBackgroundColor: Colors.white,
			inactiveBackgroundColor: Colors.white,
			inactiveTintColor: Colors.primaryIcon,
			activeTintColor: Colors.primaryColor,
			showIcon: true,
			showLabel: false,
			indicatorStyle: styles.tabIndicatorStyle,
			iconStyle: styles.tabIconStyle
		}}
		lazy={true}
	>
		<Tab.Screen
			name="headline"
			component={HeadlineStack}
			options={{
				tabBarIcon: ({focused, color}) => (
					<Icon name="home" size={25} color={color} />
				)
			}}
		/>
		<Tab.Screen
			name="news"
			component={NewsStack}
			options={{
				tabBarIcon: ({focused, color}) => (
					<Icon name="newspaper" size={25} color={color} />
				)
			}}
		/>
		<Tab.Screen
			name="profile"
			component={ProfileStack}
			options={{
				tabBarIcon: ({focused, color}) => (
					<Icon name="user" size={25} color={color} />
				)
			}}
		/>
	</Tab.Navigator>
);

export default TabStackNavigator;

const styles = StyleSheet.create({
	headerLogo: {
		width: 30,
		height: 30
	},
	logoView: {
		flexDirection: 'row',
		alignItems: 'center'
	},
	logoText: {
		paddingLeft: 8,
		fontSize: Fonts.xxLarge,
		color: Colors.primaryColor,
		fontWeight: 'bold'
	},
	tabNavigatorStyle: {
		shadowColor: Colors.primaryBlack,
		shadowOffset: {width: 0, height: 0},
		shadowRadius: 15,
		shadowOpacity: 1,
		elevation: 5,
		borderBottomColor: 'transparent',
		height: 50
	},
	tabIndicatorStyle: {
		backgroundColor: 'transparent'
	},
	tabIconStyle: {
		height: 50,
		width: 50,
		justifyContent: 'space-between',
		alignItems: 'center'
	}
});

