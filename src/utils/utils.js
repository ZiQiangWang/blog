/**
 * utils.js
 * @authors ZiQiangWang
 * @email   814120507@qq.com
 * @date    2017-07-07 14:20:30
 */

export const byteWidth = (word)=> {
    let totalLength = 0;     
    let charCode;  
    for (let i = 0; i < word.length; i++) {  
        charCode = word.codePointAt(i);
        if (charCode < 0x007f)  {     
            totalLength++;     
        } else if ((0x0080 <= charCode) && (charCode <= 0x07ff))  {     
            totalLength += 2;     
        } else if ((0x0800 <= charCode) && (charCode <= 0xffff))  {     
            totalLength += 3;   
        } else{  
            totalLength += 4;   
        }          
    }
    return totalLength;  
}

export const objFilter = (obj, func) => {
  if (typeof func !== 'function') {
    throw new Error('Second argument expected a function');
  }
  let ret = {};
  for(let key in obj) {
    if(obj.hasOwnProperty(key) && func(obj[key], key)) {
      ret[key] = obj[key];
    }
  }
  return ret;
}
