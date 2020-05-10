/**
 * Global News
 *
 * Headline -> style
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
		backgroundColor: Colors.white,
		height: 40,
		flexDirection: 'row',
		paddingHorizontal: 10,
		paddingVertical: 5,
		marginBottom: 5
	},

	title: {
		fontSize: Fonts.xxLarge,
		padding: 10,
		fontWeight: 'bold'
	},
	item: {
		alignItems: 'center',
		backgroundColor: Colors.lightGrey,
		padding: 5,
		marginVertical: 3,
		marginHorizontal: 10
	},
	itemImage:{
		width:'100%',
		height:180
	},
	itemTitle: {
		fontSize: Fonts.large,
		padding: 10,
		fontWeight: 'bold'
	}
});

export default styles;
