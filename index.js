const sum = require('./sum.js')
const sub = require('./sub,js')
const div = require('./div');
/* 
  myMathModule

  This is a collaboratively made Math module with support for basic math operations.
  Feel free to use it for you basic math needs.
*/

const Math = {
    PI: 3.141592653589793, // Mathematical constant defined as the ratio of a circle's circumference to its diameter.
    sum: sum,
    sub: sub,
    div: div
  }
  
module.exports = Math
