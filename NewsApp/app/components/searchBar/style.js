import { StyleSheet } from 'react-native';
import { Colors } from '../../util';

const styles = StyleSheet.create({
	containerView: {
		justifyContent: 'center',
		alignItems: 'center',
		marginHorizontal: 12
	},
	searchBarView: {
		height: 40,
		width: '100%',
		marginHorizontal: 10,
		borderRadius: 10,
		flexDirection: 'row',
		alignItems: 'center',
		borderWidth: 0,
		borderBottomWidth: 1,
		borderColor: Colors.primaryColor,
		backgroundColor: Colors.white,
		marginBottom: 10
	},
	iconView: {
		height: 40,
		width: 40,
		justifyContent: 'center',
		alignItems: 'center'
	},
	searchIcon: {
		justifyContent: 'center',
		padding: 8
	},
	inputView: {
		height: 40,
		width: '100%',
		justifyContent: 'center'
	},
	searchTextInput: {
		justifyContent: 'center',
		alignItems: 'center',
		color: Colors.primaryIcon
	}
});

export default styles;
