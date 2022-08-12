# Tests with Jest

## Overview

### Basic test

```js
describe("scope of my test", () => {
  test("my test", () => expect(2).toBe(2));
});
```

### Hooks

```js
describe("hooks", () => {
  before(() => {
    /* runs once before the first test in this block */
  });

  after(() => {
    /* runs once after the last test in this block */
  });

  beforeEach(() => {
    /* runs before each test in this block */
  });

  afterEach(() => {
    /* runs after each test in this block */
  });

  // test cases
});
```

### Inclusive/Exclusive tests

- `.only` allows to run only the specified suite or test-case
- `.skip` skip the specified suite or test-case

```js
describe.only("inclusive", () => {
  /* ... */
});
```

```js
// skip test
describe.skip("exclusive", () => {
  /* ... */
});
```

**NOTE:**

- `only` and `skip` also work with the directive `it`

## Expect

### Expect decorators

- `.not` negates the current assertion
- `.resolves` unwrap the value of a fulfilled promise
- `.rejects` unwrap the value of a failed promise

**example:**

```js
expect(value).not.toBe(value);
```

### Most common

```js
expect(value)
  .toBe(value)
  .toEqual(value)
  .toBeFalsy()
  .toBeTruthy()
  .toBeDefined();
```

### Numbers

```js
expect(value)
  .toBeCloseTo(number, numDigits)
  .toBeGreaterThan(number)
  .toBeGreaterThanOrEqual(number)
  .toBeLessThan(number)
  .toBeLessThanOrEqual(number);
```

### Objects

```js
expect(value)
  .toHaveProperty(keyPath, value)
  .toEqual(value); // true if props/values are similare
```

### Errors

```js
expect(value).toThrow(error);
```
