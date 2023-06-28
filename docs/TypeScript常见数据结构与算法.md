# 思维导图
学习路线
![](https://cdn.nlark.com/yuque/0/2023/jpeg/35159616/1683209544355-94570b6c-9427-4e42-b470-463a43e5c3eb.jpeg)

# 算法的复杂度分析
## 什么是算法复杂度？
不同的算法，其实效率是不一样的
让我举一个案例来比较两种不同的算法在查找数组中给定元素的时间复杂度
`[1,2,3,4,5,6,7,...9999,n]`
#### 顺序查找
这种方法从头到尾遍历整个数组，依次比较每个元素和给定元素的值。
如果找到想等元素，则返回下标，如果遍历整个数组都找不到就返回-1。
```typescript
function sequenSearch(array:number[],target:number) {
  let result = -1
  for (let i = 0;i<array.length;i++) {
    array[i] === target ? result = i : undefined
  }
  return result
}
```

最长时间复杂度：n
平均的时间复杂度: n / 2
![image.png](https://cdn.nlark.com/yuque/0/2023/png/35159616/1687609588575-a782273c-c17b-4d28-8fed-6e2289663e23.png#averageHue=%2335312c&clientId=u81b2af16-6636-4&from=paste&height=48&id=pZxfq&originHeight=48&originWidth=546&originalType=binary&ratio=1&rotation=0&showTitle=false&size=6704&status=done&style=none&taskId=u930c7536-6d8c-4cbe-898e-64f1589bc7b&title=&width=546)
该算法时间复杂度是O(n)
#### 二分查找
这种算法假设数组是有序的，每次选择数组中间的元素与给定元素进行比较。
如果找到想等元素，则返回下，如果给定的元素比中间元素小，则在数组左半部分继续查找；如果给定的元素比中间元素大，则在数组右半部分继续查找。
这样每次查找都会将查找的范围减半，知道找到想等的元素或者查找范围为空。
```typescript
function binarySearch(array: number[], target: number) {
  let left = 0;
  let right = array.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    const midTarget = array[mid];
    if (midTarget === target) {
      return mid;
    } else if (midTarget < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return -1;
}
```

最长时间复杂度：log(n,2)
平均的时间复杂度: log(n,2) / 2
![image.png](https://cdn.nlark.com/yuque/0/2023/png/35159616/1687609578504-0f56dc3b-1c9d-430c-a54c-9aa0658711dc.png#averageHue=%2335312c&clientId=u81b2af16-6636-4&from=paste&height=48&id=c8cgo&originHeight=48&originWidth=546&originalType=binary&ratio=1&rotation=0&showTitle=false&size=6704&status=done&style=none&taskId=ud2a7f71a-5667-4a1a-afc5-c4d45016fcc&title=&width=546)
该算法时间复杂度是O(log n)
## 大O表示法（Big O notation）
**大O表示法(Big O notation)英文翻译为大O符号（维基百科翻译)，中文通常翻译为大O表示法（标记法)。**
 - 这个记号则是在德国数论学家爱德蒙·兰道的著作中才推广的，因此它有时又称为兰道符号(Landau symbols)。
 - 代表“order of ..”.……阶)的大O，最初是一个大写希腊字母“O”(omicron)，现今用的是大写拉丁字母“O”。

## 时间复杂度

### 分析算法时间效率举例
 - 举个例子，解决一个规模为n的问题所花费的时间（或者所需步骤的数目)可以表示为: `T(n)=4n2-2n＋2`
 - 当`n`增大时，`n2`项开始占据主导地位，其他各项可以被忽略;

- 举例说明:当`n=500`

 - `4n2`项是`2n`项的`1000`倍大，因此在大多数场合下，省略后者对表达式的值的影响将是可以忽略不计的。
