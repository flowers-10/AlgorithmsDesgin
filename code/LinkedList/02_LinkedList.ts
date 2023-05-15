// 1.创建Node节点类
class Node<T> {
  value: T;
  next: Node<T> | null = null;
  constructor(value: T) {
    this.value = value;
  }
}

// 2.创建LinkedList的类
class LinkedList<T> {
  private head: Node<T> | null = null;
  private size: number = 0;

  get length() {
    return this.size
  }
  // 追加节点
  append(value: T) {
    // 1.根据value新建一个Node节点
    const newNode = new Node(value)
    // 2.
    if(!this.head) {
      this.head = newNode

    }else {
      let current = this.head
      while(current.next) {
        current = current.next
      }
      // current肯定指向最后一个节点
      current.next = newNode
    }
    // 3.size++
    this.size++
  }
  
}

const linkedList = new LinkedList<string>()

linkedList.append("aaa")
linkedList.append("bbb")
linkedList.append("ccc")
linkedList.append("ddd")
console.log(linkedList);


export {};
