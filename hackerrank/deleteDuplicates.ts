// Remove Consecutive Duplicates from Sorted Linked List

// Write a function "deleteDuplicates" that removes consecutive duplicate nodes in-place,
//  retaining only the first node of each code. Return the head of the resulting list.

class SinglyLinkedListNode {
  data: number;
  next: SinglyLinkedListNode | null;

  constructor(nodeData: number) {
    this.data = nodeData;
    this.next = null;
  }
}

function deleteDuplicates(head: SinglyLinkedListNode): SinglyLinkedListNode {
  let current = head;

  while (current && current.next) {
    if (current.data === current.next.data) {
      current.next = current.next.next;
    } else {
      current = current.next;
    }
  }

  return head;
}