进一步看，如果我们与任一其他级的表达式比较， n2的系数也是无关紧要的。
这样，针对第一个例子`T(n) = 4n2- 2n＋2`，大O符号就记下剩余的部分，写作:
`T(n) ∈ o(n2)`
或
`T(n)= o(n2)`
**我们就说该例子算法具有**`**n2**`**阶（平方阶）的时间复杂度，表示为**`**O(n2)**`
### 常用函数阶
#### 介绍
![image.png](https://cdn.nlark.com/yuque/0/2023/png/35159616/1687702310774-91546bba-ce89-4ed3-8b50-9159717acf7e.png#averageHue=%23e0e3e2&clientId=u5cd31702-7f6b-4&from=paste&height=274&id=mocNF&originHeight=274&originWidth=453&originalType=binary&ratio=1&rotation=0&showTitle=false&size=70402&status=done&style=none&taskId=ufe7e0362-7a26-47a5-b6c7-a40415e0360&title=&width=453)
#### 案例
![image.png](https://cdn.nlark.com/yuque/0/2023/png/35159616/1687702391634-fdc2b87c-7341-485a-a165-47355210845c.png#averageHue=%23e37719&clientId=u5cd31702-7f6b-4&from=paste&height=260&id=ZyJHQ&originHeight=260&originWidth=356&originalType=binary&ratio=1&rotation=0&showTitle=false&size=76092&status=done&style=none&taskId=ud3fed52e-cd74-41ab-b62a-58cd69cb63b&title=&width=356)

#### 图表
![image.png](https://cdn.nlark.com/yuque/0/2023/png/35159616/1687702401628-dae5a2ae-aa0b-4755-a05f-fa5db260ea8b.png#averageHue=%23ebb986&clientId=u5cd31702-7f6b-4&from=paste&height=467&id=tbMEw&originHeight=467&originWidth=680&originalType=binary&ratio=1&rotation=0&showTitle=false&size=141033&status=done&style=none&taskId=ua295b68a-9d9f-4489-ac39-93c32600df4&title=&width=680)

## 空间复杂度
**空间复杂度指的是程序运行过程中所需要的额外存储空间。**

空间复杂度也可以用大O表示法来表示;
空间复杂度的计算方法与时间复杂度类似，通常需要分析程序中需要额外分配的内存空间，如数组、变量、对象、递归调用等。

### 分析算法空间效率举例
举个栗子:
对于一个简单的递归算法来说，每次调用都会在内存中分配新的栈帧，这些栈帧占用了额外的空间。
- 因此，该算法的空间复杂度是o(n)，其中n是递归深度。
而对于迭代算法来说，在每次迭代中不需要分配额外的空间，因此其空间复杂度为o(1)。
**当空间复杂度很大时，可能会导致内存不足，程序崩溃。**
**在平时进行算法优化时，我们通常会进行如下的考虑:**

- 使用尽量少的空间(优化空间复杂度);
- 使用尽量少的时间（优化时间复杂度);
- 特定情况下:使用空间换时间或使用时间换空间;


# 数据结构
## 线性结构

- **线性结构（Linear List）是由n（n>=0）个数据元素（结点）a[0]，a[1]，a[2]...，a[n-1]组成的有序序列。**
- **其中：**

数据元素的个数n定义为表的长度  = list.length() 
> list.length=0 表示没有一个元素时称为空表

将非空的线性表（a>=1）记作：（a[0]，a[1]，a[2]...，a[n-1]）
数据元素a[i] (0<= i <= n-1)只是个抽象符号，其具体含义在不同情况下可以不同

![image.png](https://cdn.nlark.com/yuque/0/2023/png/35159616/1683210272281-d4f08fb1-7ebb-46d0-9a05-178d576bce74.png#averageHue=%23c7cbce&clientId=uc5c9ecb2-3046-4&from=paste&height=143&id=u92ef2daf&originHeight=143&originWidth=783&originalType=binary&ratio=1&rotation=0&showTitle=false&size=44368&status=done&style=none&taskId=ue75723aa-ce52-4dd8-aa8c-985f73e8c3d&title=&width=783)

### 数组(Array)结构
**数组(Array)结构是一种重要的数据结构：**

- 几乎每种编程语言都会提供一种`原生数据结构`（自带的）；
- 并且我们`可以借住数据结构来实现其他的数据结构`，比如栈（Stack）、队列（Queue）、堆（Heap）；

**通常数组的内存是连续的，所以数组在知道下标值的情况下，访问小绿是非常高的**
![image.png](https://cdn.nlark.com/yuque/0/2023/png/35159616/1683210540074-08f7d491-ab20-4015-ba1e-7795c2a7c593.png#averageHue=%23e4dbd1&clientId=uc5c9ecb2-3046-4&from=paste&height=254&id=ue693f993&originHeight=254&originWidth=671&originalType=binary&ratio=1&rotation=0&showTitle=false&size=55340&status=done&style=none&taskId=u374e6bb3-488d-4c6a-8135-092315ca9ef&title=&width=671)
### 栈结构（Stack）
#### 认识栈结构和特性
数组是一种线性结构，并且可以在数组的任意位置插入和删除数据。
但是有时候我们为了实现某些功能，必须对这种任意性加以限制。
而栈和队列就是比较常见的受限的线性结构。
#### 栈结构示意图
![image.png](https://cdn.nlark.com/yuque/0/2023/png/35159616/1683210911412-be31d890-9ed3-446c-b90b-70012d2428c3.png#averageHue=%23e7e3d9&clientId=uc5c9ecb2-3046-4&from=paste&height=290&id=u822b2fc5&originHeight=290&originWidth=742&originalType=binary&ratio=1&rotation=0&showTitle=false&size=59328&status=done&style=none&taskId=uea75ab66-726d-486b-b56a-c0fbfd8d836&title=&width=742)

栈它是一种受限的线性结构，先进后出（LIFO）

- 其限制是仅允许在表的一端进行插入和删除运算。这一端被称为栈顶，相对的，把另一端称为栈底。
- LIFO（last in first out）表示就是后进入的元素，第一个弹出栈空间。
- 像一个栈插入新元素又称为进栈、入栈或压栈。它是把新的元素放到栈顶元素的上门，使之成为新的栈顶元素。
- 从一个栈删除元素又称作出栈或者退栈，它是把栈顶元素删除，使其相邻的元素成为新的栈顶元素。
#### 面试题目
![image.png](https://cdn.nlark.com/yuque/0/2023/png/35159616/1683211390186-0466fe3a-3bfb-4854-ba50-2b0a40b35fd6.png#averageHue=%23e7e6e6&clientId=uc5c9ecb2-3046-4&from=paste&height=91&id=u7e6a883a&originHeight=91&originWidth=437&originalType=binary&ratio=1&rotation=0&showTitle=false&size=28121&status=done&style=none&taskId=u52bbb934-f84f-45ae-97d3-005bef5725a&title=&width=437)
![image.png](https://cdn.nlark.com/yuque/0/2023/png/35159616/1683211398067-f6a4a7d1-c433-4e3d-9fd5-8e0b61dbea92.png#averageHue=%23dfdfdf&clientId=uc5c9ecb2-3046-4&from=paste&height=142&id=u381d3c66&originHeight=142&originWidth=666&originalType=binary&ratio=1&rotation=0&showTitle=false&size=60356&status=done&style=none&taskId=uc3bcb036-fe8b-4b58-93ea-e745fec94aa&title=&width=666)
#### 栈结构实现
**实现栈结构：**

- 基于数组实现
- 基于链表实现
#### 创建栈结构的类
**创建一个栈的类**
```typescript
// 封装Stack
class ArrayStack {
  // 定义一个数组，用于存储元素
  private data:any[] = []

  // 实现栈操作方法
  push() {

  }
}
```
**代码解析:**

- 我们创建了一个Stack，用户创建栈的类，可以定义一个泛型类。
- 在构造函数中，定义了一个变量，这个变量可以用于保存当前栈对象中所有的元素。
- 这个变量是一个数组类型。
- 我们之后无论是压栈操作还是出栈操作，都是从数组中添加和删除元素。
- 栈有一些相关的操作方法，通常无论是什么语言，操作都是比较类似的。

**栈常见有哪些操作呢?**

- push(element):添加一个新元素到栈顶位置。
- pop()∶移除栈顶的元素，同时返回被移除的元素。
- peek():返回栈顶的元素，不对栈做任何修改(这个方法不会移除栈顶的元素，仅仅返回它)。
- isEmpty():如果栈里没有任何元素就返回true，否则返回false。
- size():返回栈里的元素个数。这个方法和数组的length属性很类似。

#### 源码
```typescript
import IStack from "./IStack";

// 封装Stack
class ArrayStack<T = any> implements IStack<T> {
  // 定义一个数组，用于存储元素
  private data: T[] = [];

  // 实现栈操作方法

  // 元素压入栈
  push(element: T): void {
    this.data.push(element);
  }

  // 将栈顶元素弹出栈
  pop(): T | undefined {
    return this.data.pop();
  }

  // 查看栈顶元素
  peek(): T | undefined {
    return this.data[this.data.length - 1];
  }

  // 判断栈是否为空
  isEmpty(): boolean {
    return this.data.length === 0;
  }

  // 返回栈的数据个数
  get size(): number {
    return this.data.length;
  }
}

export default ArrayStack;

```
### 队列结构（Queue)
#### 认识队列以及特性
**受限的线性结构：**

- 我们已经学习了一种受限的线性结构：栈结构
- 这种受限结构对于解决某些特定问题，有特别效果
- 我们接下来学习另一个受限结构：队列

**队列（Queue）它是一种受限的线性表，先进先出（FIFO First In First Out）**

- 在于它只允许在队列的前端（front）进行删除操作
- 而在队列的后端（rear）进行插入操作

![image.png](https://cdn.nlark.com/yuque/0/2023/png/35159616/1683798516540-8eadd862-8994-4159-8c8e-6570d4e76b55.png#averageHue=%23fefefe&clientId=ub1970247-d883-4&from=paste&height=142&id=u7db5f77c&originHeight=284&originWidth=1186&originalType=binary&ratio=2&rotation=0&showTitle=false&size=71357&status=done&style=none&taskId=uc9c381b7-ba0e-4a5a-b25e-f0b6f5cffca&title=&width=593)
**线程队列：**

- 在开发中，为了让任务可以并行处理，通常会开启多线程;
- 但是我们不能让大量的线程同时处理任务（占用资源）;
- 如果需要开启线程处理任务，我们就会使用线程队列;
- 线程队列会依照次序来启动线程，并且处理对应的任务;

**队列还有很多其他应用，后续很多算法中也会用到队列（比如二叉树的层序遍历）**
#### 实现队列结构封装
**队列的实现和栈一样，有两种方案：**

- 基于数组实现
- 基于链表实现

**创建一个类实现队列**

#### 队列结构常见方法
**常见操作：**

- enqueue(element):向尾部添加一个（或多个）新的项。
- dequeue():移除队列的第一（即排在队列最前面的）项，并返回被移除的元素。
- front/peek():返回一队列中的第一个元素----最先被添加的，也就是最先被移除的元素。队列不做任何变动（不移除元素，只返回元素信息---与Stack类的peek方法非常相似）。
- isEmpty():如果队列中不包含任何元素，返回true，否则返回false。
- size():返回队列包含的元素个数，与数组的length属性类似。

#### 源码
```typescript
import IQueue from "./IQueue";

class ArrayQueue<T> implements IQueue<T> {
  // 内部通过数组保存
  private data: T[] = [];
  enqueue(element: T): void {
    this.data.push(element);
  }
  dequeue(): T | undefined {
    return this.data.shift();
  }
  peek(): T | undefined {
    return this.data[0];
  }
  isEmpty(): boolean {
    return this.data.length === 0;
  }
  get size(): number {
    return this.data.length;
  }
}

export default ArrayQueue;

```
#### 面试题
###### 击鼓传花
使用队列可以非常方便的实现最终结果
**原游戏规则：**

- 所有人围成一个圈，从末尾同学手里开始向旁边的同学传花。
- 这个时候当鼓声停止，花落谁家，谁就中大奖。

**修改后的规则：**

- 所有人一圈开始数数，数到某个数字时自动淘汰
- 最后剩下的这个人会获取胜利，请问最后剩下的时原来在哪一个位置上的人？

**封装一个基于队列的函数：**

- 参数：所有人参与的姓名，基于数字
- 结果：最终剩下一个人的名字

###### 约瑟夫环：

- 阿桥问题（有时也称为约瑟夫斯置换)，是一个出现在计算机科学和数学中的问题。在计算机编程的算法中，类似问题又称为约瑟夫环。
- 人们站在一个等待被处决的圈子里。
- 计数从圆圈中的指定点开始，并沿指定方向围绕圆圈进行。在跳过指定数量的人之后，处刑下一个人。
- 对剩下的人重复该过程，从下一个人开始，朝同一方向跳过相同数量的人，直到只剩下一个人，并被释放。
- 在给定数量的情况下，站在第几个位置可以避免被处决?

### 链表结构（LinkedList）
#### 认识链表以及特性
##### 链表以及数组的缺点

- **链表和数组一样，可以用于存储一系列的元素，但是链表和数组的实现机制完全不同。**
- **这一章中，我们就来学习一下另外一种非常常见的用于存储数据的线性结构:链表。**
##### 数组

- 要存储多个元素，数组(或称为链表)可能是最常用的数据结构。
- 我们之前说过，几乎每一种编程语言都有默认实现数组结构。

**但是数组也有很多缺点**

- 数组的创建通常需要申请一段连续的内存空间(一整块的内存)，并且大小是固定的(大多数编程语言数组都是固定的)，所以当当前数组不能满足容量需求时，需要扩容。(一般情况下是申请一个更大的数组，比如2倍。然后将原数组中的元素复制过去
- 而且在数组开头或中间位置插入数据的成本很高，需要进行大量元素的位移。
- 尽管JavaScript的Array底层可以帮我们做这些事，但背后的原理依然是这样。
##### 链表的优势
**要存储多个元素，另外一个选择就是链表**
**但不同于数组，链表中的元素在内存中不必是连续的空间。**

- 链表的每个元素有一个存储元素本身的节点和一个指向下一个元素的引用（有些语言称为指针或者链接）组成。

**相对于数组，链表的优势：**

- 内存空间不是必须连续的。

√可以充分利用计算机的内存，实现灵活的内存动态管理。

- 链表不必再创建时就确定大小，并且大小可以无限的延伸下去。
- 链表在插入和删除数据时，时间复杂度可以达到O(1)

√相对数组效率高很多
**相对数组，链表的缺点:**

- 链表访问任何一个位置的元素时，都要从头开始访问。（无法跳过第一个元素访问任何一个元素）。
- 无法通过下标直接访问元素，需要从头一个个访问，直到找到对应元素。

##### 什么是链表?

- 其实上面我们已经简单的提过了链表的结构，我们这里更加详细的分析一下。
- 链表类似于火车:有一个火车头，火车头会连接一个节点，节点上有乘客(类似于数据)，并且这个节点会连接下一个节点，以此类推。
##### ![image.png](https://cdn.nlark.com/yuque/0/2023/png/35159616/1683994911369-70392bfe-8787-450f-84bc-d3b02569d1c9.png#averageHue=%23c4c4c3&clientId=u12622967-20b0-4&from=paste&height=379&id=u6b26c3f5&originHeight=379&originWidth=645&originalType=binary&ratio=1&rotation=0&showTitle=false&size=68437&status=done&style=none&taskId=uf9654edc-bc33-4b5b-a76c-6a7160c1c16&title=&width=645)
![image.png](https://cdn.nlark.com/yuque/0/2023/png/35159616/1686145230046-110f5bf7-e378-4f32-a274-515a7248a009.png#averageHue=%23d3ca9f&clientId=u37b2e3b2-6c56-4&from=paste&height=328&id=ua721b8f8&originHeight=328&originWidth=565&originalType=binary&ratio=1&rotation=0&showTitle=false&size=136104&status=done&style=none&taskId=u1902bff5-c4e7-4c1a-ac48-638958510c0&title=&width=565)
#### 封装链表相关方法
我们先来认识一下，链表中应该有哪些常见的操作
append(element):向链表尾部添加一个新的项
insert(position，element):向链表的特定位置插入一个新的项。
![image.png](https://cdn.nlark.com/yuque/0/2023/png/35159616/1684161255621-17b5814f-88f1-4c5e-86eb-207cc8889476.png#averageHue=%23e7e2da&clientId=u4a10ceab-54d4-4&from=paste&height=411&id=u3ed0f02b&originHeight=411&originWidth=788&originalType=binary&ratio=1&rotation=0&showTitle=false&size=109332&status=done&style=none&taskId=uc179178b-d20e-4fc6-877d-f2317f3d443&title=&width=788)
get(position):获取对应位置的元素
![image.png](https://cdn.nlark.com/yuque/0/2023/png/35159616/1686145593918-dccb256c-547c-4823-a3f8-6772bbc25222.png#averageHue=%23e3c391&clientId=u37b2e3b2-6c56-4&from=paste&height=515&id=uda3ec4de&originHeight=515&originWidth=889&originalType=binary&ratio=1&rotation=0&showTitle=false&size=141257&status=done&style=none&taskId=ue6115aaa-1314-4028-aa6e-e66a1802f1d&title=&width=889)
indexOf(element):返回元素在链表中的索引。如果链表中没有该元素则返回-1。
update(position，element):修改某个位置的元素
removeAt(position):从链表的特定位置移除一项。
![image.png](https://cdn.nlark.com/yuque/0/2023/png/35159616/1686145550944-e186fb9d-0737-4d2b-a050-308234298966.png#averageHue=%23e1dfde&clientId=u37b2e3b2-6c56-4&from=paste&height=518&id=u0f0a7501&originHeight=518&originWidth=927&originalType=binary&ratio=1&rotation=0&showTitle=false&size=234849&status=done&style=none&taskId=u179abfa8-25fe-4f73-af02-22dcdced774&title=&width=927)
remove(element):从链表中移除一项。
isEmpty():如果链表中不包含任何元素，返回true，如果链表长度大于0则返回false。
size():返回链表包含的元素个数。与数组的length属性类似。
#### 源码
```typescript
// 1.创建Node节点类
class Node<T> {
  value: T;
  next: Node<T> | null = null;
  constructor(value: T) {
    this.value = value;
  }
}

// 2.创建LinkedList的类
class LinkedList<T> {
  private head: Node<T> | null = null;
  private size: number = 0;

  get length() {
    return this.size;
  }
  // 封装私有方法
  // 根绝positon获取当前的节点（不是节点的value，而是获取节点)
  private getNode(position: number): Node<T> | null {
    let index = 0;
    let current = this.head;
    while (index++ < position && current) {
      current = current.next;
    }
    return current;
  }

  // 追加节点
  append(value: T) {
    // 1.根据value新建一个Node节点
    const newNode = new Node(value);
    // 2.
    if (!this.head) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      // current肯定指向最后一个节点
      current.next = newNode;
    }
    // 3.size++
    this.size++;
  }

  // 遍历链表的方法
  traverse() {
    const values: T[] = [];
    let current = this.head;
    while (current) {
      values.push(current.value);
      current = current.next;
    }
    console.log(values.join(" -> "));
  }

  //链表插入元素的方法
  insert(value: T, position: number): boolean {
    // 1.越界判断
    if (position < 0 || position > this.size) return false;
    // 2.根据value创建新的节点
    const newNode = new Node(value);
    /* 3.判断
     * 是否插入头部
     * 否则就找到需要插入的位置，然后记录前一个节点和当前节点，在前一个节点的next等于newNode，newNode的next等于后一个节点
     */
    if (position === 0) {
      newNode.next = this.head;
      this.head = newNode;
    } else {
      const previous = this.getNode(position - 1);

      newNode.next = previous!.next;
      previous!.next = newNode;
    }
    this.size++;

    return true;
  }

  //链表插入元素的方法
  removeAt(position: number): T | null {
    // 1.越界判断
    if (position < 0 || position >= this.size) return null;

    let current = this.head;
    if (position === 0) {
      this.head = current?.next ?? null;
    } else {
      const previous = this.getNode(position - 1);
      previous!.next = previous?.next?.next ?? null;
    }
    this.size--;

    return current?.value ?? null;
  }

  // 获取方法
  get(position: number): T | null {
    if (position < 0 || position >= this.size) return null;

    return this.getNode(position)?.value ?? null;
  }
  // 更新方法
  update(value: T, position: number): boolean {
    if (position < 0 || position >= this.size) return false;
    const currentNode = this.getNode(position);
    currentNode!.value = value;
    return true;
  }
  // 根据值获取该值位置索引
  indexOf(value: T): number {
    let current = this.head;
    let index = 0;
    while (current) {
      if (current.value === value) {
        return index;
      }
      index++;
      current = current.next;
    }
    return -1;
  }

  // 删除方法，根据value删除
  remove(value: T): T | null {
    const index = this.indexOf(value);
    return this.removeAt(index);
  }

  // 判断单链表是否为空的方法
  isEmpty() {
    return this.size === 0;
  }
}

export {};

```

#### 链表常见面试题
##### 237-删除链表中的节点 

- [https://leetcode.cn/problems/delete-node-in-a-linked-list/](https://leetcode.cn/problems/delete-node-in-a-linked-list/)

![image.png](https://cdn.nlark.com/yuque/0/2023/png/35159616/1686146035129-a594b8dd-20c3-4bfe-8d8c-37ff02901ec3.png#averageHue=%23dedddb&clientId=u37b2e3b2-6c56-4&from=paste&height=780&id=u8cf64a8f&originHeight=780&originWidth=1476&originalType=binary&ratio=1&rotation=0&showTitle=false&size=433717&status=done&style=none&taskId=udf78dcd8-610b-4c25-bfc9-fd1b4541305&title=&width=1476)
**解题**
```typescript
// Definition for singly-linked list.
class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

/**
 Do not return anything, modify it in-place instead.
 */
function deleteNode(node: ListNode | null): void {
  node!.val = node!.next!.val
  node!.next = node!.next!.next
}

```

##### 206 - 反转链表

- [https://leetcode.cn/problems/reverse-linked-list/](https://leetcode.cn/problems/reverse-linked-list/)

![image.png](https://cdn.nlark.com/yuque/0/2023/png/35159616/1686149086601-7b01c2b7-1e45-4a70-b8cc-2559a203c75b.png#averageHue=%23e2e0de&clientId=u37b2e3b2-6c56-4&from=paste&height=675&id=u2b13f2cc&originHeight=675&originWidth=1198&originalType=binary&ratio=1&rotation=0&showTitle=false&size=323997&status=done&style=none&taskId=ub5395f29-5751-40c8-a815-68ebe7f9070&title=&width=1198)

- 用栈结构解决
```typescript
function reverseList(head: ListNode | null): ListNode | null {
  if(head === null) return null
  if(head.next === null) return head


  const stack:ListNode[] = []
  let current:ListNode | null = head
  while(current) {
    stack.push(current)
    current = current.next
  }


  const newHead:ListNode = stack.pop()!
  let newHeadCurrent = newHead
  while(stack.length) {
    const node = stack.pop()!
    newHeadCurrent.next = node
    newHeadCurrent = newHeadCurrent.next
  }


  newHeadCurrent.next = null


  return newHead
};
```

- 用非递归解题
```typescript
function reverseList(head: ListNode | null): ListNode | null {
  if (head === null || head.next === null) return head;

  let newHead: ListNode | null = null;
  // 1.next = 2, 2.next = 3, 3.next = 4
  while (head) {
    // 让current指向下一个节点
    // 目的：保留下个节点的引用，可以拿到，并且不会销毁（current = 2)
    const current= head.next;
    // 改变head当前指向的节点，指向newHead
    // 这里反转链表对于第一节点来说，指向newHead就是null（1.next = null)
    head.next = newHead;
    // 让newhead指向head节点
    // 这里开始准备反转新的节点，目的是下一次遍历时，可以让下一个节点指向第一个节点（newHead = 1)
    newHead = head;
    // 让head指向下个节点也就是current(head = 2)
    head = current;
  }

  return newHead;
}
```
![image.png](https://cdn.nlark.com/yuque/0/2023/png/35159616/1686411187782-b1e12dad-bd85-40d0-9b96-210e156966fb.png#averageHue=%23d9d7d5&clientId=u15a44394-0de7-4&from=paste&height=252&id=u03aab694&originHeight=252&originWidth=753&originalType=binary&ratio=1&rotation=0&showTitle=false&size=147424&status=done&style=none&taskId=ufbbb4cb5-7cc8-4a51-826c-441d8612699&title=&width=753)

- 用递归方案解题
```typescript
function reverseList(head: ListNode | null): ListNode | null {
  // 递归停止条件，当递归到最后一个节点时停止
  if (head === null || head.next === null) return head;
  // 一直递归循环直到符合head === null 时停止递归
  // 那么拿到的就是链表倒数第二个节点
  const newHead = reverseList(head.next ?? null)
  // 反转链表，让最后一个节点指向head开始正式反转
  head.next.next = head
  // 让倒数第二个节点的next指向null
  head.next = null
  // 最后递归完了就是反转后的链表了
  return newHead
}
```

### 数组和链表的复杂度对比
接下来，我们使用大O表示法来对比一下数组和链表的时间复杂度:

![image.png](https://cdn.nlark.com/yuque/0/2023/png/35159616/1687703529752-190e3348-b71a-4a09-ba7b-b87d9517a107.png#averageHue=%23e4e4e4&clientId=u5cd31702-7f6b-4&from=paste&height=185&id=u74db48e6&originHeight=185&originWidth=706&originalType=binary&ratio=1&rotation=0&showTitle=false&size=35676&status=done&style=none&taskId=uf144d107-e68a-406e-bf49-b84999ab27f&title=&width=706)

- **数组是一种连续的存储结构，通过下标可以直接访问数组中的任意元素。**

 - 时间复杂度:对于数组，随机访问时间复杂度为o(1)，插入和删除操作时间复杂度为o(n)。
 - 空间复杂度:数组需要连续的存储空间，空间复杂度为o(n)。

- **链表是一种链式存储结构，通过指针链接起来的节点组成，访问链表中元素需要从头结点开始遍历。**

 - 时间复杂度:对于链表，随机访问时间复杂度为o(n)，插入和删除操作时间复杂度为o(1)。
 - 空间复杂度:链表需要为每个节点分配存储空间，空间复杂度为O(n)。

- **在实际开发中，选择使用数组还是链表需要根据具体应用场景来决定。**

 - 如果数据量不大，且需要频繁随机访问元素，使用数组可能会更好。
 - 如果数据量大，或者需要频繁插入和删除元素，使用链表可能会更好。











![](https://cdn.nlark.com/yuque/0/2023/jpeg/35159616/1683209748659-abc9ef98-ade9-4778-990a-98a58e15155c.jpeg)
## 哈希表
### 介绍
**哈希表是一种非常重要的数据结构，但是很多学习编程的人一直搞不懂哈希表到底是如何实现的。**

- 在这一章节中，我们就一点点来实现一个自己的哈希表。
- 通过实现来理解哈希表背后的原理和它的优势。

**几乎所有的编程语言都有直接或者间接的应用这种数据结构。**
**哈希表通常是基于数组进行实现的，但是相对于数组，它也很多的优势:**

- 它可以提供非常快速的插入-删除-查找操作;
- 无论多少数据，插入和删除值都接近常量的时间:即O(1)的时间复杂度。实际上，只需要几个机器指令即可完成;
- 哈希表的速度比树还要快，基本可以瞬间查找到想要的元素;
- 哈希表相对于树来说编码要容易很多;

**相对数组的不足之处**

- 哈希表中的数据是没有顺序的，所以不能以一种固定的方式(比如从小到大)来遍历其中的元素中(没有特殊处理情况下)。
- 通常情况下，哈希表中的key是不允许重复的，不能放置相同的key，用于保存不同的元素。

**那么，哈希表到底是什么呢?**

- 我们只是说了一下它的优势，似乎还是没有说它到底长什么样子?
- 这也是哈希表不好理解的地方，不像数组和链表，甚至是树一样直接画出你就知道它的结构，甚至是原理了。
- 它的结构就是数组，但是它神奇的地方在于对数组下标值的一种变换，这种变换我们可以使用哈希函数，通过哈希函数可以获取到HashCode。

![image.png](https://cdn.nlark.com/yuque/0/2023/png/35159616/1687960225993-880c78f0-5e58-4942-98b1-a96494f41fc3.png#averageHue=%23cdd3c9&clientId=u654822fe-263e-4&from=paste&height=318&id=ud4118988&originHeight=318&originWidth=415&originalType=binary&ratio=1&rotation=0&showTitle=false&size=71933&status=done&style=none&taskId=ued568d1a-9e25-48c9-8313-512ca63a9be&title=&width=415)

**我们通过二个案例，案例需要你挑选某种数据结构，而你会发现最好的选择就是哈希表**

- 案例一:公司使用一种数据结构来保存所有员工;
- 案例二:使用一种数据结构存储单词信息，比如有50000个单词。找到单词后每个单词有自己的翻译&读音&应用等等;

![image.png](https://cdn.nlark.com/yuque/0/2023/png/35159616/1687960430089-7e2c1c2f-e3da-4ea4-93dd-9a878372074a.png#averageHue=%23d4d8d1&clientId=u654822fe-263e-4&from=paste&height=283&id=ube12fc3b&originHeight=283&originWidth=512&originalType=binary&ratio=1&rotation=0&showTitle=false&size=92136&status=done&style=none&taskId=u98fff304-1af4-4241-a6b7-6b664429ef3&title=&width=512)
### 案例
#### 案例一：公司员工存储
**案例介绍:**

- 假如一家公司有1000个员工，现在我们需要将这些员工的信息使用某种数据结构来保存起

> 你会采用什么数据结构呢?


**方案一:数组**

- 一种方案是按照顺序将所有的员工依次存入一个长度为1000的数组中。
- 每个员工的信息都保存在数组的某个位置上。
- 但是我们要查看某个具体员工的信息怎么办呢?一个个找吗?不太好找。
- 数组最大的优势是什么?通过下标值去获取信息。
- 所以为了可以通过数组快速定位到某个员工，最好给员工信息中添加一个员工编号(工号)，而编号对应的就是员工的下标值。
- 当查找某个员工的信息时，通过员工编号可以快速定位到员工的信息位置。

**方案二:链表**

- 链表对应插入和删除数据有一定的优势。
- 但是对于获取员工的信息，每次都必须从头遍历到尾，这种方式显然不是特别适合我们的场景。

**最终方案:**

- 这样看最终方案似乎就是数组了。但是数组还是有缺点，什么缺点呢?
- 但是如果我们只知道员工的姓名，比如`why`，但是不知道`why`的员工编号，你怎么办呢?
- 只能线性查找?效率非常的低能不能有一种办法，让`why`的名字和它的员工编号产生直接的关系呢?
- 也就是通过`why`这个名字，我们就能获取到它的索引值，而再通过索引值我就能获取到`why`的信息呢?
- 这样的方案已经存在了，就是使用哈希函数，让某个`key`的信息和索引值对应起来。
#### 案例二：50000个单词的存储
**案例介绍:**

- 使用一种数据结构存储单词信息，比如有50000个单词。
- 找到单词后每个单词有自己的翻译&读音&应用等等

**方案一:数组?**

- 这个案例更加明显能感受到数组的缺陷。
- 我拿到一个单词`Iridescent`，我想知道这个单词的翻译/读音/应用。怎么可以从数组中查到这个单词的位置呢?
- 线性查找?`50000`次比较?
- 如果你使用数组来实现这个功能，效率会非常非常低，而且你一定没有学习过数据结构。

**方案二:链表?**

- 不需要考虑了吧?

**方案三:有没有一种方案，可以将单词转成数组的下标值呢?**

- 如果单词转成数组的下标，那么以后我们要查找某个单词的信息，直接按照下标值一步即可访问到想要的元素。
### 字母转数字方案

**似乎所有的案例都指向了一目标:将字符串转成下标值**
**但是，怎样才能将一个字符串转成数组的下标值呢?**

- 单词/字符串转下标值，其实就是字母/文字转数字

**现在我们需要设计一种方案，可以将单词转成适当的下标值:**

- 其实计算机中有很多的编码方案就是用数字代替单词的字符。就是字符编码。(常见的字符编码?)
- 比如`ASCII`编码: `a`是`97`，b是`98`，依次类推`122`代表`z`
- 我们也可以设计一个自己的编码系统，比如`a`是`1`，`b`是`2`，`c`是`3`，依次类推，`z`是`26`。
- 当然我们可以加上空格用`0`代替，就是`27`个字符(不考虑大写问题)但是，有了编码系统后，一个单词如何转成数字呢?

#### 方案一：数字相加

- 一种转换单词的简单方案就是把单词每个字符的编码求和。
- 例如单词cats转成数字:`3+1+20+19=43`，那么43就作为cats单词的下标存在数组中。

**问题:按照这种方案有一个很明显的问题就是很多单词最终的下标可能都是43。**

- 比如`was`/`tin`/`give`/`tend`/`moan`/`tick`等等。
- 我们知道数组中一个下标值位置只能存储一个数据
- 如果存入后来的数据，必然会造成数据的覆盖。
- 一个下标存储这么多单词显然是不合理的。
- 虽然后面的方案也会出现，但是要尽量避免。
#### 方案二:幂的连乘

- 现在，我们想通过一种算法，让`cats`转成数字后不那么普通。
- 数字相加的方案就有些过于普通了。
- 有一种方案就是使用幂的连乘，什么是幂的连乘呢?
- 其实我们平时使用的大于10的数字，可以用一种幂的连乘来表示它的唯一性:比如:`7654 = 7*103+6*102+5*10+4`
- 我们的单词也可以使用这种方案来表示:比如`cats =3*273+1*272+20*27+17= 60337`
- 这样得到的数字可以基本保证它的唯一性，不会和别的单词重复。

**问题:如果一个单词是**`**zzzzzzzzzz**`**(一般英文单词不会超过10个字符)。那么得到的数字超过**`**7000000000000**`**。**

- 数组可以表示这么大的下标值吗?
- 而且就算能创建这么大的数组，事实上有很多是无效的单词。创建这么大的数组是没有意义的。

![image.png](https://cdn.nlark.com/yuque/0/2023/png/35159616/1687961627619-ed77cd01-4966-4ad6-8746-ff2c3891b3aa.png#averageHue=%2341464b&clientId=u654822fe-263e-4&from=paste&height=207&id=ua1c6e9ba&originHeight=207&originWidth=444&originalType=binary&ratio=1&rotation=0&showTitle=false&size=157283&status=done&style=none&taskId=u6be762dc-f883-4e21-bfdb-2b3b6032e33&title=&width=444)

#### 两种方案总结

- **第一种方案(把数字相加求和)产生的数组下标太少。**
- **口第二种方案(与27的幂相乘求和)产生的数组下标又太多。**
#### 方案三：开放地址法
**开放地址法的主要工作方式是寻找空白的单元格来添加重复的数据。**
**我们还是通过图片来了解开放地址法的工作方式。**
![image.png](https://cdn.nlark.com/yuque/0/2023/png/35159616/1687961859057-7955c804-c63c-4c7a-a5ae-9bd4f90f3624.png#averageHue=%238e928c&clientId=u654822fe-263e-4&from=paste&height=451&id=u80188ce4&originHeight=451&originWidth=212&originalType=binary&ratio=1&rotation=0&showTitle=false&size=103237&status=done&style=none&taskId=u3be8c517-d7f5-46ea-ae7a-46caa186746&title=&width=212)![image.png](https://cdn.nlark.com/yuque/0/2023/png/35159616/1687961864706-b2cf1dab-956c-44dc-a537-ea68ce9bd41a.png#averageHue=%233d4046&clientId=u654822fe-263e-4&from=paste&height=205&id=u7b7edc39&originHeight=205&originWidth=598&originalType=binary&ratio=1&rotation=0&showTitle=false&size=232611&status=done&style=none&taskId=uad448525-54e6-455c-82e1-a6fd188b99b&title=&width=598)

**图片解析:**
从图片的文字中我们可以了解到 开放地址法 其实就是要寻找空白的位置来放置冲突的数据项。
但是探索这个位置的方式不同，有三种方法:

- **线性探测**
- **二次探测**
- **再哈希法**

##### 线性探测
**删除32呢?**

- 删除操作和插入查询比较类似，但是也有一个特别注意点。
- 注意:删除操作一个数据项时，不可以将这个位置下标的内容设置为null，为什么呢?
- 因为将它设置为null可能会影响我们之后查询其他操作，所以通常删除一个位置的数据项时，我们可以将它进行特殊处理(比如设置为-1)。
- 当我们之后看到-1位置的数据项时，就知道查询时要继续查询，但是插入时这个位置可以放置数据

**线性探测的问题:**

- 线性探测有一个比较严重的问题，就是聚集。什么是聚集呢?
- 比如我在没有任何数据的时候，插入的是22-23-24-25-26，那么意味着下标值: 2-3-4-5-6的位置都有元素。
- 这种一连串填充单元就叫做聚集。
- 聚集会影响哈希表的性能，无论是插入/查询/删除都会影响。
- 比如我们插入一个32，会发现连续的单元都不允许我们放置数据，并且在这个过程中我们需要探索多次。
- 二次探测可以解决─部分这个问题，我们一起来看一看。
##### 二次探测
**我们刚才谈到，线性探测存在的问题:**

- 如果之前的数据是连续插入的，那么新插入的一个数据可能需要探测很长的距离。

**二次探测在线性探测的基础上进行了优化:**

- 二次探测主要优化的是探测时的步长，什么意思呢?
- 线性探测，我们可以看成是步长为1的探测，比如从下标值x开始，那么线性测试就是`x+1`，`x+2`，`x+3`依次探测。
- 二次探测，对步长做了优化，比如从下标值`x`开始，`x+12`，`x+22`，`x+32`。
- 这样就可以一次性探测比较长的距离，避免那些聚集带来的影响。

**二次探测的问题:**

- 但是二次探测依然存在问题，比如我们连续插入的是32-112-82-2-192，那么它们依次累加的时候步长是相同的。
- 也就是这种情况下会造成步长不一的一种聚集。还是会影响效率。(当然这种可能性相对于连续的数字会小一些)
- 怎么根本解决这个问题呢?让每个人的步长不一样，一起来看看再哈希法吧。
##### 再哈希法
为了消除线性探测和二次探测中无论步长+1还是步长+平法中存在的问题，还有一种最常用的解决方案:**再哈希法**.**再哈希法:**

- 二次探测的算法产生的探测序列步长是固定的: 1,4,9,16,依次类推.
- 现在需要一种方法:产生一种依赖关键字的探测序列,而不是每个关键字都一样.
- 那么,不同的关键字即使映射到相同的数组下标,也可以使用不同的探测序列.
- 再哈希法的做法就是:把关键字用另外一个哈希函数，再做一次哈希化,用这次哈希化的结果作为步长.
- 对于指定的关键字,步长在整个探测中是不变的,不过不同的关键字使用不同的步长.

**第二次哈希化需要具备如下特点:**

- 和第一个哈希函数不同.(不要再使用上一次的哈希函数了，不然结果还是原来的位置)
- 不能输出为0(否则,将没有步长.每次探测都是原地踏步,算法就进入了死循环)

**其实,我们不用费脑细胞来设计了,计算机专家已经设计出一种工作很好的哈希函数:**

- `stepsize =constant - (key % constant)`
- 其中`constant`是质数,且小于数组的容量.
- 例如: `stepSize = 5 - (key %5)`,满足需求,并且结果不可能为`0`

