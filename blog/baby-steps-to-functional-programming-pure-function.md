---
title: 'Baby steps to functional programming - Pure function'
date: '2022-10-01'
published: true
authors: [muceres]
tags: [functional programming, js]
---

Pure functions are a fundamental concept in functional programming, and they play a crucial role in developing high-quality, maintainable code. 

The purpose of this article is get familliar to the concept of pure functions.

## I. What are Pure Functions?

Pure functions are functions that have the following characteristics:

- Pure functions always produce the same output given the same input. They have no side effects and do not depend on any external state or global variables.
- Pure functions have no observable effects outside of their own scope. They do not modify any external state, like changing the value of a variable or updating the DOM.
- Pure functions are [referentially transparent](https://en.wikipedia.org/wiki/Referential_transparency), meaning that they can be replaced with their return value without affecting the behavior of the program. 

### B. Examples of Pure Functions:

```js
// returns the sum of two numbers.
const add = (a, b) => a + b;

// returns the product of two  
const multiply = (a, b) => a * b;

// returns a greeting message
const greet = (name) => `Hello, ${name}!`;
```

As you can see, each of these functions takes input and returns output without modifying any external state.

### C. Pure VS Impure Functions:

In contrast to pure functions, impure functions have side effects or depend on external state, which can make them less reliable and harder to reason about. Here is an example of an impure function:

```js
let counter = 0;

/**
 * @function increment - Impure function that increments a counter and returns its value.
 * @returns {number} - The updated value of the counter.
 */
const increment = () => {
  counter++;
  return counter;
};
```

The function `increment` modifies the external state of the counter variable each time it is called, making it impure.
It is also not referentially transparent, as replacing the function with its return value would not increase the counter.

## II. Benefits of Pure Functions

Overall, the benefits of pure functions make them a valuable tool for writing maintainable, testable, and reusable code. By striving to write pure functions whenever possible, we can build more reliable and robust applications.

### A. Predictability and Reliability

Since pure functions always produce the same output for the same input, they are predictable and reliable. This makes it easier to reason about the behavior of the code, reducing the risk of introducing bugs. 

### B. Testability

Pure functions are also easier to test than impure functions. Since they do not depend on external state, we can pass any input we want and expect the same output every time. This makes it easy to write automated tests to ensure that the function works as expected. Here's an example using the multiply function:

```js
/**
 * Returns the result of multiplying two numbers
 */
const multiply = (a, b) => a * b;


// Tests using jest
describe('multiply', () => {
  it('should return the product of two numbers', () => {
    expect(multiply(2, 3)).toBe(6);
    expect(multiply(-1, 5)).toBe(-5);
    expect(multiply(0, 10)).toBe(0);
    expect(multiply(2.5, 4)).toBe(10);
  });
});
```

These tests ensure that the multiply function returns the correct result for a variety of inputs. By testing the function in isolation, we can be confident that any errors are the result of a problem with the function itself, rather than external factors.

### C. Reusability and Composability

Pure functions are also highly reusable and composable. Since they do not depend on external state, they can be used in a wide variety of contexts without fear of unexpected side effects.

## III. Conclusion

Pure functions are an important concept in functional programming and can offer numerous benefits to the development process. By creating functions that are deterministic, reliable, and easy to reason about, developers can write high-quality, maintainable code that is less error-prone and more performant.

By creating pure functions, developers can also take advantage of features like referential transparency and immutability, which can improve the readability and efficiency of their code. Additionally, the testability of pure functions allows developers to catch errors early in the development process, reducing the time and effort required for debugging.

Overall, understanding and utilizing pure functions is a valuable skill for any developer.