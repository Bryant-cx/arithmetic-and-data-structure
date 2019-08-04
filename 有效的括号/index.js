/**
 * 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串，判断字符串是否有效。
 * 有效字符串需满足：
 * 左括号必须用相同类型的右括号闭合。
 * 左括号必须以正确的顺序闭合。
 * 注意空字符串可被认为是有效字符串。
 * 示例 1:
 * 输入: "()"
 * 输出: true
 * 示例 2:
 * 输入: "()[]{}"
 * 输出: true
 * 示例 3:
 * 输入: "(]"
 * 输出: false
 * 示例 4:
 * 输入: "([)]"
 * 输出: false
 * 示例 5:
 * 输入: "{[]}"
 * 输出: true
 */

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  var len = s.length
  var flag = true
  var temp = []
  
  if (len === 0) return true
  if (len === 1) return false
  if (['}', ']', ')'].includes(s[0])) return false
  
  for (i=0; i<len; i++) {
      var tempL = temp.length
      if (temp[tempL - 1] === '(' && s[i] === ')' || temp[tempL - 1] === '{' && s[i] === '}' || temp[tempL - 1] === '[' && s[i] === ']') {
          temp.splice(-1, 1, )
      } else {
          temp.push(s[i])
      }
  }
  
  return temp.length === 0
};