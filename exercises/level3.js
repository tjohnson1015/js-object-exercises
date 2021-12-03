// each of the functions will be passed a user object like the one below.
// Read the documentation for each function to complete the exercises.

/**
 * @typedef Product
 * @property {string} name
 * @property {number} price
 * @property {string} color
 * @property {number} stock
 */
/**
 * @type {Product[]}
 */
const exampleProductArray = [
  {
    name: 'iPhone',
    price: 699,
    color: 'black',
    stock: 10
  },
  {
    name: 'Samsung Galaxy S10',
    price: 799,
    color: 'black',
    stock: 5
  },
  {
    name: 'Google Pixel 3',
    price: 599,
    color: 'black',
    stock: 0
  },
]

/**
 * Looping through an array of objects
 * Use the products array to loop through the array and return the sum of all prices
 * @param {Product[]} products 
 * @returns {number}
 */
function level3exercise1(products) {
  let sum = 0;
  for (let i = 0; i < products.length; i++) {
    sum += products[i].price;
  }
  return sum;
}

/**
 * Highest priced product
 * Use the products array to loop through the array and return the name of the product with the highest price
 * @param {Product[]} products
 * @returns {string}
 */
function level3exercise2(products) {
  let currentProduct = products[0];
  for (let i = 0; i < products.length; i++) {
    if (products[i].price > currentProduct.price) {
      currentProduct = products[i];
    }
  }
  return currentProduct.name;
}

/**
 * Lowest priced product
 * Use the products array to loop through the array and return the name of the product with the lowest price
 * @param {Product[]} products
 * @returns {Product}
 */
function level3exercise3(products) {
  let currentProduct = products[0];
  for (let i = 0; i < products.length; i++) {
    if (products[i].price < currentProduct.price) {
      currentProduct = products[i];
    }
  }
  return currentProduct.name;
}

/**
 * Average price
 * Use the products array to loop through the array and return the average price of all products
 * @param {Product[]} products
 * @returns {number}
 */
function level3exercise4(products) {
  let sum = 0;
  for (let i = 0; i < products.length; i++) {
    sum += products[i].price;
  }
  return sum / products.length;
}

/**
 * Format price and name
 * Use the products array to loop through the array and return the name and price of the product with the lowest price
 * e.g. iPhone: $499
 * @param {Product[]} products
 * @returns {string}
 */
function level3exercise5(products) {
  let currentProduct = products[0];
  for (let i = 0; i < products.length; i++) {
    if (products[i].price < currentProduct.price) {
      currentProduct = products[i];
    }
  }
  return `${currentProduct.name}: $${currentProduct.price}`;
}

/**
 * Filter by stock
 * Use the products array to loop through the array and return an array of products that are in stock
 * @param {Product[]} products
 * @returns {Product[]}
 */
function level3exercise6(products) {
  let inStock = [];
  for (let i = 0; i < products.length; i++) {
    if (products[i].stock > 0) {
      inStock.push(products[i]);
    }
  }
  return inStock;
}

/**
 * Filter by color
 * Use the products array to loop through the array and return an array of products that match the color parameter
 * @param {Product[]} products
 * @param {string} color
 * @returns {Product[]}
 */
function level3exercise7(products, color) {
  let matchingProducts = [];
  for (let i = 0; i < products.length; i++) {
    if (products[i].color === color) {
      matchingProducts.push(products[i]);
    }
  }
  return matchingProducts;
}

/**
 * Format prices and names
 * Use the products array to loop through the array and return an array of strings with the name and price of each product
 * e.g. iPhone: $499
 * @param {Product[]} products
 * @returns {string}
 */
function level3exercise8(products) {
  let formattedProducts = [];
  for (let i = 0; i < products.length; i++) {
    formattedProducts.push(`${products[i].name}: $${products[i].price}`);
  }
  return formattedProducts;
}
