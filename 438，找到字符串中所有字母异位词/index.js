/**
 * 给定一个字符串 s 和一个非空字符串 p，找到 s 中所有是 p 的字母异位词的子串，返回这些子串的起始索引。
 * 字符串只包含小写英文字母，并且字符串 s 和 p 的长度都不超过 20100。
 * 说明：
 * 
 * 字母异位词指字母相同，但排列不同的字符串。
 * 不考虑答案输出的顺序。
 * 示例 1:
 * 
 * 输入:
 * s: "cbaebabacd" p: "abc"
 * 
 * 输出:
 * [0, 6]
 * 
 * 解释:
 * 起始索引等于 0 的子串是 "cba", 它是 "abc" 的字母异位词。
 * 起始索引等于 6 的子串是 "bac", 它是 "abc" 的字母异位词。
 * 示例 2:
 * 
 * 输入:
 * s: "abab" p: "ab"
 * 
 * 输出:
 * [0, 1, 2]
 * 
 * 解释:
 * 起始索引等于 0 的子串是 "ab", 它是 "ab" 的字母异位词。
 * 起始索引等于 1 的子串是 "ba", 它是 "ab" 的字母异位词。
 * 起始索引等于 2 的子串是 "ab", 它是 "ab" 的字母异位词。
 */

/**
 * 使用使用窗口进行定位
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function(s, p) {
  // 需要匹配的字符串频率对象
  const needs = {}
  // 字符串长度
  const len = s.length
  // 结果
  const res = []
  // 匹配的字符数
  let matches = 0
  // 窗口中的字符串频率对象
  let window = {}
  // 窗口左边界
  let left = 0
  // 窗口右边界
  let right = 0
  
  // 先遍历出目标字符串的字符频率
  for (let i = 0; i < p.length; i++) {
      if (needs[p[i]]) {
          needs[p[i]]++
      } else {
          needs[p[i]] = 1
      }
  }
  
  // 需要匹配的字符数量
  const keys = Object.keys(needs).length
  
  while (right < len) {
      // 如果字符存在于目标字符串中
      if (needs[s[right]]) {
      
          window[s[right]] = window[s[right]] ? window[s[right]] + 1 : 1
          
          // 当匹配到的字符的频率与目标字符串中的频率相等时，确认匹配成功一个字符
          if (window[s[right]] === needs[s[right]]) {
              matches++
          }
          
          // 如果所有字符都已经匹配到了
          if (matches === keys) {               
              while (matches === keys) {
                  // 如果所有字符都已经匹配到了，并且窗口中的字符数与目标字符数相等，则说明已经匹配成功一个子串
                  if (right - left + 1 === p.length) {
                      res.push(left)
                  }
                  
                  // 窗口左侧向右移动，缩小选择范围
                  window[s[left]]--

                  // 如果窗口中的字符的频率已经低于目标值，则该字符的匹配度已失效
                  if (window[s[left]] < needs[s[left]]) {
                      matches--
                  }

                  // 窗口左侧向右移动，缩小选择范围
                  left++
              }
          }
          right++
      } else {
          // 如果出现了不存在于目标字符串中的字符，清空匹配对象，重新从下一个字符开始匹配
          right++
          left = right
          matches = 0
          window = {}
      }
  }
  
  return res
};