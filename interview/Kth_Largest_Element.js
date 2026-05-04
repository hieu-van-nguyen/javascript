function findKthLargest(nums, k) {
  const heap = [];

  for (let num of nums) {
    heap.push(num);
    heap.sort((a, b) => a - b); // simulate min heap

    if (heap.length > k) {
      heap.shift();
    }
  }

  return heap[0];
}