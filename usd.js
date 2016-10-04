var randomNum = require('./random');

var num = function (x) {
  return x.toLocaleString('en-US', { style: 'decimal',
    maximumFractionDigits: 2, minimumFractionDigits: 2, });
};

module.exports = num;
