import BasisQueue from "./BasisQueue";

class ArrayQueue<T> implements BasisQueue<T> {
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
