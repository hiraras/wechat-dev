
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

function getNextWordIndex(currentIndex, playSequence, direct, list) {
  switch(playSequence) {
    case 0:
      return getOrdinalIndex(currentIndex, direct, list.length);
    case 1:
      return getRandomIndex(currentIndex, list.length);
    default:
      return 0;
  }
}

function getRandomColumnsList(arr) {
  let result = [];
  Datas.columnLengthArr.reduce(function(total, num) {
    result = [...result, ...Utils.shuffle(arr.slice(total, total + num))];
    return total + num;
  }, 0);
  return result;
}

function getWordSequenceList(playSequence, len) {
  const newList = [...new Array(len)].map((_, index) => index);
  switch(playSequence) {
    case 0:
      return newList;
    case 1:
      return Utils.shuffle(newList);
    case 2:
      return getRandomColumnsList(newList);
    default:
      return newList;
  }
}

module.exports = {
  getOrdinalIndex,
  getRandomIndex,
  getNextWordIndex,
  getWordSequenceList
}
