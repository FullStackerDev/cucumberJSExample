import { Before, After, Status } from 'cucumber' 

Before(async function ( testCase) {
  console.log(`Start test scenario with name: ${testCase.pickle.name} from feature file: ${testCase.sourceLocation.uri}`)
})

/* After every scenario output result on console. */

After(function (testCase) {
  let world = this
  this.variables = {}

  console.log(`End test scenario with name: ${testCase.pickle.name} from feature file: ${testCase.sourceLocation.uri}`)
  console.log(testCase.result)

  return this.driver.quit();
})