// https://www.hackerrank.com/challenges/insert-a-node-into-a-sorted-doubly-linked-list/problem

// Inserting a Node Into a Sorted Doubly Linked List

class DoublyLinkedListNode {
  data: number;
  next: DoublyLinkedListNode | null;
  prev: DoublyLinkedListNode | null;

  constructor(data: number) {
    this.data = data;
    this.next = null;
    this.prev = null;
  }
}

export { DoublyLinkedListNode };

function sortedInsert(
  head: DoublyLinkedListNode | null,
  data: number
): DoublyLinkedListNode | null {
  const newNode = new DoublyLinkedListNode(data);

  // Case 1: empty list
  if (!head) return newNode;

  // Case 2: insert BEFORE head
  if (data < head.data) {
    newNode.next = head;
    head.prev = newNode;
    return newNode;
  }

  let curr = head;

  // Move until we find the first element >= data
  while (curr.next && curr.next.data < data) {
    curr = curr.next;
  }

  // Case 3: insert at the end
  if (!curr.next) {
    curr.next = newNode;
    newNode.prev = curr;
    return head;
  }

  // Case 4: insert in the middle
  const nextNode = curr.next;

  curr.next = newNode;
  newNode.prev = curr;

  newNode.next = nextNode;
  nextNode.prev = newNode;

  return head;
}

const h1 = new DoublyLinkedListNode(1);
const h2 = new DoublyLinkedListNode(3);
const h3 = new DoublyLinkedListNode(4);

h1.next = h2;
h2.prev = h1;
h2.next = h3;
h3.prev = h2;

const newHead = sortedInsert(h1, 2);
// Result: 1 <-> 2 <-> 3 <-> 4
