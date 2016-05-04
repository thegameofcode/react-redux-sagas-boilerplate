
module.exports = function (){
	this.Given(/^I see the home page/, (done) => {
		this.world.driver
			.url('http://localhost:3000')
			.waitForText('div=Home', 2000)
			.then(()=>done())
			.catch(done);
	});
}
