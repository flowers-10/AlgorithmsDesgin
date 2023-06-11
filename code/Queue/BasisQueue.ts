import IList from "../Types/IList";

interface BasisQueue<T> extends IList<T> {
  // 入队方法
  enqueue(element: T): void;
  // 出队方法
  dequeue(): T | undefined;
}

export default BasisQueue
