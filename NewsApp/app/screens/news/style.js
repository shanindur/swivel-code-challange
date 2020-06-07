/**
 * Global News
 *
 * Headline -> style
 *
 * @author       Shanindu Rajapaksha
 * @version      0.0.1 2020-May-17
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
	chipContainer: {
		flexDirection: 'row',
		justifyContent: 'center',
		marginBottom: 25

	},
	activityIndicator: {
		top: '38%'
	}
});

export default styles;
