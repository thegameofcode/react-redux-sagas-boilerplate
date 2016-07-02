module.exports = function () {
  this.Given(/^I see the home page/, () => {
    global.browser.url('http://localhost:3000')
    global.browser.waitForText('div=Home', 2000)
  })
}
