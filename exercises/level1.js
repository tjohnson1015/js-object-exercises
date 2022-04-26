// each of the functions will be passed a user object like the one below.
// Read the documentation for each function to complete the exercises.

/**
 * @typedef User
 * @property {string} first
 * @property {string} last
 * @property {string} password
 * @property {number} birthYear
 */
// example user data
const user = {
  first: 'John',
  last: 'Doe',
  password: '12345',
  birthYear: 1990
};

/**
 * Accessing Properties:
 * use the object data to return the password for the user
 * @param {User} user 
 * @returns {string}
 */
function level1exercise1(user) {
  return(user.password)
}

/**
 * Combining Properties:
 * use the object data below to return the full name of the user
 * @param {User} user
 * @returns {string}
 */
function level1exercise2(user) {
  return(`${user.first} ${user.last}`)
}

/**
 * Combining Properties with more data:
 * use the object data to return a string "Hello, FirstName LastName!"
 * @param {User} user
 * @returns {string}
 */
function level1exercise3(user) {
  return(`Hello, ${user.first} ${user.last}!`)
}

/**
 * Calculating data from properties:
 * use the object data to calculate the user's age and return it
 * @param {User} user
 * @returns {number}
 */
function level1exercise4(user) {
  return(2022 - Number(user.birthYear))
}

/**
 * Combining and modifying properties (part 1):
 * use the object data to return the user's full name in all uppercase letters
 * @param {User} user
 * @returns {string}
 */
function level1exercise5(user) {
  return((`${user.first} ${user.last}`).toUpperCase())
}

/**
 * Combining and modifying properties (part 2):
 * use the object data to return the user's initials (i.e. AL from Ada Lovelace)
 * @param {User} user
 * @returns {string}
 */
function level1exercise6(user) {
  // return(`${user.first[0]} ${user.last[0]}`)
  return(user.first[0] + user.last[0])
}