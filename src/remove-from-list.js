function ListNode(x) {
  this.value = x;
  this.next = null;
}

function removeKFromList(l, k) {
  if (l === null) {
    return null;
  }

  while (l !== null && l.value === k) {
    l = l.next;
  }

  let current = l;

  while (current !== null && current.next !== null) {
    if (current.next.value === k) {
      current.next = current.next.next;
    } else {
      current = current.next;
    }
  }

  return l;
}

module.exports = removeKFromList;