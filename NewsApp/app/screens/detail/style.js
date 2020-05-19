/**
 * Global News
 *
 * News Detail -> style
 *
 * @author       Shanindu Rajapaksha
 * @version      0.0.1 2020-May-10
 */
import {StyleSheet} from 'react-native';
import {Colors, Fonts} from '../../util';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: Colors.white
	},
	headerView: {
		padding: 10,
		width: '100%',
		flexDirection: 'row'
	},

	title: {
		fontSize: Fonts.xxLarge,
		padding: 10,
		fontWeight: 'bold',
		textAlign: 'center'
	},
	description: {
		fontSize: Fonts.small,
		padding: 10,
		fontWeight: 'bold',
		textAlign: 'center',
		color: Colors.grey
	},
	content: {
		fontSize: Fonts.medium,
		padding: 10,
		textAlign: 'justify'
	},
	authorView: {
		flexDirection: 'row',
		padding: 10
	},
	authorText: {
		width: '75%',
		fontSize: Fonts.xSmall,
		color: Colors.grey
	},
	dateText: {
		width: '25%',
		textAlign: 'right',
		fontSize: Fonts.xSmall,
		color: Colors.grey
	},
	itemImage: {
		width: '100%',
		height: 200
	}
});

export default styles;
