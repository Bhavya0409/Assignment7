import {SEND_INITIAL_DATA, USER_JOINED} from "../constants";

const initialState = {
	currentUser: {
		username: "",
		id: null
	},
	connected: false,
	users: {}
};
export default (state = initialState, action) => {
	switch (action.type) {
		case SEND_INITIAL_DATA:
			const newUser = {
				username: action.username,
				id: action.id
			};
			return {
				...state,
				currentUser: newUser,
				// users: {
				// 	...state.users,
				// 	[action.id]: newUser
				// }
			};
		case USER_JOINED:
			const users = action.newUsersObject;
			return {
				...state,
				users
			};
		default:
			return state;
	}
}