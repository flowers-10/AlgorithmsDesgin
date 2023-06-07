import LinkedList from './LinkedList'

const linkedList = new LinkedList<string>();

// 测试append
linkedList.append("aaa");
linkedList.append("bbb");
linkedList.insert("333", 2);
linkedList.append("ccc");
linkedList.append("ddd");

// 测试insert
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