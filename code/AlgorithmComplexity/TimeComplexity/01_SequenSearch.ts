/**
 * 
 * @param array 查找的数组
 * @param target 查找的目标元素
 * @returns 查找到的索引，没有返回-1
 */

function sequenSearch(array:number[],target:number) {
  let result = -1
  for (let i = 0;i<array.length;i++) {
    array[i] === target ? result = i : undefined
  }
  return result
}

export default sequenSearch
