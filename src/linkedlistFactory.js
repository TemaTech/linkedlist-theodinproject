import nodeFactory from "./nodeFactory";

// Factory function that creates a linked list.
function linkedlistFactory() {
  let head = null;
  let length = 0;

  // Adds a new node containing value to the end of the list.
  function append(value) {
    const newNode = nodeFactory(value);



    length++;
  }

  // Adds a new node containing value to the start of the list.
  function prepend(value) {

  }

  // Returns the total number of nodes in the list.
  function size() {

  }

  // Returns the first node in the list.
  function firstNode() {

  }

  // Returns the last node in the list.
  function lastNode() {

  }

  // Returns the node at the given index.
  function at(index) {

  }

  // Removes the last element from the list
  function pop() {

  }

  // Returns true if the passed in value is in the list and otherwise returns false.
  function contains(value) {

  }

  // Returns the index of the node containing value, or null if not found.
  function find(value) {

  }

  // represents your LinkedList objects as strings,
  // so you can print them out and preview them in the console.
  // The format should be: ( value ) -> ( value ) -> ( value ) -> null
  function toString() {

  }

  // Inserts a new node with the provided value at the given index.
  function insertAt(value, index) {

  }

  // Removes the node at the given index.
  function removeAt(index) {

  }

  return {
    head,
    length,
    append,
    prepend,
    size,
    firstNode,
    lastNode,
    at,
    pop,
    contains,
    find,
    toString,
    insertAt,
    removeAt,
  };
}

/**
 * Extra Credit Tip:
 *  When you insert or remove a node, consider how it will affect the existing nodes.
 *  Some of the nodes will need their nextNode link updated.
 */

export default { linkedlistFactory };
