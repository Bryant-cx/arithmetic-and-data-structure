/**
 * 编写一个函数来查找字符串数组中的最长公共前缀。
 * 如果不存在公共前缀，返回空字符串 ""。
 * 示例 1:
 * 输入: ["flower","flow","flight"]
 * 输出: "fl"
 * 示例 2:
 * 输入: ["dog","racecar","car"]
 * 输出: ""
 * 解释: 输入不存在公共前缀。
 * 说明:
 * 所有输入只包含小写字母 a-z 。
 */

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  if (strs.length < 1) return ''
  if (strs.length === 1) return strs[0]
  var index = null
  var str = strs[0]
  var len = str.length
  
  for (i=0; i< len; i++) {
      for(j = 1; j< strs.length; j++) {
          if (strs[j][i] !== str[i]) {
              index = i
              return str.substr(0, index)
          }
      }
  }
  
  if (!index) return str
};