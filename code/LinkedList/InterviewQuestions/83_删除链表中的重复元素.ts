import ListNode from "./listNode";


function deleteDuplicates(head: ListNode | null): ListNode | null {
  if(head === null || head.next === null) return head
  let current:ListNode | null  = head.next
  let prev:ListNode | null  = head
  while(current) {
    if(prev && prev.val === current.val) {
      prev.next = current.next
    }else {
      prev =prev &&  prev.next
    }
    current = current.next
  }
  return head
};
