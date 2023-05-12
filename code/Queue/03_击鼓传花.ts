import ArrayQueue from "./01_Queue";

function hotPotato(gamers: string[], num: number): number {
  if (gamers.length === 0) return -1;
  // 新建队列
  const queue = new ArrayQueue<string>();
  // 所有玩家放入队列
  for (const gamer of gamers) {
    queue.enqueue(gamer);
  }
  // 淘汰规则
  while (queue.size > 1) {
    for (let i = 1; i < num; i++) {
      const gamer = queue.dequeue();
      if (gamer) queue.enqueue(gamer);
    }
    queue.dequeue();
  }
  const leftName = queue.dequeue()!
  const index = gamers.indexOf(leftName);
  return index;
}

const leftIndex = hotPotato(
  ["犹大", "王二", "张三", "李四", "赵五", "钱六", "龚七", "高八", "幺九"],
  4
);
console.log(leftIndex);
