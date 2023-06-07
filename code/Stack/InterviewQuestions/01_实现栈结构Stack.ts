// 封装Stack
class ArrayStack {
  // 定义一个数组，用于存储元素
  private data: any[] = [];

  // 实现栈操作方法

  // 元素压入栈
  push(element: any): void {
    this.data.push(element);
  }

  // 将栈顶元素弹出栈
  pop(): any {
    return this.data.pop();
  }

  // 查看栈顶元素
  peek(): any {
    return this.data[this.data.length - 1];
  }

  // 判断栈是否为空
  isEmpty():boolean {
    return this.data.length === 0;
  }

  // 返回栈的数据个数
  size():number {
    return this.data.length;
  }
}

// 创建Stack实例
const stack1 = new ArrayStack();

stack1.push("aaa")
stack1.push("bbb")
stack1.push("ccc")

console.log(stack1.peek());
console.log(stack1.pop());
console.log(stack1.pop());
console.log(stack1.pop());

console.log(stack1.isEmpty());
console.log(stack1.size());

export {}