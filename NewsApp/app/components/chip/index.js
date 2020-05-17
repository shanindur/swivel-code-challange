import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import propTypes from 'prop-types';
import styles from './style';
import { Colors } from '../../util';
import LinearGradient from 'react-native-linear-gradient';

const Chip = props => {
	const { isBitcoinSelected, text } = props;

	return (
		<TouchableOpacity onPress={() => props.onPress()}>
			<LinearGradient style={[styles.chipView]} colors={isBitcoinSelected ? [Colors.primaryColor, Colors.primaryLightColor] : [Colors.grey, Colors.grey]}>
				<Text style={styles.chipText}>{text}</Text>
			</LinearGradient>
		</TouchableOpacity>
	);
};

Chip.propTypes = {
	isBitcoinSelected: propTypes.bool,
	text: propTypes.string
};

export default Chip;
