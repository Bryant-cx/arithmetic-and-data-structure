/**
 * 给定一个整数，编写一个函数来判断它是否是 2 的幂次方。
 * 示例 1:
 * 输入: 1
 * 输出: true
 * 解释: 20 = 1
 * 示例 2:
 * 输入: 16
 * 输出: true
 * 解释: 24 = 16
 * 示例 3:
 * 输入: 218
 * 输出: false
 */

/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
  if (n <= 0) return false   
  if (n%2 > 0) return false
  
  return check(n)
  
  function check (num) {
      if (num < 3) {
          return true
      }
      var n1 = Math.sqrt(num)
      var n2 = Math.sqrt(num/2)
      if (n1%2 > 0 && n2%2 > 0) {
          return false
      }
      
      if (n1%2 === 0) {
          return check(n1)
      }
      
      if (n2%2 === 0) {
          return check(n2)
      }
  }
};