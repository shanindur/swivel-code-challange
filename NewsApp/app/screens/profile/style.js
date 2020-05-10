/**
 * Global News
 *
 * Profile -> style
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
	photoView: {
		padding: 10
	},
	photoAvatar: {
		alignItems: 'center'
	},
	detailView:{
		alignItems: 'center',
		marginTop:50
	},
	nameView:{
		flexDirection:'row'
	},
	textInput:{
		height:40,
		fontSize:Fonts.large

	},
	buttonView: {
		alignItems: 'center'
	},
	item: {
		flexDirection: 'row',
		alignItems: 'center',
		backgroundColor: Colors.lightGrey,
		padding: 5,
		marginVertical: 3,
		marginHorizontal: 10
	}

});

export default styles;
