/**
 * 编写一个函数，以字符串作为输入，反转该字符串中的元音字母。
 * 
 * 示例 1:
 * 输入: "hello"
 * 输出: "holle"
 * 
 * 示例 2:
 * 输入: "leetcode"
 * 输出: "leotcede"
 * 说明:
 * 元音字母不包含字母"y"。
 */

/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
  const arr = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']
  const str = s.split('')
  let i = 0
  let j = s.length - 1
  
  while (i < j) {
      let flagi = arr.includes(s[i])
      let flagj = arr.includes(s[j])
      
      if (!flagi && !flagj) {
          i++
          j--
      } else if (flagi && !flagj) {
          j--
      } else if (!flagi && flagj) {
          i++
      } else {
          [str[i], str[j]] = [str[j], str[i]]
          i++
          j--
      }
  }
  
  return str.join('')
};

/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
  const str = s.split('')
  const char = []
  
  for (let i = 0; i < s.length; i++) {
      switch (s[i]) {
          case 'a': case 'e': case 'i': case 'o': case 'u':
          case 'A': case 'E': case 'I': case 'O': case 'U': {
              char.push(s[i])
          }
      }
  }
  
  for (let i = 0; i < s.length; i++) {
      switch (s[i]) {
          case 'a': case 'e': case 'i': case 'o': case 'u':
          case 'A': case 'E': case 'I': case 'O': case 'U': {
              str[i] = char.pop()
          }
      }
  }
  
  return str.join('')
};