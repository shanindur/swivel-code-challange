/**
 * Global News
 *
 * Profile
 *
 * @author       Shanindu Rajapaksha
 * @version      0.0.1 2020-May-10
 */
import React, { useEffect, useState } from 'react';
import {
	SafeAreaView,
	View,
	Text,
	TextInput
} from 'react-native';
import {useIsFocused} from '@react-navigation/native';
import {Avatar, SquareButton } from '../../components';
import ImagePicker from 'react-native-image-picker';
import Toast from 'react-native-simple-toast';
import styles from './style';
import {useStore} from '../../store';
import {StorageService} from '../../services';
import { Colors } from '../../util';

const options = {
	title: 'Select Image',
	storageOptions: {
		skipBackup: true,
		path: 'images'
	},
	quality: 0.5,
	maxWidth: 200,
	maxHeight: 200
};

const Profile = props => {
	const {state, dispatch} = useStore();
	const isFocused = useIsFocused();
	const [firstName, setFirstName] = useState();
	const [lastName, setLastName] = useState();
	const [email, setEmail] = useState();
	const [proImage, setProImage] = useState();

	const editProfilePicture = async () => {
		ImagePicker.showImagePicker(options, (response) => {
			console.log(response);
			if (response.didCancel) {
				// console.log('User cancelled image picker');
			} else if (response.error) {
				// console.log('ImagePicker Error: ', response.error);
				Toast.showWithGravity(`${response.error}, Please go to settings ang give permission to use device images.`, Toast.LONG, Toast.CENTER);
			} else if (response.customButton) {
				// console.log('User tapped custom button: ', response.customButton);
			} else {
				setProImage(`data:image/webp;base64,${response.data}`);
			}
		});
	};

	const saveUser = async()=>{
		const USER = {
			fname: firstName,
			lname: lastName,
			email: email,
			profile: proImage
		};
		dispatch({type: 'updateUser', user: USER});
		await StorageService.storeData('USER', USER);

		Toast.showWithGravity('Your details was saved successfuly!', Toast.LONG, Toast.CENTER);

	};

	const getUserData = async() => {
		const { user } = state;
		try {
			setFirstName(user.fname);
			setLastName(user.lname);
			setEmail(user.email);
			setProImage(user.profile);

		} catch (exception) {
			Toast.showWithGravity(exception.error, Toast.LONG, Toast.BOTTOM);

		}

	};

	useEffect(() => {
		getUserData();
	}, [isFocused]);

	return (
		<SafeAreaView style={styles.container}>
			<Text style={styles.title}>Profile</Text>
			<View style={styles.photoView}>
				<View style={styles.photoAvatar}>
					<Avatar isEditable={true} clickOnEditProfile={() => editProfilePicture()} size={150} image={proImage}/>
				</View>
			</View>
			<View style={styles.detailView}>
				<View style={styles.nameView}>
					<TextInput onChangeText={(value) => setFirstName(value)} style={[styles.textInput,{textAlign:'right'}]} value={firstName}  placeholder="Enter First Name"/>
					<TextInput onChangeText={(value) => setLastName(value)} style={[styles.textInput,{textAlign:'left'}]} value={lastName}  placeholder="Enter Last Name"/>
				</View>
				<TextInput onChangeText={(value) => setEmail(value)}  style={styles.textInput} value={email}  placeholder="Enter Email"/>
			</View>
			<View style={styles.buttonView}>
				<SquareButton onPress={() => saveUser()} rounded={true} text={'Save'} backgroundColor={Colors.primaryColor} buttonWidth={'50%'} fontColor={Colors.white} fontSize={18} />
			</View>
		</SafeAreaView>
	);

};

export default Profile;
