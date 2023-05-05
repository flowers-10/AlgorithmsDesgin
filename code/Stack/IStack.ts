// 定义栈结构
interface IStack<T> {
  push(element:T):void
  pop():T | undefined
  isEmpty():boolean
  size():number
}

export default IStack
