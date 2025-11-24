// filename: test/basic.test.js
import test from 'ava';

// 1) Addition works correctly
test('adds two numbers', t => {
  const result = 2 + 3;
  t.is(result, 5);
});

// 2) Array includes an element
test('array contains expected element', t => {
  const fruits = ['apple', 'banana', 'cherry'];
  t.true(fruits.includes('banana'));
});

// 3) Object has a property with value
test('object has expected property value', t => {
  const user = { id: 1, name: 'Alice' };
  t.is(user.name, 'Alice');
});

// 4) Throwing an error is detected
test('function throws when called with invalid input', t => {
  const parsePositive = (n) => {
    if (typeof n !== 'number' || n <= 0) throw new Error('Invalid number');
    return n;
  };

  const error = t.throws(() => parsePositive(-1));
  t.is(error.message, 'Invalid number');
});

// 5) Async test resolves correctly
test('async operation resolves with expected value', async t => {
  const delay = (ms, value) => new Promise(resolve => setTimeout(() => resolve(value), ms));
  const result = await delay(2, 'done');
  t.is(result, 'done');
});
