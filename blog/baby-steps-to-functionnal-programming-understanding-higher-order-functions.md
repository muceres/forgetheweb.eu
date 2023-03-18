---
title: 'Baby steps to functional programming - Understanding Higher-Order Functions'
date: '2022-12-01'
published: true
authors: [muceres]
tags: [functional programming, js]
---

In this post, we'll explain what are higher-order function and explore the how to use the most common of them.

## I. What are Higher-Order Functions?

A higher-order function (or a HOC) is a function that can take another function as an argument or return a function as its result.

It is only possible with some programmation languages where functions can be treated like any other value. In these cases we say that functions are [first-class citizens](https://en.wikipedia.org/wiki/First-class_citizen)
in this programming language. For example, there treated as first-class citizens in Javascript. Thanks to that we can create higher-order function.

Some examples of higher-order functions in JavaScript include `map`, `filter`, and `reduce`. These functions take another function as an argument and use it to transform or filter an array.

## II. Common Higher-Order Functions 

JavaScript has several built-in higher-order functions that are commonly used. A good start to understand and use HOC in our daily coding sessions is to get familiar with the basic HOCs. The most common of them are `map`, `filter` and `reduce`. Let's see what they do and how to use them.

### A. Map

The map function is used to transform an array by applying a function to each of its elements and returning a new array of the same length with the transformed values. The original array is not modified. Here's an example:

```js
const numbers = [1, 2, 3, 4, 5];

const doubled = numbers.map((num) => num * 2);

console.log(doubled); // [2, 4, 6, 8, 10]
```

In this example, the map() function is used to double each element in the numbers array and return a new array containing the transformed values.

The powerfull side of this function is that you can easily apply a function to a list of item instead of one. It is way more concise and readable than foreach. And as you may know less code means less place of bugs.

### B. Filter

The filter() function is used to create a new array that contains only the elements from the original array that pass a given test. An element pass the given test only if the function used returns true:

```js
const numbers = [1, 2, 3, 4, 5];

const evenNumbers = numbers.filter((num) => num % 2 === 0);

console.log(evenNumbers); // [2, 4]
```

In this example, the filter() function is used to create a new array containing only the even numbers from the numbers array.

### C. Reduce

The reduce function is used to agragate some or all of the elements of an array into a single value. It takes two arguments: a reducer function and an initial value. The reducer function is applied to each element of the array, accumulating a value that is returned at the end. Here's an example:

```js
const numbers = [1, 2, 3, 4, 5];

const sum = numbers.reduce((acc, curr) => acc + curr, 0);

console.log(sum); // 15
```

In this example, the reducer function takes two arguments: acc (short for "accumulator") and curr (short for "current"). The acc value starts at 0 and is updated with the sum of each element in the array.

These three HOCs are among the most commonly used in functional programming. When well used and they can significantly simplify your code and improve its readability. 

## III. Conclusion

Like pure function, understanding and using higher-order functions is an essential aspect of functional programming as we use them in every more advanced concepts.

We have covered some of the most commonly used higher-order functions. They are useful in so many cases that you can use them every day. I personally use them daily.

Once you'll get comfortable with them you will be able to tackle some more advanced functional programming concepts.