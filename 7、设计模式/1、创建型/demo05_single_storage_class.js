
//* Class 写法
class Storage {
    static getInstance() {
        if (!Storage.instance) {
            Storage.instance = new Storage()
        }
        return Storage.instance
    }

    getItem(key) {
        return localStorage.getItem(key)
    }

    setItem(key, value) {
        localStorage.setItem(key, value)
    }
}

var s1 = Storage.getInstance()
var s2 = Storage.getInstance()
s1.setItem('a', "hello world")  
console.log(s2.getItem('a'));   // hello world







