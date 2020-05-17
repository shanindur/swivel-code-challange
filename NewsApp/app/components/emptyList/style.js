/**
 * Global News
 *
 * EmptyList -> style
 *
 * @author       Shanindu Rajapaksha
 * @version      0.0.1 2020-May-17
 */
import {StyleSheet} from 'react-native';
import {Colors} from '../../util';

const styles = StyleSheet.create({
	emptyListContainer: {
		height: 400,
		justifyContent: 'center'
	},
	emptyText: {
		textAlign: 'center',
		color: Colors.primaryIcon
	}
});

export default styles;


