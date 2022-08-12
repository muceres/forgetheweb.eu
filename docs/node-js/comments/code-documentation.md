# Code documentation

## 1 - Files

```js
/**
 * @file The description of the file
 */
```

## 2 - Types

```js
{String}                // A js type
{Number}                // Another js type
{Number[]}              // Array of numbers
{String|Number}         // Multiple types
{*}                     // Any types
{Promise<string[]>}     // Promise fulfilled by array of strings
{Object} obj            // an literal object
{Number} obj.a          // property of a literal object (optional)
{String} obj.c
```

**NOTES :**

- All JavaScript native types can be used
- Don't use `Array` as it isn't explicit enough
- Types can be used with `@param`, `@return`, `@const` and `@type`

## 3 - Constants & variables

```js
/**
 * @type {Number}
 */
let foo = 1;
```

```js
/**
 * @const {Number}
 */

const FOO = 1;
```

**NOTES :**

- Comment only constants and variables that are global to a file or a module

## 4 - Functions

### 4.1 - Overview

```js
/** adds two values
 *
 * @param {Number} x - the first value
 * @param {Number} y - the second value
 * @return {Number} result of the addition
 */
const add = (x, y) => x + y;
```

**NOTES :**

- Use the first line to comment functions is helpful when using a editor
  - the documentation can be folded while keeping the main explanation
- Param text description can be omitted ONLY if function and param names are explicit enough
- If param text description is specified it must me separated to the param name by a ' - '

### 4.2 - Parameters

```js
/**
 * @param {Number} nb - a random number       // documentation with name type and description
 * @param {String} [str] - a string           // optional parameters
 * @param {Number} [price=20] - a price       // default value
 * @param {String|Object} person - a person   // with multiples types
 */
```

### 4.3 - Useful keywords

### 4.3.1 - Scope Access

```js
/**
 * @private   // for methods internal to the module
 * @public    // for methods that are exported
 */
```

### 4.3.2 - Events

For every function that are part of an Event-Subscriber like implementation

```js
/**
 * @emits     // about what the function emits (message, queue, etc)
 * @listens   // about what the function listens (message, queue, etc)
 */
```

### 4.3.3 - Documentation helpers

For every function that are part of an Event-Subscriber like implementation

```js
/**
 * @deprecated  // about what the function emits (message, queue, etc)
 * @see         // about what the function listens (message, queue, etc)
 */
```

### 4.3.4 - Others

```js
/**
 * @throws {FooException}
 * @async                  // for functions that return promises
 */
```

### 4.3.4 - Keywords order

For a function

```js
/**
 * @deprecated
 * @see
 * @async
 * @param
 * @emits/@listens
 * @return
 * @throws
 * @private|@public
 */
```

**NOTES :**

- Keywords are not mandatory. Use it wen you actually have something to define

## 5 - TAG comments

### 5.1 - TODO Comments

Basic TODO comment

```js
// TODO: feat: describe the task todo
```

Multiple TODO comments :

```js
// TODO:
// - feat: first task description
// - refactor: second task description
// - fix: third task description
```

**NOTES :**

- Use a commit style expressions to define items on TODO comments (feat, fix, chore, etc...)

### 5.2 - Good First Issue Comments

Good first issues is a tag added to TODO comments.

```js
// TODO: feat: describe the task todo #GFI
```
