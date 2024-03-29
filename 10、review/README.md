

## 栈、队列、链表
---

### 栈（Stack）---用pop和push完成增删的“数组”
**后进先出**---盒子

### 队列（Queue）--- 用push和shift完成增删的“数组”
**先进先出**---排队

两个特征：
    1、只允许从尾部添加数据
    2、只允许从头部删除数据


### 链表

特征：有且只有一个==**前驱**==节点，只有一个**后继**节点

### 小结

链表的**插入/删除**效率高，**访问**效率低。数组的**访问**效率高，**插入/删除**效率低

原因：
    1、在计算机中，数组都对应着一段连续的内存，如果想在任意位置删除元素，那么所有该元素的后面都需要往前挪动，插入也是类似
    如果数组长度为**n**，随着数组长度n的增大而增大，插入/删除的时间复杂度就是**O(n)**。查找是很快的，常数复杂度**O(1)**
    2、对于链表而言，插入/删除只需要移动前驱节点/后继节点即可。就是常数级别的复杂度**O(1)**
    访问而言，由于需要从第一个节点开始访问，随着链表长度增加而增加，顾时间复杂度也是**O(n)**


## 二叉树
---

定义：
    1、可以是一颗空树
    2、如果不是空树，则**必须由根节点、左子树、右子树构成且左右子树都是二叉树**

前序遍历：根-->左-->右
中序遍历：左-->根-->右
后序遍历：左-->右-->根


## 时间复杂度




