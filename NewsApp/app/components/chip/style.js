import {StyleSheet} from 'react-native';
import { Colors } from '../../util';

const styles = StyleSheet.create({
	chipView: {
		paddingHorizontal: 15,
		paddingVertical: 8,
		borderWidth: 0,
		borderRadius: 20,
		marginHorizontal: 5,
		shadowColor: Colors.shadow,
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 1,
		shadowRadius: 10,
		elevation: 5
	},
	chipText: {
		color: Colors.white
	}
});

export default styles;
