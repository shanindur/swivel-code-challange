import React from 'react';
import { View, TextInput} from 'react-native';
import styles from './style';
import { Colors } from '../../util';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const EmptyList = (props) => {
	const onChangeText = (value) => {
		props.onChangeText(value);
	};

	return (
		<View style={styles.inputContainer}>
			<FontAwesome
				name={props.iconName}
				size={20}
				color={Colors.primaryColor}
			/>
			<TextInput
				style={styles.textInput}
				placeholder={props.placeholder}
				value={props.value}
				returnKeyType="next"
				onChangeText={(value) => onChangeText(value)}
			/>
		</View>
	);
};

export default EmptyList;
