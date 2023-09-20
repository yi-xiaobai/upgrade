


let obj = {
    value: 1314
}

function bar(name, age) {
    this.name = name
    this.age = age

    return {
        name: name,
        age: age,
        value: this.value,
    }
}


Function.prototype.apply2 = function (ctx) {
    ctx = ctx || new Object()

    ctx.fn = this

    let arr = [...arguments][1]

    var res
    if (!arr || arr.length <= 0) {

        // 执行函数
        res = ctx.fn()
    } else {
        var args = []
        for (var i = 0; i < arr.length; i++) {
            args.push('arr[' + i + ']')
        }
        res = eval('ctx.fn(' + args + ')')
    }
    console.log('==>Get res', res);

    delete ctx.fn()
    return res
}


bar.apply2(obj, ["hahah", 11])
bar.apply2(obj, [])
bar.apply2(obj, null)