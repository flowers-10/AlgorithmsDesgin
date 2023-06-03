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
  // 封装私有方法
  // 根绝positon获取当前的节点（不是节点的value，而是获取节点)
  private getNode(position: number): Node<T> | null {
    let index = 0;
    let current = this.head;
    while (index++ < position && current) {
      current = current.next;
    }
    return current;
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
      const previous = this.getNode(position - 1);

      newNode.next = previous!.next;
      previous!.next = newNode;
    }
    this.size++;

    return true;
  }

  //链表插入元素的方法
  removeAt(position: number): T | null {
    // 1.越界判断
    if (position < 0 || position >= this.size) return null;

    let current = this.head;
    if (position === 0) {
      this.head = current?.next ?? null;
    } else {
      const previous = this.getNode(position - 1);
      previous!.next = previous?.next?.next ?? null;
    }
    this.size--;

    return current?.value ?? null;
  }

  // 获取方法
  get(position: number): T | null {
    if (position < 0 || position >= this.size) return null;

    return this.getNode(position)?.value ?? null;
  }
  // 更新方法
  update(value: T, position: number): boolean {
    if (position < 0 || position >= this.size) return false;
    const currentNode = this.getNode(position);
    currentNode!.value = value;
    return true;
  }
  // 根据值获取该值位置索引
  indexOf(value: T): number {
    let current = this.head;
    let index = 0;
    while (current) {
      if (current.value === value) {
        return index;
      }
      index++;
      current = current.next;
    }
    return -1;
  }

  // 删除方法，根据value删除
  remove(value: T): T | null {
    const index = this.indexOf(value);
    return this.removeAt(index);
  }

  // 判断单链表是否为空的方法
  isEmpty() {
    return this.size === 0;
  }
}

const linkedList = new LinkedList<string>();

linkedList.append("aaa");
linkedList.append("bbb");
linkedList.insert("333", 2);
linkedList.append("ccc");
linkedList.append("ddd");
linkedList.insert("666", 5);

// linkedList.traverse();
// linkedList.removeAt(2)
// linkedList.removeAt(2)
// linkedList.traverse();

// console.log(linkedList.get(0));
// console.log(linkedList.get(1));
// console.log(linkedList.get(2));

// 测试update
linkedList.traverse();
linkedList.update("迈尔斯", 2);
linkedList.update("格温", 3);
linkedList.traverse();

// 测试indexof
console.log(linkedList.indexOf("迈尔斯"));
console.log(linkedList.indexOf("格温"));

// 测试remove
linkedList.remove('迈尔斯')
linkedList.remove('格温')
linkedList.remove('aaa')
linkedList.remove('bbb')
linkedList.remove('ddd')


console.log(linkedList.isEmpty());

export {};
