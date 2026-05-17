function createCounter() {
  let count = 0; // Private variable
  return {
    increment: () => ++count,
    getCount: () => count
  };
}

const counter = createCounter();
console.log(counter.increment()); // 1
console.log(counter.getCount());   // 1
console.log(counter.increment()); // 2