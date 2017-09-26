module.exports = function check(str, bracketsConfig) {
  let arr = [];
  for (let i = 0; i < bracketsConfig.length; i++) {
    arr[i] = bracketsConfig[i].join('');
  };
  let strCheck = '';
  while (strCheck != str ) {
    for (let i = 0; i < arr.length; i++) {
      if (str.includes(arr[i])) {
        strCheck = str;
        str = str.replace(arr[i],'');
      } 
      else
        strCheck = str;
    }
  }
  return str.length === 0;
}
