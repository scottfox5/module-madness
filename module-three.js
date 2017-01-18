var modOne = require('./module-one');
var modTwo = require('./module-two');

exports.introString = function(){
  return 'Account balance: \n';
};

exports.finalNumber = function(){
  return modTwo(modOne(100, 1000000));
};


// first solution, then simplified above
// var result = {
//   message: function(){
//     return 'Account balance: \n';
//   },
//   finalNumber: function(){
//
//   },
// };
//
// module.exports = result;
