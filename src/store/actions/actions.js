import uuid from "uuid";

import {SEND_INITIAL_DATA, USER_JOINED} from '../constants';
import {openConnection, joinChat} from '../../utilities/socketClient';

export const sendInitialData = (username, search, message) => {
	return async (dispatch, getState) => {

		dispatch({
			type: SEND_INITIAL_DATA,
			username,
			id: uuid.v4()
		});

		const {users} = getState();
		const {id} = users.currentUser;

		await openConnection();

		await joinChat(id, username, search, message);
	}
};

export const test = 'test';

export const userJoined = newUsersObject => {
	console.log(newUsersObject);
	return dispatch => {
		dispatch({
			type: USER_JOINED,
			newUsersObject
		})
	}
};