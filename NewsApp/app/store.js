/* eslint-disable prettier/prettier */
import React, {createContext, useContext, useReducer} from 'react';

const StoreContext = createContext();
const initialState = {
	isNetworkConnected: false,
	isSignedIn: false,
	user: null,
};

const reducer = (state, action) => {
	switch (action.type) {
		case 'signedIn':
			return {
				...state,
				isSignedIn: action.isSignedIn,
				user: action.user,
			};
		case 'appStart':
			return {
				...state,
				isNetworkConnected: action.network,
			};
		case 'signingIn':
			return {
				...state,
				isSignedIn: action.isSignedIn,
				user: action.user,
			};
		case 'signOut':
			return {
				...state,
				isSignedIn: false,
				user: null,
			};
		case 'updateUser':
			return {
				...state,
				user: action.user,
			};
		default:
			throw new Error(`Unhandled action type: ${action.type}`);
	}
};

export const StoreProvider = ({children}) => {
	const [state, dispatch] = useReducer(reducer, initialState);

	return (
		<StoreContext.Provider value={{state, dispatch}}>
			{children}
		</StoreContext.Provider>
	);
};

export const useStore = () => useContext(StoreContext);
