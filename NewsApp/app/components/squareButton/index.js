/**
 * Global News
 *
 * Square Button Component
 *
 * @author       Shanindu Rajapaksha
 * @version      0.0.1 2020-May-10
 */
import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import propTypes from 'prop-types';
import styles from './style';
import {Colors, Fonts} from '../../util';

const SquareButton = props => {
	const {touchableOpacityStyle, textStyle} = styles(props);

	const buttonClick = () => {
		props.onPress();
	};

	return (
		<TouchableOpacity
			disabled={props.isDisable}
			activeOpacity={0.8}
			onPress={buttonClick}
			style={touchableOpacityStyle}>
			<Text style={textStyle} numberOfLines={2}>{props.text}</Text>
		</TouchableOpacity>
	);
};

SquareButton.defaultProps = {
	fontColor: Colors.primaryColor,
	backgroundColor: Colors.white,
	fontSize: Fonts.medium,
	rounded: false,
	buttonWidth: '60%',
	isDisable: false
};

SquareButton.propTypes = {
	isDisable: propTypes.bool,
	text: propTypes.string.isRequired,
	onPress: propTypes.func.isRequired,
	rounded: propTypes.bool,
	fontColor: propTypes.string,
	fontSize: propTypes.number,
	backgroundColor: propTypes.string,
	buttonWidth: propTypes.string
};

export default SquareButton;
