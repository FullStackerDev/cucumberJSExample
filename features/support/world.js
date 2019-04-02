require('chromedriver')

import { setWorldConstructor, setDefaultTimeout } from 'cucumber'
import * as seleniumWebdriver from 'selenium-webdriver'
import * as chrome from 'selenium-webdriver/chrome'

function CustomWorld({attach, parameters}) {
  this.attach = attach
  this.parameters = parameters
  
  var options = new chrome.Options()
  options.addArguments('window-size=1440,900')

  this.driver = new seleniumWebdriver.Builder()
    .withCapabilities(seleniumWebdriver.Capabilities.chrome())
    .setChromeOptions(options)
    .build()

  // Set default timeout to 20 seconds before a step fails.
  setDefaultTimeout(20000)
}

setWorldConstructor(CustomWorld)