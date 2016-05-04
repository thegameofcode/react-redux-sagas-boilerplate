

module.exports = function (){
	this.When(/^I click "([^"]*)" (button|link)$/, (buttonText, elementType, done) => {
		let selector;
		switch (elementType) {
			case 'button':
				selector = `button=${buttonText}`;
				break;
			case 'link':
				selector = `a=${buttonText}`;
				break;
		}

		this.world.driver
			//.waitForExist(selector, 500)
			.click(selector)
			.then(() => {
				done();
			})
			.catch(done);
	});
}