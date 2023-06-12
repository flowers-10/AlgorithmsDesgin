import ListNode from "./listNode";

function mergeTwoLists(
  list1: ListNode | null,
  list2: ListNode | null
): ListNode | null {
  if (!list1) return list2;
  if (!list2) return list1;
    

  if(list1.val < list2.val) {
    list1.next = mergeTwoLists(list1.next,list2)
    return list1
  }else {
    list2.next = mergeTwoLists(list1,list2.next)
    console.log(list2);
    
    return list2
  }
}

const list1 = new ListNode(1)
const list2 = new ListNode(10)
const listNode2 = new ListNode(2)
const listNode22 = new ListNode(20)
const listNode3 = new ListNode(3)
const listNode33 = new ListNode(30)
const listNode44 = new ListNode(4)
list1.next = listNode2
listNode2.next = listNode3
list2.next = listNode22
listNode22.next = listNode33
listNode33.next = listNode44

const a = mergeTwoLists(list1,list2)
