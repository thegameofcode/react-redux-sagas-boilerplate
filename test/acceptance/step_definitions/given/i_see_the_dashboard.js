
module.exports = function (){
	this.Given(/^I see the dashboard$/, (done) => {
		this.world.driver
			.url('http://localhost:3000')
			.waitForText('div=Home React Redux Saga Boilerplate', 1000)
			.then(()=>done())
			.catch(done);
	});
}
