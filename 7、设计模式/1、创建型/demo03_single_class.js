

// 单例模式 一个类只有一个实例


class Single {
    show() {
        console.log('show方法');
    }

    static getInstance() {
        // 不存在实例 创建
        if (!Single.instance) {
            Single.instance = new Single()
        }
        // 如果这个唯一的实例已经存在，则直接返回
        return Single.instance
    }
}

var s1 = Single.getInstance()
var s2 = Single.getInstance()
console.log(s1 === s2); // true
