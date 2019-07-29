/**
 * 题目：找出字符串中连续出现最多的字符和个数
 * ‘abcaakjbb’ => {'a': 2, 'b': 2}
 * 'abbkejsbcccwqaa' => {'c': 3}
 */

function pickChar (str) {
  // 防止传入空串
  if (str.length === 0) return {}
  const arr = [] // 保存裁剪出来的短字符串
  const result = {} // 计算结果
  splitStr(str, 0, arr) // 裁剪结果数组
  arr.sort((a, b) => {return b.length - a.length}) // 对短字符串进行排序
  let len = arr[0].length
  // 找出最长字符串
  arr.forEach(i => {
    if (i.length === len && !result[i[0]]) {
      result[i[0]] = i.length
    }
  })
  return result
  /*
   * 裁剪函数
   * 接受两个参数： str(需要裁剪的字符串)，index(目前遍历到的索引)
   * 如果当前字符与后一字符相同，就将索引往后移动一位；如果不同，
   * 就在当前索引处将字符串裁切，取得从开头到当前索引的
   * 字符串并开始遍历剩下的字符串，直到字符串全部裁切完
   */
  function splitStr (str, index) {
    // 裁剪完成，结束递归
    if (str.length === 0) return
    if (str.length === 1) {
      arr.push(str[0])
      str = ''
      return
    }

    if (str[index] !== str[index+1]) {
      arr.push(str.substr(0, index + 1))
      splitStr(str.substr(index + 1), 0, arr)
    } else {
      index++
      splitStr(str, index, arr)
    }
  }
}