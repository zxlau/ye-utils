const utils = {
  isObject: function (input) {
    return Object.prototype.toString.call(input) === '[object Object]';
  },
  isArray: function (input) {
    return input instanceof Array || Object.prototype.toString.call(input) === '[object Array]';
  }
}
export default utils;