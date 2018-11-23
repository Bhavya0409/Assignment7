import {SEND_INITIAL_DATA} from "../constants";

const initialState = {
	currentUser: {
		username: "",
		id: null
	},
	users: []
};
export default (state = initialState, action) => {
	switch (action.type) {
		case SEND_INITIAL_DATA:
			return {
				...state,
				currentUser: {
					username: action.username,
					id: action.id
				}
			};
		default:
			return state;
	}
}