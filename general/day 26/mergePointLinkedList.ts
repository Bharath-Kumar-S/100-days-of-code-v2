// https://www.hackerrank.com/challenges/find-the-merge-point-of-two-joined-linked-lists/problem

// Find Merge Point of Two Lists

class Node {
  data: number;
  next: Node | null;

  constructor(data: number) {
    this.data = data;
    this.next = null;
  }
}

const mergePointLinkedList = (
  headA: Node | null,
  headB: Node | null
): Node | null => {
  if (!headA || !headB) return null;

  let pointerA: Node | null = headA;
  let pointerB: Node | null = headB;

  while (pointerA !== pointerB) {
    pointerA = pointerA ? pointerA.next : headB;
    pointerB = pointerB ? pointerB.next : headA;
  }

  return pointerA;
};

const n7 = new Node(7);
const n8 = new Node(8);
const n9 = new Node(9);
n7.next = n8;
n8.next = n9;

const n1 = new Node(1);
const n2 = new Node(2);
const n3 = new Node(3);
n1.next = n2;
n2.next = n3;
n3.next = n7;

const n4 = new Node(4);
const n5 = new Node(5);
const n6 = new Node(6);
n4.next = n5;
n5.next = n6;
n6.next = n7;

console.log(mergePointLinkedList(n1, n4)?.data); // Output: Node with data 7
