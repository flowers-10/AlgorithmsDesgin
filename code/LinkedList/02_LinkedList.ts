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
    return this.size;
  }
  // 追加节点
  append(value: T) {
    // 1.根据value新建一个Node节点
    const newNode = new Node(value);
    // 2.
    if (!this.head) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      // current肯定指向最后一个节点
      current.next = newNode;
    }
    // 3.size++
    this.size++;
  }

  // 遍历链表的方法
  traverse() {
    const values: T[] = [];
    let current = this.head;
    while (current) {
      values.push(current.value);
      current = current.next;
    }
    console.log(values.join(" -> "));
  }

  //链表插入元素的方法
  insert(value: T, position: number): boolean {
    // 1.越界判断
    if (position < 0 || position > this.size) return false;
    // 2.根据value创建新的节点
    const newNode = new Node(value);
    /* 3.判断
     * 是否插入头部
     * 否则就找到需要插入的位置，然后记录前一个节点和当前节点，在前一个节点的next等于newNode，newNode的next等于后一个节点
     */
    if (position === 0) {
      newNode.next = this.head;
      this.head = newNode;
    } else {
      let current = this.head;
      let index = 0;
      let previous: Node<T> | null = null;
      while (index++ < position && current) {
        previous = current;
        current = current.next;
      }
      newNode.next = current;
      previous!.next = newNode;
    }
    this.size++;

    return true;
  }

  get(position: number): T | null {
    if (position < 0 || position >= this.size) return null;
    let current = this.head;
    let index = 0;
    while (index++ < position && current) {
      current = current.next;
    }
    return current?.value ?? null;
  }
}

const linkedList = new LinkedList<string>();

linkedList.append("aaa");
linkedList.append("bbb");
linkedList.insert("333", 2);
linkedList.append("ccc");
linkedList.append("ddd");
linkedList.insert("666", 5);
linkedList.traverse();
console.log(linkedList.get(0));
console.log(linkedList.get(1));
console.log(linkedList.get(2));


export {};
