const express = require('express');
const axios = require('axios');
const app = express();
const http = require("http").Server(app);
const cors = require("cors");
const io = require("socket.io")(http);

const port = process.env.PORT || 3001;
const assignment7 = io.of("/assignment7");

const {PIXABAY_API_BASE_URL} = require('./store/constants');

app.use(cors());

app.get("/", (req, res) => {
	res.send("OK");
});

assignment7.on('connection', socket => {
	console.log('user connected');

	socket.on("join", async (username, search, message) => {
		console.log('user joined', username, search, message);

		// WORKS:
		// const response = await axios.get(`${PIXABAY_API_BASE_URL}&q=${encodeURIComponent(search)}`);
		// const searchResults = response.data;
		// console.log(searchResults);
	});

	socket.on("disconnect", () => {
		console.log('user disconnected');
	});
});

http.listen(port, () => {
	console.log(`listening on http://localhost:${port}`);
});