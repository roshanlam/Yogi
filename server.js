const express = require('express');
const HOST = process.env.HOST;
const PORT = process.env.PORT || 8080;
const app = express();
app.use(express.static("build"));

app.get("/hello", (req, res) => {
	res.json({message: "Hello, world!"});
});

function run_server() {
	app.listen(PORT, HOST, err => {
		if (err) return console.error(err);
		console.log(`Listening on port ${PORT}`);
	});
}

if (require.main === module) run_server();
