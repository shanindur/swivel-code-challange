import React from 'react';
import { View, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import propTypes from 'prop-types';
import styles from './style';
import { Colors } from '../../util';

const SearchBar = props => {
	const onTextChange = text => {
		props.onTextChange(text);
	};

	return (
		<View style={styles.containerView}>
			<View style={styles.searchBarView}>
				<View style={styles.iconView}>
					<Icon
						name="ios-search"
						size={20}
						color={Colors.primaryIcon}
						style={styles.searchIcon}
					/>
				</View>
				<View style={styles.inputView}>
					<TextInput
						style={styles.SearchTextInput}
						placeholder={'Search by title'}
						onChangeText={text => onTextChange(text)}
					/>
				</View>
			</View>
		</View>
	);
};

SearchBar.propTypes = {
	onTextChange: propTypes.func.isRequired
};

export default SearchBar;
