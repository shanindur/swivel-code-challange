import React from 'react';
import { Text, TouchableOpacity, Image } from 'react-native';
import propTypes from 'prop-types';
import styles from './style';

const Article = ({ item, navigation}) => (
	<TouchableOpacity style={styles.itemContainer} onPress={() => navigation.navigate('detail', { newsItem: item })}>
		<Image
			style={styles.itemImage}
			source={{
				uri: item.urlToImage
			}}
		/>
		<Text style={styles.itemTitle}>{item.title}</Text>
	</TouchableOpacity>
);

Article.propTypes = {
	item: propTypes.object
};

export default Article;
