/**
 * Global News
 *
 * Square Button Component -> style
 *
 * @author       Shanindu Rajapaksha
 * @version      0.0.1 2020-May-10
 */
import {StyleSheet, Dimensions} from 'react-native';
import {Colors} from '../../util';

const styles = stylesProps =>
	StyleSheet.create({
		touchableOpacityStyle: {
			marginVertical: 20,
			minWidth: stylesProps.buttonWidth,
			maxWidth: Dimensions.get('window').width * 0.9,
			paddingHorizontal: 20,
			borderColor: Colors.primaryColor,
			borderWidth: 2,
			borderRadius: stylesProps.rounded ? 50 : 10,
			minHeight: 40,
			alignItems: 'center',
			justifyContent: 'center',
			shadowColor: Colors.shadowColor,
			shadowOffset: { width: 0, height: 2 },
			shadowOpacity: 1,
			shadowRadius: 10
		},
		textStyle: {
			textAlign: 'center',
			color: Colors.primaryColor,
			fontSize: stylesProps.fontSize
		}
	});

export default styles;
