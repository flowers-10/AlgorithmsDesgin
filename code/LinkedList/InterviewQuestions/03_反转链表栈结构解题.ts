import ListNode from "./listNode"

function reverseList(head: ListNode | null): ListNode | null {
  if(head === null) return null
  if(head.next === null) return head

  const stack:ListNode[] = []
  let current:ListNode | null = head
  while(current) {
    stack.push(current)
    current = current.next
  }

  const newHead:ListNode = stack.pop()!
  let newHeadCurrent = newHead
  while(stack.length) {
    const node = stack.pop()!
    newHeadCurrent.next = node
    newHeadCurrent = newHeadCurrent.next
  }

  newHeadCurrent.next = null

  return newHead
};

// 测试

export {}