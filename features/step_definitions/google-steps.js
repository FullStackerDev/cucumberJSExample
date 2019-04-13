import { By, until, Key } from 'selenium-webdriver'
import { Given, When, Then } from 'cucumber'
import chai from 'chai'

var should = require('chai').should()

Given("I navigate to the url {string}", function(url) {
  return this.driver.get(url)
})

When('I do a search for {string}', function(searchText) {
  const world = this

  return world.driver.findElement(By.xpath('//input[@title="Search"]')).then(searchInput => {
  	return world.driver.wait(until.elementIsVisible(searchInput)).then(() => {
  	  return searchInput.sendKeys(searchText).then(() => {
        return searchInput.sendKeys(Key.ENTER)
  	  })
  	})
  })
})

Then('I should see more than {int} results', async function(expectedResults) {
  const world = this

  let resultStats = await world.driver.findElement(By.id('resultStats'))
  let resultStatsText = await resultStats.getText()

  // resultStatsText should be something like the following string: About 681,000,000 results (0.76 seconds)
  // To parse the number of results out of here we do the following:
  // 1. Remove the , 
  // 2. Split on spaces and parse the second string as an int

  let resultStatsArray = resultStatsText.replace(/,/g,'').split(' ')
  let nrOfResults = parseInt(resultStatsArray[1])

  console.log(`The nr of results is ${nrOfResults}`)

  nrOfResults.should.be.at.least(expectedResults)
})

Then('I should see the text {string}', function (text) {
  const driver = this.driver
  const xpath = '//*[contains(text(),"' + text + '")]'
  return driver.wait(until.elementLocated(By.xpath(xpath))).then(el => {
    return driver.wait(until.elementIsVisible(el))
  })
})