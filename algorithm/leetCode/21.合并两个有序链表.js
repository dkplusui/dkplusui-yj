/*
 * @lc app=leetcode.cn id=21 lang=javascript
 *
 * [21] 合并两个有序链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (l1, l2) {
  function NodeList(val, next){
    this.val = val === undefined ? 0 : val
    this.next = next === undefined ? null : next
  }

  function merge(l1,l2){
    const dummy = new NodeList(0)
    let tail = dummy

    // 遍历链表节点 保存较小的值
    while (l1&&l2) {
      if (l1.val < l2.val) {
        tail.next = l1
        l1 = l1.next
      }else{
        tail.next = l2
        l2 = l2.nextv
      }
      tail = tail.next
    }

    tail.next = l1 || l2
    return dummy.next
  }

  return merge(l1,l2)
}
// @lc code=end

