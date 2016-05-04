import { expect } from 'chai';

module.exports = function() {
	this.Then(/^there is a new weather card with "([^"]*)" title in the dashboard$/, (cardTitle, done) => {
		const selector = `h1=${cardTitle}`
		this.world.driver
			.waitForExist(selector, 2000)
			.then(value => {
				expect(value).to.equal(true)
				done()
			})
			.catch(done)
	});
}
