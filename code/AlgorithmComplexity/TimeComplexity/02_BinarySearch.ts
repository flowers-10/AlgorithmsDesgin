/**
 *
 * @param array 查找的数组
 * @param target 查找的目标元素
 * @returns 查找到的索引，没有返回-1
 */

function binarySearch(array: number[], target: number) {
  let left = 0;
  let right = array.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    const midTarget = array[mid];
    if (midTarget === target) {
      return mid;
    } else if (midTarget < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return -1;
}

console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 9));
