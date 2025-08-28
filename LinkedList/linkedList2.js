// Find Length of Linked List
class Solution {
    getCount(head) {
        // Code here
        if(!head) return 0
        let curr = head;
        let length  = 0;
        
        while(curr){
            curr = curr.next;
            length++
        }
        
        return length;
    }
}

// Middle of the Linked List

var middleNode = function(head) {
let slow = head;
let fast  = head;
while(fast && fast.next){
    slow = slow.next;
    fast = fast.next.next;
}
return slow
}

// Reverse Linked List

var reverseList = function(head) {
let prev = null;
let curr = head;

while(curr){
let temp = curr.next;
curr.next = prev;
prev = curr
curr = temp
}
return prev
}

// Remove Nth Node From End of List
var removeNthFromEnd = function(head, n) {
let sentinel = new ListNode();
sentinel.next = head;
let prev = sentinel;
let length  = 0;
while(head){
    head = head.next;
    length++
}
let prevPos = length - n;
for(let i =0; i<prevPos; i++){
    prev = prev.next;
}
prev.next = prev.next.next;
return sentinel.next
}


// Delete Node in a Linked List

var deleteNode = function(node) {
   node.val = node.next.val;
   node.next = node.next.next;

};


// Linked List Cycle


var hasCycle = function(head) {
    if(!head) return false

    let slow = head;
    let fast = head.next;
    while(fast && fast.next){
    slow = slow.next;
    fast = fast.next.next;

    if(slow ==fast){
        return true
    }
    }

return false
}

// Linked List Cycle II

var detectCycle = function(head) {
let s = head;
let f = head;
while(f && f.next){
    s= s.next;
    f = f.next.next

    if(s == f){
        s = head;
        while(s !== f){
            s= s.next;
            f= f.next;
        }
        return s
    }
}
    return null

}

// Merge Two Sorted Lists

var mergeTwoLists = function(list1, list2) { 
let sentinel = new ListNode();
let sentinelCopy = sentinel;
let p1 = list1;
let p2 = list2;
while(p1 && p2){
    if(p1.val <= p2.val){
        sentinel.next = p1
        p1 = p1.next;
    }else{
        sentinel.next = p2
        p2 = p2.next;
    }
    sentinel = sentinel.next;
}
if(p1) sentinel.next = p1;
if(p2) sentinel.next = p2;
 return sentinelCopy.next;
}

// Palindrome Linked List

var isPalindrome = function(head) {
let slow = head;
let fast = head;
while(fast && fast.next){
    slow = slow.next;
    fast = fast.next.next;
}
let prev = null;
let curr = slow;
while(curr){
    let temp = curr.next;
    curr.next = prev;
    prev = curr
    curr = temp
}
let firstList = head;
let secondList = prev;
while(secondList){
if(firstList.val !== secondList.val){
    return false
}
firstList = firstList.next;
secondList = secondList.next;
}

return true
}

// Intersection of Two Linked Lists
var getIntersectionNode = function(headA, headB) {
let set = new Set();
let l1 = headA;
let l2 = headB;
while(l1){
    set.add(l1);
    l1 = l1.next;
}
while(l2){
    if(set.has(l2)){
        return l2
    }else{
    l2= l2.next;

    }
}
}

// Swap Nodes in Pairs

var swapPairs = function(head) {
  if(!head || !head.next) return head;
  let prev = new ListNode();
  let prevCopy = prev;
  prev.next = head;
  let curr = head;
  let n = head.next;
  while(curr && n){
    prev.next = n;
    curr.next = n.next;
    n.next = curr

    prev = curr;
    curr = prev.next;
    n = curr && curr.next;
  }
  return prevCopy.next
}


// Odd Even Linked List

var oddEvenList = function(head) {
    if(!head || !head.next) return head;
    let p1 = head;
    let p2 = head.next;
    let evenHead = p2;
    while(p1.next && p2.next){
        p1.next = p1.next.next;
        p2.next = p2.next.next;
        p1 = p1.next;
        p2 = p2.next;
    }
    p1.next = evenHead;
    return head;
}


// Rotate List

var rotateRight = function(head, k) {
    if(!head || !head.next) return head;
let curr = head;
let length  = 0;
while(curr){
 curr = curr.next;
 length++;
}
let s = head; 
let f = head;
k = k%length;
for(let i = 0; i<k; i++){
    f = f.next
}
while(f && f.next){
    s= s.next;
    f = f.next
}
f.next = head;
let newHead = s.next;
s.next = null

return newHead;
}

// Sort List

var sortList = function(head) {
  if(!head || !head.next) return head;
  let prev = null;
  let slow = head;
  let fast = head;
  while(fast && fast.next){
    prev = slow;
    slow = slow.next;
    fast = fast.next.next;
  }
  prev.next  = null

  let left = sortList(head);
  let right = sortList(slow);

  return mergeSort(left , right)

  function mergeSort(a,b){
    let newNode = new ListNode();
    let newNodeCopy = newNode;

    while(a && b){
        if(a.val <= b.val){
            newNode.next = a;
            a = a.next;
        }else{
           newNode.next = b;
           b= b.next;
        }
        newNode = newNode.next;
    }

     if(a) newNode.next = a;
     if(b) newNode.next = b;

     return newNodeCopy.next
  }
}


// Add Two numbers II

var addTwoNumbers = function(l1, l2) {
    let s1 = []
    let s2 = []

for(let p = l1; p; p = p.next) s1.push(p.val)
for(let p = l2; p; p = p.next) s2.push(p.val)

let head = null
let carry = 0

while(s1.length || s2.length || carry){
let x  = (s1.length ? s1.pop() : 0)
let  y = (s2.length ? s2.pop() : 0)
let sum = x + y + carry;
carry = Math.floor(sum/10);
let digit  = sum % 10;

 const node = new ListNode(digit);
    node.next = head;
    head = node;
  }
  return head;    
};