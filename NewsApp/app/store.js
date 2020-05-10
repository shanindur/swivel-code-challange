/**
 * Global News
 *
 * Store
 *
 * @author       Shanindu Rajapaksha
 * @version      0.0.1 2020-May-10
 */
import React, {createContext, useContext, useReducer} from 'react';

const StoreContext = createContext();
const initialState = {
	isNetworkConnected: false,
	user: null
};

const reducer = (state, action) => {
	switch (action.type) {
		case 'appStart':
			return {
				...state,
				isNetworkConnected: action.network,
				user: action.user
			};
		case 'updateUser':
			return {
				...state,
				user: action.user
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
