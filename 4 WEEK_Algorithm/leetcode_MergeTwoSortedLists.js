function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

/**
 *
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @returns {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
  if (list1 === null) return list2;
  if (list2 === null) return list1;

  if (list1.val < list2.val) {
    list1.next = mergeTwoLists(list1.next, list2);
    return list1;
  } else {
    list2.next = mergeTwoLists(list1, list2.next);
    return list2;
  }
};
console.log(mergeTwoLists([1, 2, 4], [1, 3, 4]));
/**
 * 완벽히 이해하지 못했다..
 * Linked List 즉, 본인의 값과 next 값을 기억하는 배열인데
 * 전체배열을 돌기엔 느리고 메모리를 크게 사용하지만
 * 중간에 값을 넣거나 삭제시 용이하다
 */

// while문과 head 노드 이용
/*
const mergeTwoLists = function(l1, l2) {
  const sentinel = {
      val: -1,
      next: null
  };

  let head = sentinel;
  while (l1 && l2) {
      if (l1.val > l2.val) {
          head.next = l2;
          l2 = l2.next;
      } else {
          head.next = l1;
          l1 = l1.next;
      }
      
      head = head.next;
  }

  head.next = l1 || l2;

  return sentinel.next;
} 
*/
