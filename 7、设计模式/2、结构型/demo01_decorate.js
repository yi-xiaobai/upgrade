
function classDecorate(target) {
    console.log('==>Get target', target);
    target.hasDecorate = true
    return target
}



// 将装饰器放到Button类上
@classDecorate
class Button {

}


console.log('Button是否被装上了装饰器', Button.hasDecorate);