var convertToCurrency = function(x){
  return x.toLocaleString('en-US', {style: 'currency', currency: 'USD'});
}

module.exports = convertToCurrency;
