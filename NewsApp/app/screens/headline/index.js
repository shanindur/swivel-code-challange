/**
 * Global News
 *
 * Headline
 *
 * @author       Shanindu Rajapaksha
 * @version      0.0.1 2020-May-10
 */
import React, { useEffect, useState } from 'react';
import {
	SafeAreaView,
	FlatList,
	Text,
	Image,
	ActivityIndicator,
	TouchableOpacity
} from 'react-native';
import {useIsFocused} from '@react-navigation/native';
import styles from './style';
import axios from 'axios';
import Constants from '../../util/constants';
import { Colors } from '../../util';

const Item = ({ item }) => {
	return (
		<TouchableOpacity style={styles.item}>
			<Image
				style={styles.itemImage}
				source={{
					uri: item.urlToImage
				}}
			/>
			<Text style={styles.itemTitle}>{item.title}</Text>
		</TouchableOpacity>
	);
};




const Headline = props => {
	const isFocused = useIsFocused();
	const [ fetchingData, setFetchingData ] = useState(true);
	const [ headlines, setHeadlines ] = useState([]);

	const fetchData = () => {
		setFetchingData(true);
		axios.get('https://newsapi.org/v2/top-headlines', {
			params: {
				sources: 'bbc-news',
				apiKey: Constants.API_KEY
			}
		})
			.then(response => {
				console.log(response.data.articles);
				setHeadlines(response.data.articles);
			})
			.catch(error => {
				console.log(error);
			})
			.finally(() => {
				setFetchingData(false);
			});
	};

	useEffect(() => {
		fetchData();
	}, [isFocused]);

	return (
		<SafeAreaView style={styles.container}>
			<Text style={styles.title}>Headline</Text>
			{(fetchingData)
				? <ActivityIndicator color={Colors.primaryColor} size={'large'} style={{ top: '38%' }} />
				:
				<FlatList
					data={headlines}
					renderItem={({ item }) => <Item item={item} />}
					keyExtractor={item => item.id}
				/>
			}
		</SafeAreaView>
	);

};

export default Headline;
