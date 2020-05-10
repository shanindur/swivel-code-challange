/**
 * Global News
 *
 * Storage Service
 *
 * @author       Shanindu Rajapaksha
 * @version      0.0.1 2020-May-10
 */
import AsyncStorage from '@react-native-community/async-storage';

const storeData = async (key, data) => {
	try {
		await AsyncStorage.setItem(key, JSON.stringify(data));
	} catch (e) {
		// saving error
	}
};

const getData = async (key) => {
	try {
		const value = await AsyncStorage.getItem(key);

		if (null !== value) {
			return JSON.parse(value);
		}
	} catch (e) {
		// error reading value
	}
};

const removeStorage = async (key) => {
	try {
		await AsyncStorage.removeItem(key);
	} catch (e) {
		// error reading value
	}
};


export default {
	storeData,
	getData,
	removeStorage
};
