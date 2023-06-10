import ListNode from "./listNode";

function reverseList(head: ListNode | null): ListNode | null {
  if (head === null || head.next === null) return head;

  let newHead: ListNode | null = null;
  // 1.next = 2, 2.next = 3, 3.next = 4
  while (head) {
    // 让current指向下一个节点
    // 目的：保留下个节点的引用，可以拿到，并且不会销毁（current = 2)
    const current= head.next;
    // 改变head当前指向的节点，指向newHead
    // 这里反转链表对于第一节点来说，指向newHead就是null（1.next = null)
    head.next = newHead;
    // 让newhead指向head节点
    // 这里开始准备反转新的节点，目的是下一次遍历时，可以让下一个节点指向第一个节点（newHead = 1)
    newHead = head;
    // 让head指向下个节点也就是current(head = 2)
    head = current;
  }

  return newHead;
}

// 测试

export {};
