import ArrayQueue from "./01_Queue";

const queue = new ArrayQueue<string>()
queue.enqueue('一')
queue.enqueue('二')
queue.enqueue('三')

console.log(queue.dequeue());
console.log(queue.dequeue());

console.log(queue.peek());

console.log(queue.isEmpty());

console.log(queue.size());
