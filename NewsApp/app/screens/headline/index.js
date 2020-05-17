/**
 * Global News
 *
 * Headline
 *
 * @author       Shanindu Rajapaksha
 * @version      0.0.1 2020-May-17
 */
import React, { useEffect, useState } from 'react';
import {
	SafeAreaView,
	FlatList,
	Text,
	ActivityIndicator
} from 'react-native';
import {useIsFocused} from '@react-navigation/native';
import styles from './style';
import axios from 'axios';
import Constants from '../../util/constants';
import {SearchBar, Article, EmptyList} from '../../components';
import { Colors } from '../../util';

const Headline = props => {
	const isFocused = useIsFocused();
	const [ fetchingData, setFetchingData ] = useState(true);
	const [ headlines, setHeadlines ] = useState([]);
	const [ filteredData, setFilteredData ] = useState([]);
	const [ isSearch, setIsSearch ] = useState(false);

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

	const searchHeadlines = (text) =>{
		if ('' === text){
			setIsSearch(false);
		} else {
			setIsSearch(true);
			setFilteredData([]);
			let filteredHeadlines = headlines.filter(item => {
				return item.title.toLowerCase().includes(text.toLowerCase());
			});
			setFilteredData(filteredHeadlines);
		}
	};

	useEffect(() => {
		fetchData();
	}, [isFocused]);

	return (
		<SafeAreaView style={styles.container}>
			<Text style={styles.title}>Headlines</Text>
			<SearchBar onTextChange={text => searchHeadlines(text)}/>
			{(fetchingData)
				? <ActivityIndicator color={Colors.primaryColor} size={'large'} style={styles.activityIndicator} />
				:
				<FlatList
					data={isSearch ? filteredData : headlines}
					renderItem={({ item }) => <Article item={item} navigation={props.navigation}/>}
					keyExtractor={item => item.id}
					ListEmptyComponent={<EmptyList/>}
				/>
			}
		</SafeAreaView>
	);

};

export default Headline;
