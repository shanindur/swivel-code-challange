/**
 * Global News
 *
 * Article -> style
 *
 * @author       Shanindu Rajapaksha
 * @version      0.0.1 2020-May-19
 */
import {StyleSheet} from 'react-native';
import {Colors, Fonts} from '../../util';

const styles = StyleSheet.create({
	itemContainer: {
		alignItems: 'center',
		backgroundColor: Colors.lightGrey,
		padding: 5,
		marginVertical: 3,
		marginHorizontal: 10
	},
	itemImage: {
		width: '100%',
		height: 180
	},
	itemTitle: {
		fontSize: Fonts.large,
		padding: 10,
		fontWeight: 'bold'
	}
});

export default styles;


