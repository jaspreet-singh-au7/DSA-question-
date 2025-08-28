// Middle of the Linked List

var middleNode = function(head) {
let slow = head;
let fast = head;
 while(fast && fast.next){
    slow = slow.next;
    fast = fast.next.next;
 }
 return slow;
}


// Reverse Linked List

var reverseList = function(head) {
let prev = null;
let curr = head;

while(curr){
let temp = curr.next;
curr.next = prev;
prev = curr;
curr = temp

}
return prev;
}


// Remove Nth Node From End of List

var removeNthFromEnd = function(head, n) {
let sentinel  = new ListNode();
sentinel.next = head;
let p1 = sentinel; 
let p2  = sentinel;
for(let i =0; i<=n; i++){
    p2 = p2.next
}
while(p2){
    p1= p1.next;
    p2= p2.next;
}
p1.next= p1.next.next;

return sentinel.next;

}


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


// Add Two Numbers Represented by Linked Lists

var addTwoNumbers = function(l1, l2) {
let newNode = new ListNode()
let newNodeCopy = newNode;
let carry = 0;
while(l1|| l2 || carry){
    let x = (!l1 ? 0 : l1.val);
    let y = (!l2 ? 0 : l2.val);
let sum = x + y +carry;
carry = Math.floor(sum/10);
let digit = sum%10;
newNode.next = new ListNode(digit);
newNode = newNode.next;

if(l1) l1 = l1.next;
if(l2) l2 = l2.next;

} 
return newNodeCopy.next;
}


// Merge two sorted List

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

// Linked List Cycle II

var detectCycle = function(head) {
   let slow = head;
   let fast  = head;

   while(fast && fast.next){
       slow = slow.next;
       fast = fast.next.next;

       if(slow == fast){
        slow = head;

               
   
       while(slow !== fast){
        slow = slow.next;
        fast = fast.next;
       }
       return slow
   }
   }
   return null
};


// Delete Node in a Linked List
var deleteNode = function(node) {
   node.val = node.next.val;
   node.next = node.next.next;

};

// Linked List Insertion At End

class Solution {
    insertAtEnd(head, x) {
        
        let newNode = new Node(x)
        if(head == null) return node 
       let curr = head;
       while(curr.next){
           curr = curr.next;
       }
       curr.next = newNode;
       return head;

    }
    
}