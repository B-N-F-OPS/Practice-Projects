require('dotenv').config();
const { add } = require('./test.js');

console.log(add(9, 4) - add(2, Number(process.env.NUM)));