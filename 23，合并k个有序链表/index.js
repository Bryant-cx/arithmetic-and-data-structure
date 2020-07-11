/**
 * 合并 k 个排序链表，返回合并后的排序链表。请分析和描述算法的复杂度。
 * 
 * 示例:
 * 
 * 输入:
 * [
 *   1->4->5,
 *   1->3->4,
 *   2->6
 * ]
 * 输出: 1->1->2->3->4->4->5->6
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
  const heap = new MaxHeap()
  // 首先将链表全部放入堆中
  for (let i = 0; i < lists.length; i++) {
    lists[i] && heap.add(lists[i])
  }
  
  const dummyHead = {next: null}
  let cur = dummyHead
  
  // 元素出堆，形成新链表
  while (heap.size() > 0) {
      cur.next = new ListNode(heap.extract())
      cur = cur.next
  }
  
  return dummyHead.next
};

class MaxHeap {
  constructor () {
    const data = []        
    // 获取堆的元素个数
    this.size = () => data.length     
    // 获取父元素索引
    this.parent = (index) => index > 0 && Math.floor((index - 1) / 2)        
    // 左子节点的索引
    this.leftChild = (index) =>  2 * index + 1        
    // 右子节点的索引
    this.rightChild = (index) =>  2 * index + 2        
    // 向堆中添加元素
    this.add = (val) => {
        data.push(val)            
        // 对堆中元素进行上浮操作
        this.siftUp(data.length - 1)
    }        
    // 对堆中的元素进行上浮操作
    this.siftUp = (index) => {
        let parent = this.parent(index)
        while (index > 0 && data[parent].val > data[index].val) {
            [data[parent], data[index]] = [data[index], data[parent]]
            index = parent
            parent = this.parent(index)
        }
    } 
    // 出堆一个元素
    this.extract = () => {
        if (!data[0]) return           
        let len = data.length, res = data[0].val          
        if (data[0].next) {
            data[0] = data[0].next
        } else {
            data[0] = data[len - 1]
            data.length--
        }                        
        this.siftDown(0)           
        return res
    }

    // 对元素进行下沉操作
    this.siftDown = (index) => {
      let leftChild, rightChild, child           
      while (index < data.length) {
        leftChild = this.leftChild(index)
        child = leftChild
        
        if (leftChild >= data.length) return
        
        rightChild = this.rightChild(index)
        if (rightChild < data.length && data[leftChild].val > data[rightChild].val)  child++
        
        if (data[child].val < data[index].val) {
          [data[child], data[index]] = [data[index], data[child]]
          index = child
        } else {
          return
        }
      }
    }
  }
}