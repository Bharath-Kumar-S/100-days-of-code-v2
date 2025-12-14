// Reverse a doubly linked list

// https://www.hackerrank.com/challenges/reverse-a-doubly-linked-list/problem

import { DoublyLinkedListNode } from "../day 26/insertIntoSortedDLL";

function reverseDoublyLinkedList(
  head: DoublyLinkedListNode | null
): DoublyLinkedListNode | null {
  if (!head) return null;

  let current = head;
  let temp = null;

  while (current) {
    // Swap next and prev
    temp = current.prev;
    current.prev = current.next;
    current.next = temp;

    // Move to next node (which is previous before swap)
    current = current.prev!;
  }

  // After loop, temp holds the previous node
  if (temp) {
    head = temp.prev;
  }

  return head;
}

const n1 = new DoublyLinkedListNode(1);
const n2 = new DoublyLinkedListNode(2);
const n3 = new DoublyLinkedListNode(3);
n1.next = n2;
n2.prev = n1;
n2.next = n3;
n3.prev = n2;

let reversedHead = reverseDoublyLinkedList(n1);
while (reversedHead) {
  console.log(reversedHead.data); // Output: 3 2 1
  reversedHead = reversedHead.next;
}
