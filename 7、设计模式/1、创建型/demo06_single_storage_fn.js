function StorageBase() { }

StorageBase.prototype.getItem = function (key) {
    return localStorage.getItem(key)
}


StorageBase.prototype.setItem = function (key, value) {
    localStorage.setItem(key, value)
}


const Storage = (function () {
    let instance = null
    return function(){
        if (!instance) {
            instance = new StorageBase()
        }
        return instance
    }
})()


var s1 = Storage()
var s2 = Storage()

console.log(s1 === s2); // true