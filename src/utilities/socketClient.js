import {API_URL} from '../store/constants';
import store from '../store';
import io from 'socket.io-client';
import {userJoined} from "../store/actions/actions";

let socket = null;
const dispatch = store.dispatch;

console.log('bhavya', userJoined);
// const getState = store.getState;

export const openConnection = () => {
	return new Promise((resolve, reject) => {
		socket = io(`${API_URL}/assignment7`);

		socket.on("user-joined", newUsersObject => {
			dispatch(userJoined(newUsersObject));
		});

		socket.on("connect", resolve);
	})
};

export const joinChat = (id, username, search, message) => {
	socket.emit("join", id, username, search, message);
};