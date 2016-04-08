

module.exports = function (){
	this.When(/^I click "([^"]*)" button$/, (buttonText, done) => {
		const selector = `button=${buttonText}`
		this.world.driver
			//.waitForExist(selector, 500)
			.click(selector)
			.then(() => {
				done();
			})
			.catch(done);
	});
}