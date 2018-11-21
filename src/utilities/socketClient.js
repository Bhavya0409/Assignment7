import {API_URL} from '../store/constants';
// import store from '../store';
import io from 'socket.io-client';

let socket = null;
// const dispatch = store.dispatch;
// const getState = store.getState;

export const openConnection = () => {
	return new Promise((resolve, reject) => {
		socket = io(`${API_URL}/assignment7`);

		socket.on("connect", resolve);
	})
};

export const joinChat = (username, search, message) => {
	socket.emit("join", username, search, message);
};