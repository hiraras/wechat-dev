const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('-') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

// 没有传参返回0，1个参数认为0-x，两个参数取两者之间
const getRandom = (min, max) => {
  return Math.floor(Math.random() * (max - min) + min);
}

const shuffle = (arr) => {
  if (!Array.isArray(arr) || !arr.length) {
    return [];
  }
  let i = arr.length;
  while(i) {
    const j = Math.floor(Math.random() * i);
    i -= 1;
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

module.exports = {
  formatTime: formatTime,
  getRandom: getRandom,
  shuffle: shuffle
}
