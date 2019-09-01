const utils = {
  isObject: function (input) {
    return Object.prototype.toString.call(input) === '[object Object]';
  },
  isArray: function (input) {
    return input instanceof Array || Object.prototype.toString.call(input) === '[object Array]';
  },
  isDate: function (input) {
    return input instanceof Date || Object.prototype.toString.call(input) === '[object Date]';
  },
  isNumber: function (input) {
    return input instanceof Number || Object.prototype.toString.call(input) === '[object Number]';
  },
  isString: function (input) {
    return input instanceof String || Object.prototype.toString.call(input) === '[object String]';
  },
  isBoolean: function (input) {
    return typeof input === 'boolean';
  },
  isFunction: function (input) {
    return typeof input === 'function';
  },
  isNull: function (input) {
    return input === undefined || input === null;
  },
  uuid() {
    const s4 = ()=>{
      return Math.floor(( 1 + Math.random()) * 0x10000).toString(16).substring(1);
    };
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
  },
  getURLParam( name, search ) {
    return decodeURIComponent( ( new RegExp( `[?|&]${name}=` + '([^&;]+?)(&|#|;|$)' ).exec( search || location.search ) || [ true, '' ] )[ 1 ].replace( /\+/g, '%20' ) ) || null;
  },
  toArray(object, keyName, arg3) {
    let titleName = '';
    if (!this.isObject(object)) {
      return [];
    }
    if (this.isString(arg3)) {
      titleName = arg3;
    }
    let list = [];
    for (let i in object) {
      let value = object[i];
      let n = {};
      if (this.isObject(value)) {
        n = value;
      } else {
        n[titleName] = value;
      }
      if (keyName) n[keyName] = i;
      list.push(n);
    }
    return list;
  },
  copy(o) {
    if (o instanceof Array) {
      var n = [];
      for (var i = 0; i < o.length; ++i) {
          n[i] = this.copy(o[i]);
      }
      return n;
    } else if (o instanceof Object) {
        var n = {}
        for (var i in o) {
            n[i] = this.copy(o[i]);
        }
        return n;
    } else {
        return o;
    }
  },
  saveLocal(key, value) {
    if(window.localStorage && JSON && key) {
      if(typeof value == 'object') {
        value = JSON.stringify(value);
      }
      window.localStorage.setItem(key, value);
      return true;
    }
    return false;
  },
  getLocal(key, type) {
    if(window.localStorage && JSON && key) {
      let data = window.localStorage.getItem(key);
      if(type && type == 'json' && !this.isNull(data)) {
        try{
          return JSON.parse(data)
        } catch(e) {
          console.error('parse error')
        }
      } else {
        return data;
      }
    }
    
  }
}
export default utils;