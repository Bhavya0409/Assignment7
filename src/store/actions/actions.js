import uuid from "uuid";

import {SEND_INITIAL_DATA} from '../constants';
import {openConnection, joinChat} from '../../utilities/socketClient';

export const sendInitialData = (username, search, message) => {
	return async dispatch => {
		console.log('in action');
		dispatch({
			type: SEND_INITIAL_DATA,
			username,
			id: uuid.v4()
		});

		await openConnection();

		joinChat(username, search, message);
	}
};