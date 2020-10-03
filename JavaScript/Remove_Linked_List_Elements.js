/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
    let temp = new ListNode(0);
    temp.next = head;
    head = temp;
    
    while (temp.next !== null) {
        if(temp.next.val == val)
            temp.next = temp.next.next;
        else
            temp = temp.next;
    }
    
    return head.next;
};