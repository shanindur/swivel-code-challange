/**
 * Global News
 *
 * Avatar Component -> style
 *
 * @author       Shanindu Rajapaksha
 * @version      0.0.1 2020-May-10
 */
import {StyleSheet} from 'react-native';
import {Colors} from '../../util';

const styles = (styleProps) => StyleSheet.create({
	imageView: {
		height: styleProps.size,
		width: styleProps.size,
		justifyContent: 'center',
		alignItems: 'center',
		elevation: 10,
		borderRadius: 75,
		backgroundColor: Colors.white,
		shadowColor: Colors.shadowColor,
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 1,
		shadowRadius: 10
	},
	avatarImage: {
		borderWidth: styleProps.withBorder ? 5 : 0,
		borderColor: Colors.white,
		height: styleProps.size,
		width: styleProps.size,
		borderRadius: 75
	},
	avatarBadge: {
		position: 'absolute',
		right: 10,
		bottom: 10,
		backgroundColor: Colors.white,
		borderRadius: 50,
		width: 30,
		height: 30,
		justifyContent: 'center',
		alignItems: 'center'
	},
	badgeIcon: {
		justifyContent: 'center'
	}
});

export default styles;
