
module.exports = function () {
  this.When(/^I write "([^"]*)" in the "([^"]*)" input placeholder$/, (inputValue, inputPlaceholder) => {
    const input = `input[placeholder="${inputPlaceholder}"]`
    global.browser.setValue(input, inputValue)
  })
}
