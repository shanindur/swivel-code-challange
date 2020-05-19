/**
 * Global News
 *
 * Headline
 *
 * @author       Shanindu Rajapaksha
 * @version      0.0.1 2020-May-19
 */
import React, { useEffect, useState } from 'react';
import {
	SafeAreaView,
	View,
	FlatList,
	Text,
	ActivityIndicator
} from 'react-native';
import {useIsFocused} from '@react-navigation/native';
import styles from './style';
import axios from 'axios';
import {Colors, Constants} from '../../util';
import {SearchBar, Article} from '../../components';

const Headline = props => {
	const isFocused = useIsFocused();
	const [ fetchingData, setFetchingData ] = useState(true);
	const [ headlines, setHeadlines ] = useState([]);
	const [ filteredData, setFilteredData ] = useState([]);
	const [ isSearch, setIsSearch ] = useState(false);
	const [isUpdating, setIsUpdating] = useState(false);

	const fetchData = () => {
		setFetchingData(true);
		setIsUpdating(true);
		setHeadlines([]);
		axios.get(Constants.BASE_URL + 'top-headlines', {
			params: {
				sources: 'bbc-news',
				apiKey: Constants.API_KEY
			}
		})
			.then(response => {
				console.log(response);
				setHeadlines(response.data.articles);
			})
			.catch(error => {
				console.log(error);
			})
			.finally(() => {
				setFetchingData(false);
				setIsUpdating(false);
			});
	};

	const searchHeadlines = (text) => {
		if ('' === text){
			setIsSearch(false);
		} else {
			setIsSearch(true);
			setFilteredData([]);
			const filteredHeadlines = headlines.filter(item => item.title.toLowerCase().includes(text.toLowerCase()));
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
			{(!fetchingData && headlines && (0 === headlines.length))
				? (
					<View style={{ alignItems: 'center', top: '38%' }}>
						<Text>Looks like there are no articles...</Text>
						<Text>Pull down to refresh</Text>
					</View>
				)
				: null
			}
			{(fetchingData && headlines)
				? <ActivityIndicator color={Colors.primaryColor} size={'large'} style={styles.activityIndicator} />
				:
				<FlatList
					data={isSearch ? filteredData : headlines}
					onRefresh={() => fetchData()}
					refreshing={isUpdating}
					renderItem={({ item }) => <Article item={item} navigation={props.navigation}/>}
					keyExtractor={item => item.id}
					// ListEmptyComponent={<EmptyList/>}
				/>
			}
		</SafeAreaView>
	);

};

export default Headline;
