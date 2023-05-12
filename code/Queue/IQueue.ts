interface IQueue<T> {
  // 入队方法
  enqueue(element: T): void;
  // 出队方法
  dequeue(): T | undefined;
  // peek查看第一个
  peek(): T | undefined;
  // 判断非空
  isEmpty(): boolean;
  // 返回队列长度
  size(): number;
}

export default IQueue
