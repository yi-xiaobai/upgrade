


/**
 * Js可执行代码有三种
 *? 全局代码、函数代码、eval代码
 ** 当执行到一个函数 会进行准备工作 也就是创建函数的"执行上下文"
 *! JS通过执行上下文栈来管理执行上下文 
 * 
 * 每个执行上下文 有三部分组成
 *? 变量对象(Variable object Vo)
 *? 作用域链(Scope chain)
 *? this
 */

 function fun3(){
    console.log('==>Get fun3');
 }

 function fun2(){
    fun3()
 }

 function fun1(){
    fun2()
 }

 fun1()


 /**
  * 上面执行过程依次是
  * ECStack = [globalContext];
  * 
  *? fun1函数
  * ECStack.push(<fun1> function)
  * 
  *? fun1中调用了fun2  加入fun2的执行上下文
  * ECStack.push(<fun2> function)
  * 
  *? 同理 加入fun3的执行上下文 
  * ECStack.push(<fun3> function)
  *
  ** fun3 执行完毕  
  * ECStack.pop()
  * 
  ** fun2 执行完毕 
  * ECStack.pop()
  *   
  ** fun1 执行完毕 
  * ECStack.pop() 
  */