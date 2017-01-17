var modOne = require('./module-one');
var modTwo = require('./module-two');


var result = {
  message: function(){
    return 'Account balance: \n';
  },
  finalNumber: function(){
    return modTwo(modOne(100, 1000000));
  },
};

module.exports = result;
