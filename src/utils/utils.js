/**
 * utils.js
 * @authors ZiQiangWang
 * @email   814120507@qq.com
 * @date    2017-07-07 14:20:30
 */

export const objFilter = (obj, func) => {
  if (typeof func !== 'function') {
    throw new Error('Second argument expected a function');
  }
  const ret = {};
  Object.keys(obj).forEach((key) => {
    if (func(obj[key], key)) {
      ret[key] = obj[key];
    }
  });
  return ret;
};

export const objSelect = (obj, { include = [], exclude = [] }) => {
  if (!Array.isArray(include)) {
    throw new Error('Include expected to be an array');
  }

  if (!Array.isArray(exclude)) {
    throw new Error('Exclude expected to be an array');
  }

  const keys = Object.keys(obj);
  let realInclude;
  if (include.length === 0) {
    realInclude = [...keys];
  } else {
    realInclude = include;
  }

  const ret = {};

  keys.forEach((key) => {
    if (realInclude.includes(key) && !exclude.includes(key)) {
      ret[key] = obj[key];
    }
  });

  return ret;
};
