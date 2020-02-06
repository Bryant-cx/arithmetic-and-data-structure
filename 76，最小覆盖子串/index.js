/**
 * 给你一个字符串 S、一个字符串 T，请在字符串 S 里面找出：包含 T 所有字母的最小子串。
 * 示例：
 * 
 * 输入: S = "ADOBECODEBANC", T = "ABC"
 * 输出: "BANC"
 * 说明：
 * 
 * 如果 S 中不存这样的子串，则返回空字符串 ""。
 * 如果 S 中存在这样的子串，我们保证它是唯一的答案。
 */

/**
 * 移动窗口
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
  // 需要匹配的字符的频率
  const needs = {}
  // 匹配字符串的长度
  const len = s.length
  // 窗口中字符的频率
  let window = {}
  // 窗口左边界
  let left = 0
  // 窗口右边界
  let right = 0
  // 匹配成功的字符数
  let matches = 0
  // 结果
  let res = ''
  
  // 遍历目标字符串，获取字符频率
  for (let i = 0; i < t.length; i++) {
      if (needs[t[i]]) {
          needs[t[i]]++
      } else {
          needs[t[i]] = 1
      }
  }
  
  // 目标字符串的字符数
  const keys = Object.keys(needs).length
  
  while (right < len) {
      // 计算窗口中当前字符出现的频率
      if (window[s[right]]) {
          window[s[right]]++
      } else {
          window[s[right]] = 1
      }
      
      // 如果窗口中当前字符的频率与目标字符串中的频率相等，则当前字符匹配成功
      if (window[s[right]] === needs[s[right]]) {
          matches++
      }
      
      // 当前窗口中匹配成功的字符数与目标字符串中相等时
      if (matches === keys) {
        // 窗口左边界向右移动缩小窗口
          while (matches === keys) {
              window[s[left]]--
              
              // 如果窗口中的字符频率低于目标字符串中的频率时，该字符的匹配失效
              if (window[s[left]] < needs[s[left]]) {
                  matches--
              }
              left++
          }

          // 临界值就是能够覆盖目标字符串的最小子串
          const str = s.slice(left - 1, right + 1)
          if (res) {
              if (str.length < res.length) {
                  res = str
              }
          } else {
              res = str
          }
      }
      right++
  }
  
  return res
};