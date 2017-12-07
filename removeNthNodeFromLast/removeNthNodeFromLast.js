function ListNode(val) {
  this.val = val;
  this.next = null;
}

var removeNthFromEnd = function(head, n) {
  // no head or no next
  if (head === null||head.next === null || n < 1) return null;
  let fast = head;
  let slow = head;

  // move fast pointer n spots ahead of slowPointer
  while (n > 0) {
    fast = fast.next;
    n--;
  }
  if (fast === null) return head.next;

  // start moving slow pointer and fast fastPointer
  while(fast.next !== null) {
    slow = slow.next;
    fast = fast.next;
  }
  slow.next = slow.next.next;
  return head
};

let LL = new ListNode(1);
LL.next = new ListNode(2);
LL.next.next = new ListNode(3);
LL.next.next.next = new ListNode(4);
LL.next.next.next.next = new ListNode(5);
// console.log(LL);
console.log(JSON.stringify(removeNthFromEnd(LL, 2)));
