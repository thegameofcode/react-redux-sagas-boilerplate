
module.exports = function (){

	this.When(/^I write "([^"]*)" in the "([^"]*)" input placeholder$/, (inputValue, inputPlaceholder, done) => {
		const input = `input[placeholder="${inputPlaceholder}"]`;
		this.world.driver
			.setValue(input, inputValue)
			.then(() => {
				done();
			})
			.catch(done);
	});

}