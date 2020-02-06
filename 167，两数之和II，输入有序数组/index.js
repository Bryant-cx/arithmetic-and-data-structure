/**
 * 给定一个已按照升序排列 的有序数组，找到两个数使得它们相加之和等于目标数。
 * 函数应该返回这两个下标值 index1 和 index2，其中 index1 必须小于 index2。
 * 说明:
 * 
 * 返回的下标值（index1 和 index2）不是从零开始的。
 * 你可以假设每个输入只对应唯一的答案，而且你不可以重复使用相同的元素。
 * 示例:
 * 
 * 输入: numbers = [2, 7, 11, 15], target = 9
 * 输出: [1,2]
 * 解释: 2 与 7 之和等于目标数 9 。因此 index1 = 1, index2 = 2 。
 */

/**
 * 二分查找
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
  function bstSearch(arr, l, r, tar) {
      if (l > r) {
          return -1
      }
      const mid = l + Math.floor((r - l)/2)
      if (arr[mid] === tar) {
          return mid
      }
      
      if (arr[mid] < tar) {
          return bstSearch(arr, mid + 1, r, tar)
      }
      
      return bstSearch(arr, l, mid - 1, tar)
  }
  
  const len = numbers.length
  
  for (let i = 0; i < len; i++) {
      const index = bstSearch(numbers, i + 1, len - 1, target - numbers[i])
      if (index > -1) {
          return [i + 1, index + 1]
      }
  }
};

/**
 * 对撞指针
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
  let i = 0
  let j = numbers.length - 1
  
  while (numbers[i] + numbers[j] !== target) {
      const val = numbers[i] + numbers[j]
      if (val < target) {
          i++
      } else {
          j--
      }
  }
  
  return [i+1, j+1]
};