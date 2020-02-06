/**
 * 给定一个字符串，验证它是否是回文串，只考虑字母和数字字符，可以忽略字母的大小写。
 * 说明：本题中，我们将空字符串定义为有效的回文串。
 * 
 * 示例 1:
 * 输入: "A man, a plan, a canal: Panama"
 * 输出: true
 * 
 * 示例 2:
 * 输入: "race a car"
 * 输出: false
 */

/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
  const exp = /[a-zA-Z]|[0-9]/
  let i = 0
  let j = s.length - 1
  
  while (i < j) {
      while (!exp.test(s[i])) {
          i++
      }
      
      while (!exp.test(s[j])) {
          j--
      }
      
      if (s[i] !== s[j] && s[i].toLowerCase() !== s[j].toLowerCase()) {
          return false
      } else {
          i++
          j--
      }
  }
  return true
};