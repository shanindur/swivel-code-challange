/**
 *Global News
 *
 * No Internet Screen -> Style
 *
 * @author       Shanindu Rajapaksha
 * @version      0.1.0 2020-May-17
 */
import { StyleSheet } from 'react-native';
import { Colors, Fonts } from '../../util';

const styles = StyleSheet.create({
	background: {
		width: '100%',
		height: '100%',

		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'flex-end'
	},

	container: {
		width: '100%',
		height: '40%',
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: Colors.lightGrey
	},

	titleText: {
		fontSize: Fonts.xxLarge,
		color: Colors.danger,
		fontWeight: 'bold'
	},

	bodyText: {
		fontSize: Fonts.medium,
		color: Colors.danger
	}
});

export default styles;
