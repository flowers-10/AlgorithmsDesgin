interface IList<T> {
  // peek查看第一个
  peek(): T | undefined;
  // 判断非空
  isEmpty(): boolean;
  // 返回队列长度
  get size(): number;
}

export default IList
