const assert = require('assert');
const { twoSum } = require('./two_sum');

const tests = [
  {
    name: 'basic case',
    nums: [2, 7, 11, 15],
    target: 9,
    expected: [0, 1],
  },
  {
    name: 'different order',
    nums: [3, 2, 4],
    target: 6,
    expected: [1, 2],
  },
  {
    name: 'negative numbers',
    nums: [-3, 4, 3, 90],
    target: 0,
    expected: [0, 2],
  },
  {
    name: 'duplicate values',
    nums: [3, 3],
    target: 6,
    expected: [0, 1],
  },
  {
    name: 'no valid pair',
    nums: [1, 2, 3],
    target: 7,
    expected: undefined,
  },
];

for (const { name, nums, target, expected } of tests) {
  const result = twoSum(nums, target);
  assert.deepStrictEqual(result, expected, `Failed: ${name}`);
}

console.log('All twoSum tests passed.');
