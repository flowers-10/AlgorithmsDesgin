import ListNode from "./listNode";

function middleNode(head: ListNode | null): ListNode | null {
  if (head === null || head.next === null) return head;
  let current: ListNode | null = head;
  const stack: ListNode[] = [];
  while (current) {
    stack.push(current);
    current = current.next;
  }
  const remainder = Math.floor(stack.length/2);

  return stack[remainder];
}
