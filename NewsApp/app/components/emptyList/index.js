import React from 'react';
import { View, Text} from 'react-native';
import styles from './style';

const EmptyList = () => (
	<View style={styles.emptyListContainer}>
		<Text testID={'article'} style={styles.emptyText}>No Articles</Text>
	</View>
);

export default EmptyList;
