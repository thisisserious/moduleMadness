function randomNum(min, max) {
  return Math.floor(Math.random() * (1 + max - min) + min);
}

// randomNum(100, 1000000);

module.exports = randomNum;
