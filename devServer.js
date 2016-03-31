const path = require('path');
const express = require('express');
const webpack = require('webpack');
const config = require('./webpack.config.dev');

const app = express();
const compiler = webpack(config);

const PORT = process.env.PORT || 3000;

app.use(require('webpack-dev-middleware')(compiler, {
	noInfo: true,
	publicPath: config.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler));

app.use(require('webpack-hot-middleware')(compiler));

app.use('/', express.static(__dirname + '/dist'));

app.listen(PORT, 'localhost', (err) => {
	if (err) {
		console.log(err);
		return;
	}
	console.log(`server initialized at ${PORT}`);
});
