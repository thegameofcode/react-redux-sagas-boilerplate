
module.exports = function () {
  this.When(/^I click "([^"]*)" (button|link)$/, (buttonText, elementType) => {
    let selector
    switch (elementType) {
      case 'button':
        selector = `button=${buttonText}`
        break
      case 'link':
        selector = `a=${buttonText}`
        break
    }

    global.browser.waitForExist(selector, 500)
    global.browser.click(selector)
  })
}
