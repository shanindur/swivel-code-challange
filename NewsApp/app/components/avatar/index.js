/**
 * Global News
 *
 * Avatar Component
 *
 * @author       Shanindu Rajapaksha
 * @version      0.0.1 2020-May-19
 */
import React from 'react';
import {View, Image} from 'react-native';
import styles from './style';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import propTypes from 'prop-types';
import {Colors} from '../../util';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Avatar = props => {
	const {imageView, avatarImage, avatarBadge, badgeIcon} = styles(props);
	return (
		<View style={imageView}>
			<Image
				style={avatarImage}
				source={{
					uri: `${props.image}`,
					headers: {
						Pragma: 'no-cache'
					}
				}}
			/>
			{props.isEditable ?
				<View style={avatarBadge}>
					<TouchableOpacity onPress={() => props.clickOnEditProfile()}>
						<MaterialIcons
							name="photo-camera"
							size={25}
							color={Colors.black}
							style={badgeIcon}
						/>
					</TouchableOpacity>
				</View> : <></>
			}
		</View>
	);
};

Avatar.defaultProps = {
	size: 75,
	isEditable: false,
	withBorder: true
};

Avatar.propTypes = {
	withBorder: propTypes.bool,
	size: propTypes.number,
	image: propTypes.string,
	isEditable: propTypes.bool,
	clickOnEditProfile: propTypes.func
};

export default Avatar;
