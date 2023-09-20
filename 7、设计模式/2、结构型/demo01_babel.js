'use strict';

var _class;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function classDecorate(target) {
    console.log('==>Get target', target);
    target.hasDecorate = true;
    return target;
}

// 将装饰器放到Button类上

var Button = classDecorate(_class = function Button() {
    _classCallCheck(this, Button);
}) || _class;

console.log('Button是否被装上了装饰器', Button.hasDecorate);
