/**
 * 实现一个 MapSum 类里的两个方法，insert 和 sum。
 * 对于方法 insert，你将得到一对（字符串，整数）的键值对。字符串表示键，整数表示值。如果键已经存在，那么原来的键值对将被替代成新的键值对。
 *
 * 对于方法 sum，你将得到一个表示前缀的字符串，你需要返回所有以该前缀开头的键的值的总和。
 *
 * 示例 1:
 *
 * 输入: insert("apple", 3), 输出: Null
 * 输入: sum("ap"), 输出: 3
 * 输入: insert("app", 2), 输出: Null
 * 输入: sum("ap"), 输出: 5
 */

/**
 * Initialize your data structure here.
 */
var MapSum = function() {
  this.root = new Node()
};

/** 
* @param {string} key 
* @param {number} val
* @return {void}
*/
MapSum.prototype.insert = function(key, val) {
  let cur = this.root

  for (let i = 0; i < key.length; i++) {
    const char = key.charAt(i)

    if (!cur.next.has(char)) {
      cur.next.set(char, new Node())
    }

    cur = cur.next.get(char)
  }

  cur.val = val
};

/** 
* @param {string} prefix
* @return {number}
*/
MapSum.prototype.sum = function(prefix) {
  let cur = this.root

  for (let i = 0; i < prefix.length; i++) {
    const char = prefix.charAt(i)

    if (!cur.next.has(char)) {
      return 0
    }

    cur = cur.next.get(char)
  }

  return getSum(cur)
};

class Node {
  constructor (val = 0) {
    this.val = val
    this.next = new Map()
  }
}

/**
 * 递归获取根节点下的值的和
 */

function getSum (node) {
  let res = node.val

  for (let key of node.next.keys()) {
    res += getSum(node.next.get(sum))
  }

  return res
}