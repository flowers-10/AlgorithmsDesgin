import sequenSearch from "./01_SequenSearch";
import binarySearch from "./02_BinarySearch";

const MAX_LENGTH = 10000000
const numsArray = new Array(MAX_LENGTH).fill(0).map((_,index) => index)
const target = MAX_LENGTH / 2

const startTime = performance.now()
const index = sequenSearch(numsArray,target)
const endTime = performance.now()
console.log('sequenSearch索引位置：',index,'消耗的时间：',endTime - startTime,'秒');

const startTime1 = performance.now()
const index1 = binarySearch(numsArray,target)
const endTime1 = performance.now()
console.log('binarySearch索引位置：',index1,'消耗的时间：',endTime1 - startTime1,'秒');
