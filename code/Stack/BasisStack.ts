import IList from "../Types/IList"

// 定义栈结构
interface BasisStack<T> extends IList<T> {
  push(element:T):void
  pop():T | undefined
}

export default BasisStack
