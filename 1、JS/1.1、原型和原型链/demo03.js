
function Student() {

}
console.log('==>Get Student 原型对象', Student.prototype);  //* {}
console.log('==>Get constructor', Student.prototype.constructor);   //* [Function: Student]
console.log('==>Get 相等', Student.prototype.constructor === Student);  //* true