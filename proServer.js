const path = require('path');
const express = require('express');

const app = express();

const PORT = process.env.PORT || 3000;

app.use('/', express.static(__dirname + '/dist'));

app.listen(PORT, 'localhost', (err) => {
	if (err) {
		console.error(err);
		return;
	}
	console.log(`server initialized at ${PORT}`);
});
