import * as wdio from 'webdriverio';

module.exports = function hooks() {
	this.Before((scenario, done) => {
		this.world = {};
		this.world.driver = wdio.remote( require('../../wdio.cucumber.conf') );
		this.world.driver.init().then(()=>done()).catch(done);
	});

	this.After((scenario, done) => {
		this.world.driver.endAll().then(()=>done());
	});
};
