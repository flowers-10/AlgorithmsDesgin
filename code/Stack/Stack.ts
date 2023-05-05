// 封装Stack
class ArrayStack<T = any> {
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
  size(): number {
    return this.data.length;
  }
}

// 创建Stack实例
const stack1 = new ArrayStack<string>();

stack1.push("aaa");
stack1.push("bbb");
stack1.push("ccc");

console.log(stack1.peek());
console.log(stack1.pop());
console.log(stack1.pop());
console.log(stack1.pop());

console.log(stack1.isEmpty());
console.log(stack1.size());

const stack2 = new ArrayStack<number>();
stack2.push(1);
stack2.push(6);
stack2.push(10);

export {};
