import ListNode from "./listNode";

function isPalindrome(head: ListNode | null): boolean {
  let res = true
  if (head === null || head.next === null) return false;
  let current: ListNode | null = head;
  const stack: ListNode[] = [];
  while (current) {
    stack.push(current);
    current = current.next;
  }

  stack.forEach((item, index) => {
    stack[index].val === stack[stack.length - 1 - index].val ? undefined : res = false
  });
  return res
}
