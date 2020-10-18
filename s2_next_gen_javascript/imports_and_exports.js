// Modular code handled by exports and import statements.


// person.js
const person = {
    name:'Josh'
}
// default keyword
export default person

// utility.js
export const clean = () => {}
export const baseData = 10;

// app.js
// default imports this always refers to `person` from person.js, as it was declared as default
import person from '/.person.js'
import prs from '/.person.js'

// named imports
import { baseData } from './utility.js'
import { clean } from './utility.js'
// also allowed is:
import { baseData, clean } from './utility.js'

