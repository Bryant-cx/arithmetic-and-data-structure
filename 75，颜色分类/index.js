/**
 * 给定一个包含红色、白色和蓝色，一共 n 个元素的数组，原地对它们进行排序，使得相同颜色的元素相邻，并按照红色、白色、蓝色顺序排列。
 * 此题中，我们使用整数 0、 1 和 2 分别表示红色、白色和蓝色。
 * 
 * 注意:
 * 不能使用代码库中的排序函数来解决这道题。
 * 
 * 示例:
 * 输入: [2,0,2,1,1,0]
 * 输出: [0,0,1,1,2,2]
 * 
 * 进阶：
 * 一个直观的解决方案是使用计数排序的两趟扫描算法。
 * 首先，迭代计算出0、1 和 2 元素的个数，然后按照0、1、2的排序，重写当前数组。
 * 你能想出一个仅使用常数空间的一趟扫描算法吗？
 */

 /**
 * 统计排序
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
  let nums_0 = 0
  let nums_1 = 0
  let nums_2 = 0
  
  for (let i = 0; i < nums.length; i++) {
      if (nums[i] === 0) {
          nums_0++
      } else if (nums[i] === 1) {
          nums_1++
      } else {
          nums_2++
      }
  }
  
  for (let i = 0; i < nums_0; i++) {
      nums[i] = 0
  }
  
  for (let i = nums_0; i < nums_0 + nums_1; i++) {
      nums[i] = 1
  }
  
  for (let i = nums_0 + nums_1; i < nums.length; i++) {
      nums[i] = 2
  }
};

/**
 * 三路快排
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    // [0, zero]区间内的元素为0
    let zero = -1
    // [two, nums.length - 1]区间内的元素等于2
    let two = nums.length
    // [zero + 1, i)区间内的元素等于1
    let i = 0
    
    while (i < two) {
        if (nums[i] === 0) {
            // 交换nums[zero + 1]和nums[i]
            zero++
            const temp = nums[zero]
            nums[zero] = nums[i]
            nums[i] = temp
            i++
        } else if (nums[i] === 2) {
            // 交换nums[two - 1]和nums[i]，注意此时i的位置不用递增！！！
            two--
            const temp = nums[two]
            nums[two] = nums[i]
            nums[i] = temp
        } else {
            i++
        }
    }
};