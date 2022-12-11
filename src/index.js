class Node {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  append(value) {
    const n = new Node(value);
    this.size++;

    if (!this.head) {
      this.head = n;
    } else {
      let current = this.head;

      while(current.next) {
        current = current.next;
      }

      current.next = n;
    }
  }

  prepend(value) {
    const n = new Node(value, this.head);
    this.head = n;
    this.size++;
  }

  numberOfNodes() {
    return this.size;
  }

  firstNode() {
    return this.head;
  }

  lastNode() {
    let current = this.head;

    while(current.next) {
      current = current.next;
    }

    return current;
  }

  at(index) {
    if (index > this.size) {
      return 'Please enter the number that corresponds to the size of the linked list.';
    }

    let current = this.head;

    for (let i = 0; i < index; i++) {
      current = current.next;
    }

    return current;
  }

  pop() {
    let current = this.head;
    let previous;

    while(current.next) {
      previous = current;
      current = current.next;
    }

    previous.next = null;
  }

  contains(value) {
    let current = this.head;
    if (current.value === value) {
      return true;
    }

    while(current.next) {
      current = current.next;
      if (current.value === value) {
        return true;
      }
    }

    return false;
  }

  find(value) {
    let count = 0;
    let current = this.head;
    if (current.value === value) {
      return count;
    }

    while(current.next) {
      current = current.next;
      count++;
      if (current.value === value) {
        return count;
      }
    }

    return null;
  }

  toString() {
    let string = '';

    let current = this.head;
    string += `( ${current.value} ) -> `;

    while(current.next) {
      current = current.next;
      string += `( ${current.value} ) -> `;
    }

    string += 'null';
    console.log(string);
  }

  insertAt(value, index) {
    if (index === 0) {
      this.prepend(value);
    } else if (index === this.size) {
      this.append(value);
    } else if (index > 0 && index < this.size) {
      const n = new Node(value);
      let current = this.head;
      let previous;
      let count = 0;

      while(count < index) {
        previous = current;
        count++;
        current = current.next;
      }

      n.next = current;
      previous.next = n;

      this.size++;
    } else {
      return "Out of range.";
    }
  }

  removeAt(index) {
    if (index > 0 && index > this.size) {
      return 'Out of range.';
    }

    let current = this.head;
    let previous;
    let count = 0;

    if (index === 0) {
      this.head = current.next;
    } else {
      while(count < index) {
        count++;
        previous = current;
        current = current.next;
      }

      previous.next = current.next;
    }

    this.size--;
  }
}
