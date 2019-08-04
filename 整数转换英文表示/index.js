/**
 * 将非负整数转换为其对应的英文表示。可以保证给定输入小于 231 - 1 。
 * 示例 1:
 * 输入: 123
 * 输出: "One Hundred Twenty Three"
 * 示例 2:
 * 输入: 12345
 * 输出: "Twelve Thousand Three Hundred Forty Five"
 * 示例 3:
 * 输入: 1234567
 * 输出: "One Million Two Hundred Thirty Four Thousand Five Hundred Sixty Seven"
 * 示例 4:
 * 输入: 1234567891
 * 输出: "One Billion Two Hundred Thirty Four Million Five Hundred Sixty Seven Thousand Eight Hundred Ninety One"
 */

/**
 * @param {number} num
 * @return {string}
 */
var numberToWords = function(num) {
  if (num === 0) return 'Zero'
  var Enum = ['', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine']
  var numPlus = ['', 'Eleven', 'Twelve', 'Thirteen', 'Fourteen', 'Fifteen', 'Sixteen', 'Seventeen', 'Eighteen', 'Nineteen']
  var numTen = ['', 'Ten', 'Twenty', 'Thirty', 'Forty', 'Fifty', 'Sixty', 'Seventy', 'Eighty', 'Ninety']
  var temp = num/1E9
  var billion = temp >= 1 ? parseInt(temp) : 0
  var million = parseInt((num%1E9)/1E6)
  var thousand = parseInt((num%1E6)/1000)
  var res = ''

  if (billion > 0) {
      res += Enum[billion] + ' Billion'
  }
  
  res += operate(million, ' Million') + operate(thousand, ' Thousand') + operate(num%1000, '')
  return res.trim()
  
  function operate (number, mainUnit) {
      if (number === 0) return ''
      var res = ''
      var handred = parseInt(number/100)
      var ten = parseInt((number%100)/10)
      var unit = number%10
      
      if (handred > 0) {
          res = ' ' + Enum[handred] + ' Hundred'
      }
      
      if (ten > 1) {
          res += ' ' + numTen[ten]          
      }
      
      if (ten === 1) {
          if (unit === 0) {
              res += ' Ten'
          } else {
              res += ' ' + numPlus[unit]
          }
      } else {
          if (unit > 0) {
              res += ' ' + Enum[unit]
          }
      }
      
      return res + mainUnit
  }
};