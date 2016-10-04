var randomNum = require('./random');
var usd = require('./usd');

exports.answer = function () {
  return usd(randomNum(100, 1000000));
};

exports.finalAnswer = function (a) {
  if (a == 2) {
    return 'Account balance: $';
  }  else {
    return 'Boo.';
  }
};

// module.exports = answer;
// module.exports = finalAnswer;
