var childProcess = require('child_process');
var wdio = require('webdriverio');

var wdioProcess;

module.exports = {
	start: (done) => {
		const childArgs = ['./test-acceptance/wdio.cucumber.conf.js'];
		wdioProcess = childProcess.spawn('./node_modules/.bin/wdio', childArgs, { detached:true });
		wdioProcess.unref();
		done();

	},
	stop: (done) => {
		wdioProcess.kill();
		done();
	}
};
