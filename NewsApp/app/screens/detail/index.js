/**
 * Global News
 *
 * News Detail
 *
 * @author       Shanindu Rajapaksha
 * @version      0.0.1 2020-May-10
 */
import React from 'react';
import {
	SafeAreaView,
	ScrollView,
	Text,
	Image,
	TouchableOpacity,
	View,
	Linking
} from 'react-native';
import styles from './style';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Moment from 'moment';


const Detail = props => {

	const { params: {newsItem: {
		author,
		content,
		description,
		publishedAt,
		title,
		url,
		urlToImage
	}}} = props.route;

	const formatDate = (date) => {
		const dt = date;
		Moment.locale('en');
		return Moment(dt).format('MMM DD, YYYY');
	};

	return (
		<SafeAreaView style={styles.container}>
			<View style={styles.headerView}>
				<TouchableOpacity onPress={() => props.navigation.goBack()} style={{width:'90%'}}>
					<Icon name={'arrow-left'} size={20} />
				</TouchableOpacity>
				<TouchableOpacity onPress={() => {Linking.openURL(url);}}>
					<Icon name={'external-link-alt'} size={20} />
				</TouchableOpacity>
			</View>
			<Text style={styles.title}>{title}</Text>
			<ScrollView>
				<Text style={styles.description}>{description}</Text>
				<View style={styles.authorView}>
					<Text style={styles.authorText}>By {author}</Text>
					<Text style={styles.dateText}>{formatDate(publishedAt)}</Text>
				</View>
				<Image
					style={styles.itemImage}
					source={{
						uri: urlToImage
					}}
				/>
				<Text style={styles.content}>{content}</Text>
			</ScrollView>
		</SafeAreaView>
	);

};

export default Detail;
