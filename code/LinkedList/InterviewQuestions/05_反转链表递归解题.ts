import ListNode from "./listNode";

function reverseList(head: ListNode | null): ListNode | null {
  // 递归停止条件，当递归到最后一个节点时停止
  if (head === null || head.next === null) return head;
  // 一直递归循环直到符合head === null 时停止递归
  // 那么拿到的就是链表倒数第二个节点
  const newHead = reverseList(head.next ?? null)
  // 反转链表，让最后一个节点指向head开始正式反转
  head.next.next = head
  // 让倒数第二个节点的next指向null
  head.next = null
  // 最后递归完了就是反转后的链表了
  return newHead
}

// 测试

export {};
