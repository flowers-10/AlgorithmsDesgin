import ArrayStack from "../ArrayStack";

function decimalToBinary(decimal: number): string {
  // 1.创建一个栈，用于存放余数
  const stack = new ArrayStack<number>();

  // 2.循环：
  while (decimal > 0) {
    const result = decimal % 2;
    stack.push(result);

    decimal = Math.floor(decimal / 2);
  }
  // 3.所有余数已经存入stack
  let binary = "";
  while (!stack.isEmpty()) {
    binary += stack.pop();
  }
  return binary;
}

console.log(decimalToBinary(35));
console.log("--------");
console.log(decimalToBinary(100));

export {};
