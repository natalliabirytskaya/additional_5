module.exports = function check(str, bracketsConfig) {
  let arr = [];
  for (let i = 0; i < bracketsConfig.length; i++) {
    arr[i] = bracketsConfig[i].join('');
  };
  let j = 0;
  while (j < arr.length) {
      if (str.includes(arr[j])) {       
        str = str.replace(arr[j],'');j=0;}
      else ++j;
  }
  return str.length === 0;
};

