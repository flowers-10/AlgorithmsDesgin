import ArrayQueue from "./01_Queue";

function lastRemaining(n: number, m: number): number {
  const queue = new ArrayQueue<number>();
  
  for (let i = 0; i < n; i++) {
    queue.enqueue(i);
  }

  while (queue.size > 1) {
    for (let i = 1; i < m; i++) {
      const de = queue.dequeue();
      if (de === 0 || de ) queue.enqueue(de);
    }

    queue.dequeue();
  }

  
  return queue.dequeue()!;
}

console.log(lastRemaining(5, 3));
console.log(lastRemaining(17, 2));

