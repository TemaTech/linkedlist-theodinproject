// Factory function that creates a node for a linked list.
function nodeFactory(value) {
  return {
    value: value || null,
    nextNode: null,
  };
}

export default { nodeFactory };
