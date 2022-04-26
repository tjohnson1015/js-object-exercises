// each of the functions will be passed a user object like the one below.
// Read the documentation for each function to complete the exercises.

/**
 * @typedef UserData
 * @property {object} name
 * @property {string} name.first
 * @property {string} name.last
 * @property {object} security
 * @property {string} security.password
 * @property {string} security.pin
 * @property {Date} security.lastLogin
 * @property {string} username
 * @property {string} email
 */
// example user data
const user2 = {
  name: {
    first: 'John',
    last: 'Doe'
  },
  security: {
    password: '12345',
    pin: '1234',
    lastLogin: '2019-01-01'
  },
  username: 'pcakes4life',
  email: 'jdoe@hotmail.com'
}

/**
 * Working with Nested Object Properties:
 * Use the object data to return the user's password
 * @param {UserData} user 
 * @returns {string}
 */
function level2exercise1(user) {
  return(user.security.password)
}

/**
 * Combining with Nested Object Properties:
 * Use the object data to return the user's full name
 * @param {UserData} user
 * @returns {string}
 */
function level2exercise2(user) {
  return(`${user.name.first} ${user.name.last}`)
}

/**
 * Combining with Nested Object Properties (part 2):
 * Use the object data to return the user's initials
 * @param {UserData} user
 * @returns {string}
 */
function level2exercise3(user) {
  return(user.name.first[0] + user.name.last[0])
}

/**
 * Validating properties:
 * Use the object data to return true if the user has a password that is at least 8 characters long, otherwise return false
 * @param {UserData} user
 * @returns {boolean}
 */
function level2exercise4(user) {
  if (user.security.password.length < 7) {
    return(false)
  }
  else {
    return(true)
  }
}

/**
 * Validating properties (part 2):
 * Use the object data to return true if the has logged in in the last 30 days, otherwise return false
 * @param {UserData} user
 * @returns {boolean}
 */


function level2exercise5(user) {
  const oldDate = new Date(user.security.lastLogin)
  const newDate = new Date();
  if(newDate.getTime() - 2592000000 < oldDate.getTime()) {
    return(true)
  }
  else {
    return(false)
  }
}
