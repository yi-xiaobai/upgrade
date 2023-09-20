
//* 变和不变
//* 不变的部分稳定 变的部分灵活



//* 工厂模式将创建对象的过程单独封装

/**
 ** 每个实例都会有这些属性 只是值不相同
 ** 将变的提取出来  不变的也提取出来
 * @param {*} name 
 * @param {*} age 
 * @param {*} career 
 * @param {*} work 
 */
function User(name, age, career, work) {
    this.name = name
    this.age = age
    this.career = career
    this.work = work
}


function Factory(name, age, career) {
    var work
    switch (career) {
        case 'colder':
            work = ['打游戏', '编程', '系分']
            break;
        case 'product manager':
            work = ['会议室', 'prd', '评审会']
            break;
        case 'boss':
            work = ['看报纸', '摸鱼', '帅锅']
            break;
    }
    return new User(name, age, career, work)
}



/**
 ** 构造器解决的是多个对象实例之间的问题
 ** 简单工厂解决了多个类之间的关系的问题  Factory函数就是
 */