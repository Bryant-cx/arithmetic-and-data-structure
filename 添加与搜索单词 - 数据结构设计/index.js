/**
 * 设计一个支持以下两种操作的数据结构：
 * void addWord(word)
 * bool search(word)
 * search(word) 可以搜索文字或正则表达式字符串，字符串只包含字母 . 或 a-z 。 . 可以表示任何一个字母。

 * 示例:

 * addWord("bad")
 * addWord("dad")
 * addWord("mad")
 * search("pad") -> false
 * search("bad") -> true
 * search(".ad") -> true
 * search("b..") -> true
 * 说明:

 * 你可以假设所有单词都是由小写字母 a-z 组成的。
 */
/**
 * Initialize your data structure here.
 */
var WordDictionary = function() {
  this.root = new Node()
};

/**
* Adds a word into the data structure. 
* @param {string} word
* @return {void}
*/
WordDictionary.prototype.addWord = function(word) {
  let cur = this.root

  for (let i = 0; i < word.length; i++) {
    const char = word.charAt(i)

    if (!cur.next.has(char)) {
      cur.next.set(char, new Node)
    }

    cur = cur.next.get(char)
  }

  if (!cur.isWord) {
    cur.isWord = true
  }
};

/**
* Returns if the word is in the data structure. A word could contain the dot character '.' to represent any one letter. 
* @param {string} word
* @return {boolean}
*/
WordDictionary.prototype.search = function(word) {
  return match(this.root, word, 0)
};

/** 
* Your WordDictionary object will be instantiated and called as such:
* var obj = new WordDictionary()
* obj.addWord(word)
* var param_2 = obj.search(word)
*/

class Node {
  constructor (isWord = false) {
    this.isWord = isWord
    this.next = new Map()
  }
}

function match(node, word, index) {
  if (index === word.length) {
    return node.isWord
  }

  const char = word.charAt(index)

  if (char === '.') {
    for (let key of node.next.keys()) {
      if (match(node.next.get(char), word, index + 1)) {
        return true
      }
    }

    return false
  } else {
    if (!node.next.has(char)) {
      return false
    } else {
      return match(node.next.get(char), word, index + 1)
    }
  }
}