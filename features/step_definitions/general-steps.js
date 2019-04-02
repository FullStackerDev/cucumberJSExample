import { By, until } from 'selenium-webdriver'
import { Given, When, Then } from 'cucumber'
import assert from 'assert'

Given("I navigate to the url {string}", function(url) {
  this.driver.get(url)
})

Then('I should see the google search engine', function() {
  // To determine whether Google has loaded we are going to make sure a button has shown up with label "Google Search".


  //Google Search
})