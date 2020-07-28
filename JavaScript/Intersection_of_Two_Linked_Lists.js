/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    let temp = [];
    
    let node1 = headA, node2 = headB;
    
    while (node1) {
        temp.push(node1);
        node1 = node1.next;
    }
    
    while (node2) {
        if (temp.includes(node2)) {
            return node2;
        }
        
        node2 = node2.next;
    }
    
    return null;
};