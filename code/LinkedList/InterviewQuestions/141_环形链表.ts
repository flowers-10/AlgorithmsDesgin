import ListNode from "./listNode";

function hasCycle(head: ListNode | null): boolean {
  if (head === null || head.next === null) return false;
  let count = 0;
  let cur = head;
  while (count < 100001) {
    if (cur.next === null) {
      return false;
    } else {
      count++;
      cur = cur.next;
    }
  }
  return true;
}
