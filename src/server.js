const express = require('express');
const app = express();
const http = require("http").Server(app);
const cors = require("cors");
const io = require("socket.io")(http);

const port = process.env.PORT || 3001;
const assignment7 = io.of("/assignment7");

app.use(cors());

app.get("/", (req, res) => {
	res.send("OK");
});

assignment7.on('connection', socket => {
	console.log('user connected');

	socket.on("join", (username, search, message) => {
		console.log('user joined', username, search, message);
	})

	socket.on("disconnect", () => {
		console.log('user disconnected');
	});
});

http.listen(port, () => {
	console.log(`listening on http://localhost:${port}`);
});