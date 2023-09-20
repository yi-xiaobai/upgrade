
/**
 ** 抽象工厂多个工厂之间
 ** 共性抽离成一个类 安卓和苹果都有操作系统 都有控制手机硬件系统这一说  就可以用一个抽象类来说明这个共性
 ** 
 */


class PhoneFactory {
    createOs() {
        throw new Error("规范创建操作系统")
    }

    createHardWare() {
        throw new Error("规范创建硬件")
    }
}



//* 抽象操作系统工厂  将操作系统的共性抽离  都有什么
class OS {
    controlHardWare() {
        throw new Error("规范操作硬件")
    }
}


//* 安卓操作系统
class AndroidOs extends OS {
    controlHardWare() {
        console.log('安卓方式控制硬件');
    }
}

//* ios操作系统
class AppleOs extends OS {
    controlHardWare() {
        console.log('🍎方式控制硬件');
    }
}

//* 华为和高通都有芯片  共性抽离出来 下一个什么小米、oppo等直接继承类就行 不需要修改
class HardWare {
    operateByOrder() {
        throw new Error("抽象产品方法不允许直接调用，你需要将我重写！")
    }
}


class GaoTongHardWare extends HardWare {
    operateByOrder() {
        console.log('以高通方式运行芯片');
    }
}


class HuaWeiHardWare extends HardWare {
    operateByOrder() {
        console.log('华为方式运行芯片');
    }
}


//* 生产一个安卓 操作系统 + 高通芯片的手机
class FakerFactory extends PhoneFactory {
    constructor() {
        super()
    }

    createOs() {
        return new AndroidOs()
    }

    createHardWare() {
        return new GaoTongHardWare()
    }
}

const f = new FakerFactory()
// 创建操作系统
const myOs = f.createOs()
// 控制硬件
myOs.controlHardWare()  //* 安卓方式控制硬件

// 创建芯片
const myH = f.createHardWare()
// 以什么方式运行芯片
myH.operateByOrder()    //* 以高通方式运行芯片



console.log('===============================');
/**
 ** 再来一个工厂 生产苹果操作系统和华为芯片的手机
 */


class newStarFactory extends PhoneFactory {
    createOs() {
        return new AppleOs()
    }

    createHardWare() {
        return new HuaWeiHardWare()
    }
}

const newstar = new newStarFactory()
//* 创建苹果操作系统
const apple = newstar.createOs()
//* 创建华为芯片
const huawei = newstar.createHardWare()

apple.controlHardWare() //* 🍎方式控制硬件
huawei.operateByOrder() //* 华为方式运行芯片





