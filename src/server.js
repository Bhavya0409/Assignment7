const express = require('express');
const axios = require('axios');
const app = express();
const http = require("http").Server(app);
const cors = require("cors");
const io = require("socket.io")(http);

const port = process.env.PORT || 3001;
const assignment7 = io.of("/assignment7");

const {PIXABAY_API_BASE_URL} = require('./store/constants');

const users = {};

app.use(cors());

app.get("/", (req, res) => {
	res.send("OK");
});

assignment7.on('connection', socket => {
	console.log('user connected');

	socket.on("join", async (id, username, search, message) => {
		console.log('user joined', id, username, search, message);

		// WORKS:
		// const response = await axios.get(`${PIXABAY_API_BASE_URL}&q=${encodeURIComponent(search)}`);
		// const searchResults = response.data;
		// const {total, hits} = searchResults;
		// console.log(searchResults);
		//
		// users[id] = {
		// 	id,
		// 	username,
		// 	total,
		// 	img: hits[0].webformatURL
		// };

		users[id] = {
			id,
			username,
			total: 12456,
			search,
			img: 'https://pixabay.com/get/ea32b90b28f6033ecd0b4405e0444094e572ffd41cb5124197f1c571a3_640.jpg',
			message
		};

		assignment7.emit("user-joined", users);
	});

	socket.on("disconnect", () => {
		console.log('user disconnected');
	});
});

http.listen(port, () => {
	console.log(`listening on http://localhost:${port}`);
});