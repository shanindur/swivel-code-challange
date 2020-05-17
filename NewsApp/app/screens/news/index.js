/**
 * Global News
 *
 * News
 *
 * @author       Shanindu Rajapaksha
 * @version      0.0.1 2020-May-10
 */
import React, { useEffect, useState } from 'react';
import {
	SafeAreaView,
	View,
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
import {SearchBar} from '../../components';
import { Colors } from '../../util';

const News = props => {
	const isFocused = useIsFocused();
	const [ fetchingData, setFetchingData ] = useState(true);
	const [ data, setData ] = useState([]);
	const [ filteredData, setFilteredData ] = useState([]);
	const [ isSearch, setIsSearch ] = useState(false);

	const [ isBitcoinSelected, setIsBitcoinSelected ] = useState(false);
	const [ isAppleSelected, setIsAppleSelected ] = useState(false);
	const [ isEarthquakeSelected, setIsEarthquakeSelected ] = useState(false);
	const [ isAnimalSelected, setIsAnimalSelected ] = useState(false);

	const Item = ({ item }) => {
		return (
			<TouchableOpacity style={styles.item} onPress={() => props.navigation.navigate('detail', { newsItem: item })}>
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

	const onClickBitcoin = () => {
		fetchData('bitcoin');

		setIsBitcoinSelected(true);
		setIsAppleSelected(false);
		setIsEarthquakeSelected(false);
		setIsAnimalSelected(false);
	};

	const onClickApple = () => {
		fetchData('apple');

		setIsBitcoinSelected(false);
		setIsAppleSelected(true);
		setIsEarthquakeSelected(false);
		setIsAnimalSelected(false);
	};

	const onClickEarthquarke = () => {
		fetchData('earthquake');

		setIsBitcoinSelected(false);
		setIsAppleSelected(false);
		setIsEarthquakeSelected(true);
		setIsAnimalSelected(false);
	};

	const onClickAnimal = () => {
		fetchData('animal');

		setIsBitcoinSelected(false);
		setIsAppleSelected(false);
		setIsEarthquakeSelected(false);
		setIsAnimalSelected(true);
	};

	const fetchData = (source) => {
		setIsSearch(false);
		setData([]);
		setFilteredData([]);
		setFetchingData(true);
		axios.get('https://newsapi.org/v2/everything', {
			params: {
				q: source,
				apiKey: Constants.API_KEY
			}
		})
			.then(response => {
				console.log(response.data.articles);
				setData(response.data.articles);
			})
			.catch(error => {
				console.log(error);
			})
			.finally(() => {
				setFetchingData(false);
			});
	};

	const searchNews = (text) => {
		if ('' === text){
			setIsSearch(false);
		} else {
			setIsSearch(true);
			setFilteredData([]);
			let filteredNews = data.filter(item => {
				return item.title.toLowerCase().includes(text.toLowerCase());
			});
			setFilteredData(filteredNews);
		}
	};

	useEffect(() => {
		onClickBitcoin();
	}, [isFocused]);

	return (
		<SafeAreaView style={styles.container}>
			<Text style={styles.title}>News</Text>
			<View style={styles.chipContainer}>
				<TouchableOpacity onPress={()=>onClickBitcoin()} style={[styles.chipView, {backgroundColor:isBitcoinSelected ? Colors.primaryColor : Colors.grey}]}>
					<Text style={styles.chipText}>Bitcoin</Text>
				</TouchableOpacity>
				<TouchableOpacity onPress={()=>onClickApple()} style={[styles.chipView, {backgroundColor:isAppleSelected ? Colors.primaryColor : Colors.grey}]}>
					<Text style={styles.chipText}>Apple</Text>
				</TouchableOpacity>
				<TouchableOpacity onPress={()=>onClickEarthquarke()} style={[styles.chipView, {backgroundColor:isEarthquakeSelected ? Colors.primaryColor : Colors.grey}]}>
					<Text style={styles.chipText}>Earthquake</Text>
				</TouchableOpacity>
				<TouchableOpacity onPress={()=>onClickAnimal()} style={[styles.chipView, {backgroundColor:isAnimalSelected ? Colors.primaryColor : Colors.grey}]}>
					<Text style={styles.chipText}>Animal</Text>
				</TouchableOpacity>
			</View>
			<SearchBar onTextChange={text => searchNews(text)}/>
			{(fetchingData)
				? <ActivityIndicator color={Colors.primaryColor} size={'large'} style={{ top: '38%' }} />
				:
				<FlatList
					data={isSearch ? filteredData : data}
					renderItem={({ item }) => <Item item={item} />}
					keyExtractor={item => item.id}
				/>
			}
		</SafeAreaView>
	);

};

export default News;
