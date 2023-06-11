import BasisStack from "./BasisStack";

class LinkedStack<T = any> implements BasisStack<T> {
  // 创建一个链表结构
  
  push(element: T): void {
    throw new Error("Method not implemented.");
  }
  pop(): T | undefined {
    throw new Error("Method not implemented.");
  }
  peek(): T | undefined {
    throw new Error("Method not implemented.");
  }
  isEmpty(): boolean {
    throw new Error("Method not implemented.");
  }
  get size(): number {
    throw new Error("Method not implemented.");
  }
  
}

export {}