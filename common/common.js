
const Datas = require('../constants/data.js');
const Utils = require('../utils/util.js');

function getOrdinalIndex(currentIndex, direct, range) {
  if (direct === 0 && currentIndex === 0) {
    return range - 1;
  } else if (direct === 1 && currentIndex === range - 1) {
    return 0;
  } else {
    const nextStep = direct === 0 ? -1 : 1;
    return currentIndex + nextStep;
  }
}

function getRandomIndex(currentIndex, range) {
  let num = Utils.getRandom(0, range);
  while(currentIndex === num) {
    num = Utils.getRandom(0, range);
  }
  return num;
}

function getNextWordIndex(currentIndex, playSequence, direct, length) {
  switch(playSequence) {
    case 0:
      return getOrdinalIndex(currentIndex, direct, length);
    case 1:
      return getRandomIndex(currentIndex, length);
    default:
      return 0;
  }
}

module.exports = {
  getOrdinalIndex,
  getRandomIndex,
  getNextWordIndex
}
