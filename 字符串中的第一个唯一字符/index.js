/**
 * 给定一个字符串，找到它的第一个不重复的字符，并返回它的索引。如果不存在，则返回 -1。
 * 案例:
 * s = "leetcode"
 * 返回 0.
 * s = "loveleetcode",
 * 返回 2.
 * 注意事项：您可以假定该字符串只包含小写字母。
 */

/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
  const arr = new Array(26)
  
  for (var i = 0; i < s.length; i++) {
      var num = s.charCodeAt(i) - 97
      if (arr[num]) {
          arr[num] += 1
      } else {
          arr[num] = 1
      }
  }
  
  for (var j = 0; j < s.length; j++) {
      if (arr[s.charCodeAt(j) - 97] === 1) {
          return j
      }
  }
  
  return -1
};