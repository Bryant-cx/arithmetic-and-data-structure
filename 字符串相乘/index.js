/**
 * 给定两个以字符串形式表示的非负整数 num1 和 num2，返回 num1 和 num2 的乘积，它们的乘积也表示为字符串形式。
 * 示例 1:
 * 输入: num1 = "2", num2 = "3"
 * 输出: "6"
 * 示例 2:
 * 输入: num1 = "123", num2 = "456"
 * 输出: "56088"
 * 说明：
 * num1 和 num2 的长度小于110。
 * num1 和 num2 只包含数字 0-9。
 * num1 和 num2 均不以零开头，除非是数字 0 本身。
 * 不能使用任何标准库的大数类型（比如 BigInteger）或直接将输入转换为整数来处理。
 */

/**
 * 思路
 * 123 * 456 公式为
 *                  1 2 3
 *                * 4 5 6
 *           --------------
 *                  7 3 8
 *                6 1 5
 *              4 9 2
 *           --------------
 *              5 6 0 8 8
 */

/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function(num1, num2) {
  if (num1 === '0' || num2 === '0') return '0'
  var arr = []
  
  str1 = num1.replace(/0+$/g, '')
  str2 = num2.replace(/0+$/g, '')
  var zeroNum = num1.length + num2.length - str1.length - str2.length
  
  for (i=str2.length - 1; i>-1; i--) {
      var temp = []
      var step = 0
      for (k=0;k<str2.length - 1 - i; k++) {
          temp.push('0')
      }
      for (j=str1.length - 1; j > -1; j--) {
          var val = +str1[j] * +str2[i] + step
          temp.unshift(val%10)
          step = parseInt(val/10)
      }
      if (step > 0) {
          temp.unshift(step)
      }
      arr.push(temp)
  }
  
  var len = arr[arr.length - 1].length
  var stepL = 0
  var resultArr = []
  
  for (l=0;l<len;l++) {
      var temp = stepL
      arr.forEach(item => {
          if (item[item.length - 1 - l]) {
              temp += +item[item.length - 1 - l]
          }
      })
      resultArr.unshift(temp%10)
      stepL = parseInt(temp/10)
  }
  
  if (stepL > 0) resultArr.unshift(stepL)
  
  if (zeroNum > 0) {
      for (i=0; i<zeroNum; i++) {
          resultArr.push(0)
      }
  }
  
  return resultArr.join('')
};