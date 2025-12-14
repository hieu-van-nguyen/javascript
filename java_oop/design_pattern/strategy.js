class Context {
  constructor(strategy) {
    this.strategy = strategy;
  }

  execute(data) {
    return this.strategy.algorithm(data);
  }

  setStrategy(strategy) {
    this.strategy = strategy;
  }
}

class ConcreteStrategyA {
  algorithm(data) {
    // Implementation of algorithm A
    return data.sort(); // Example: sorting algorithm
  }
}

class ConcreteStrategyB {
  algorithm(data) {
    // Implementation of algorithm B
    return data.reverse(); // Example: reverse algorithm
  }
}

// Usage
const context = new Context(new ConcreteStrategyA());
const data = [3, 1, 2];
console.log(context.execute(data)); // Outputs: [1, 2, 3]

context.setStrategy(new ConcreteStrategyB());
console.log(context.execute(data)); // Outputs: [3, 2, 1]
