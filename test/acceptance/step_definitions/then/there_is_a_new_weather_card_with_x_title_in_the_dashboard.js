import { expect } from 'chai'

module.exports = function () {
  this.Then(/^there is a new weather card with "([^"]*)" title in the dashboard$/, (cardTitle) => {
    const selector = `h1=${cardTitle}`
    global.browser.waitForExist(selector, 2000)
  })
}
