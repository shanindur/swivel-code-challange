/**
 * Global News
 *
 * textInput -> style
 *
 * @author       Shanindu Rajapaksha
 * @version      0.0.1 2020-May-19
 */
import {StyleSheet} from 'react-native';
import {Colors} from '../../util';

const styles = StyleSheet.create({
	inputContainer: {
		flexDirection: 'row',
		height: 50,
		marginTop: 5,
		paddingHorizontal: 10,
		alignItems: 'center',
		borderBottomWidth: 1,
		borderBottomColor: Colors.primaryColor
	},
	textInput: {
		marginLeft: 10,
		fontSize: 16,
		color: Colors.black,
		width: '80%'
	}
});

export default styles;


