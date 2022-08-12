Type Signatures
===============

**NOTE:** Taken from [ramda wiki](https://github.com/ramda/ramda/wiki/Type-Signatures).

(_or "What are all those funny arrows about?"_)

Looking at the documentation for Ramda's [`over`][ov] function, the
first thing we see are two lines that look like this:


```js
Lens s a -> (a -> a) -> s -> s
Lens s a = Functor f => (a -> f a) -> s -> f s
```

For people coming to Ramda from other FP languages, these probably look
familiar, but to Javascript developers, they can be pure gobbledy-gook.
Here we describe how to read these in the Ramda documentation and how to
use them for your own code.

And at the end, once we understand _how_ these work, we will investigate
_why_ people would want them.




Named Types
-----------

Many [ML][ml]-influenced languages, including [Haskell][ha], use a
standard method of describing the signatures of their functions. As
functional programming becomes more common in Javascript, this style of
signatures is slowly becoming almost standard. We borrow and adapt the
Haskell version for Ramda.

We will not try to create a formal description, but simply capture to
the essence of these signatures through examples.


```js
// length :: String -> Number
const length = word => word.length;
length('abcde'); //=> 5
```

Here we have a simple function, `length`, that accepts a word, of type
`String`, and returns the count of characters in the string, which is a
`Number`. The comment above the function is a signature line. It starts
with the name of the function, then the separator "`::`" and then the
actual description of the functions. It should be fairly clear what the
syntax of that description is. The input of the function is supplied,
then an arrow, then the output. You will generally see the arrow written
as above, "`->`", in source code, and as "`→`" in output
documentation. They mean exactly the same thing.

What we put before and after the arrow are the _Types_ of the
parameters, not their names. At this level of description, all we really
have said is that this is a function that accepts a String and returns a
Number.


```js
// charAt :: (Number, String) -> String
const charAt = (pos, word) => word.charAt(pos);
charAt(9, 'mississippi'); //=> 'p'
```

In this one, the function accepts two parameters, a position -- which is
a `Number` -- and a word -- which is a `String` -- and it returns a
single-character `String` or the empty `String`.

In Javascript, unlike in Haskell, functions can accept more than a single
parameter. To show a function which requires two parameters, we separate
the two input parameters with a comma and wrap the group in parentheses:
`(Number, String)`. As with many languages, Javascript function
parameters are positional, so the order matters. `(String, Number)` has
an entirely different meaning.

Of course for a function that takes three parameters, we just extend the
comma-separated list inside the parentheses:

```js
// foundAtPos :: (Number, String, String) -> Boolean
const foundAtPos = (pos, char, word) => word.charAt(pos) === char;
foundAtPos(6, 's', 'mississippi'); //=> true
```

And so too for any larger finite list of parameters.

It might be instructive to note the parallel between the ES6-style arrow
function definition and these type declarations. The function is defined
by


```js
(pos, word) => word.charAt(pos);
```

By replacing the argument names with their types, the body with the
_type_ of value it returns and the fat arrow, "`=>`", with a skinny one,
"`->`", we get the signature:


```js
// (Number, String) -> String
```


Lists of Values
---------------

Very often we work with lists of values, all of the same type. If we
wanted a function to add all the numbers in a list, we might use:


```js
// addAll :: [Number] -> Number
const addAll = nbrs => nbrs.reduce((acc, val) => acc + val, 0);
addAll([8, 6, 7, 5, 3, 0, 9]); //=> 38
```

The input to this function is a _List_ of `Number`s. There is a separate
discussion on precisely [what we mean by Lists][li], but for now, we can
think of it essentially as though they were Arrays. To describe a List
of a given type, we wrap that type name in square braces, "`[  ]`". A List
of `String`s would be `[String]`, a list of `Boolean`s would be
`[Boolean]`, a List of _Lists_ of `Number`s would be `[[Number]]`.

Such lists can be the return values from a function, too, of course:


```js
// findWords :: String -> [String]
const findWords = sentence => sentence.split(/\s+/);
findWords('She sells seashells by the seashore');
//=> ["She", "sells", "seashells", "by", "the", "seashore"]
```

And we should not be surprised to realize that we can combine these:

```js
// addToAll :: (Number, [Number]) -> [Number]
const addToAll = (val, nbrs) => nbrs.map(nbr => nbr + val);
addToAll(10, [2, 3, 5, 7]); //=> [12, 13, 15, 17]
```

This function accepts a `Number`, `val`, and a list of `Number`s,
`nbrs`, and returns a new list of `Number`s.

It's important to realize that this is _all_ the signature tells us.
There is no way to distinguish this function, by the signature alone,
from any other function which happens to accept a `Number` and a list of
`Number`s and return a list of `Number`s.[^theorems]


[^theorems]: Well, there is other information we can glean, in
the form of the [free theorems][ft] the signature implies.



Functions
---------

There is still one very important type we haven't really discussed.
Functional programming is all about functions; we pass functions as
parameters and receive functions as the return value from other
functions. We need to represent these as well.

In fact, we've already seen how we represent functions. Every signature
line documented a particular function. We reuse the technique above in
the small for the higher-order functions used in our signatures.


```js
// applyCalculation :: ((Number -> Number), [Number]) -> [Number]
const applyCalculation = (calc, nbrs) => nbrs.map(nbr => calc(nbr));
applyCalculation(n => 3 * n + 1, [1, 2, 3, 4]); //=> [4, 7, 10, 13]
```

Here the function `calc` is described by `(Number → Number)` It is
just like our top-level function signatures, merely wrapped in
parentheses to properly group it as an individual unit. We can do the
same thing with a function returned from another function:


```js
// makeTaxCalculator :: Number -> (Number -> Number)
const makeTaxCalculator = rate => base =>
    Math.round(100 * base + base * rate) / 100;
const afterSalesTax = makeTaxCalculator(6.35); // tax rate: 6.35%
afterSalesTax(152.83); //=> 162.53
```

`makeTaxCalculator` accepts a tax rate, expressed as a percentage (type
`Number`, and returns a new function, which itself accepts a `Number`
and returns a `Number`. Again, we describe the function returned by
`(Number → Number)`, which makes the signature of the whole function
`Number → (Number → Number)`.



Currying
--------

Using Ramda, we would probably not write a `makeTaxCalculator` exactly
like that. Currying is central to Ramda, and we would probably take
advantage of it here.[^curry-desc]

Instead, in Ramda, one would most likely write a curried `calculateTax`
function that could be used exactly like `makeTaxCalculator` if that's
what you wanted, but could also be used in a single pass:


```js
// calculateTax :: Number -> Number -> Number
const calculateTax = R.curry((rate,  base) =>
    Math.round(100 * base + base * rate) / 100);
const afterSalesTax = calculateTax(6.35); // tax rate: 6.35%
afterSalesTax(152.83); //=> 162.53
  // OR
calculateTax(8.875, 49.95); //=> 54.38
```

This curried function can be used either by supplying both parameters up
front and getting back a value, or by supplying just one and getting
back a function that is looking for the second one. For this we use
`Number → Number → Number`. In Haskell, the ambiguity is resolved
quite simply: the arrows bind to the right, and all functions take a
single parameter, although there is some syntactic sleight of hand to
make it feel as though you can call them with multiple parameters.

In Ramda, the ambiguity is not resolved until we call the function. When
we call `calculateTax(6.35)`, since we have chosen not to supply the
second parameter, we get back the final `Number → Number` part of the
signature. When we call `calculateTax(8.875, 49.95)`, we have supplied
the first two `Number` parameters, and so get back only the final
`Number`.

The signatures of curried functions always look like this, a sequence of
Types separated by '`→`'s. Because some of those types might
themselves be functions, there might be parenthesized substructures
which themselves have arrows. This would be perfectly acceptable:


```js
// someFunc :: ((Boolean, Number) -> String) -> (Object -> Boolean) ->
//             (Object -> Number) -> Object -> String
```

This is made up. I don't have a real function to point to here. But we
can learn a fair bit about such a function from its type signature. It
accepts three functions and an `Object` and returns a `String`. The
first function it accepts itself takes a `Boolean` and a `Number` and
returns a `String`. Note that this is not described here as a curried
function (or it would have been written as `(Boolean → Number →
String)`.) The second function parameter accepts an `Object` and returns
a `Boolean`, and the third accepts an `Object` and returns a `Number`.

This is only slightly more complex than is realistic in Ramda functions.
We don't often have functions of four parameters, and we certainly don't
have any that accept three function parameters. So if this one is clear,
we're well on our way to understanding anything Ramda has to throw at
us.


[^curry-desc]: For people coming from other languages, Ramda's
currying is perhaps somewhat different than you're used to:  If `f ::
(A, B, C) → D` and `g = curry(f)`, then `g(a)(b)(c) == g(a)(b, c) ==
g(a, b)(c) == g(a, b, c) == f(a, b, c)`.



Type Variables
--------------

If you've worked with `map`, you'll know that it's fairly flexible:

```
map(word => word.toUpperCase(), ['foo', 'bar', 'baz']); //=> ["FOO", "BAR", "BAZ"]
map(word => word.length, ['Four', 'score', 'and', 'seven']); //=> [4, 5, 3, 5]
map(n => n * n, [1, 2, 3, 4, 5]); //=> [1, 4, 9, 16, 25]
map(n => n % 2 === 0, [8, 6, 7, 5, 3, 0, 9]); //=> [true, true, false, false, false, true, false]
```

From this, we would want to apply all the following type signatures to
map:

```js
// map :: (String -> String) -> [String] -> [String]
// map :: (String -> Number) -> [String] -> [Number]
// map :: (Number -> Number) -> [Number] -> [Number]
// map :: (Number -> Boolean) -> [Number] -> [Boolean]
```

But clearly there are many more possibilities too. We cannot simply list
them all. To deal with this, type signatures deal not only with concrete
classes such as `Number`, `String`, and `Object`, but also with
representations of generic classes.

How would we describe `map`? It's fairly simple. The first parameter is
a function that takes an element of one type, and returns an element of
a second type. (The two type don't have to be different.) The
second parameter is a list of elements of the input type of that
function. It returns a list of elements of the output type of that
function.

This is how we could describe it:


```js
// map :: (a -> b) -> [a] -> [b]
```

Instead of the concrete types, we use generic placeholders, single
lower-character letters to stand for arbitrary types.

It's easy enough to distinguish these from the concrete types. Those are
full words, and by convention are capitalized. Generic type variables
are just `a`, `b`, `c`, etc. Occasionally, if there is a strong reason,
we might use a letter from later in the alphabet if it helps makes some
sense of what sorts of types the generic might represent (think `k` and
`v` for `key` and `value` or `n` for a number), but mostly we just use
these ones from the beginning of the alphabet.

Note that once a generic type variable is used in a signature, it
represents a value that is fixed for all uses of that same variable. We
can't use `b` in one part of the signature and then reuse it elsewhere
unless both have to be of the same type in the entire signature.
Moreover, if two types in the signature _must_ be the same, then we have
to use the same variable for them.

But there is nothing to say that two different variables can't sometimes
point to the same types. `map(n => n * n, [1, 2, 3]); //=> [1, 4, 9]` is
`(Number → Number) → [Number] → [Number]`, so if we're to match
`(a → b) → [a] → [b]`, then both `a` and `b` point to `Number`.
This is not a problem. We still have two different type variables since
there will be cases where they are not the same.



Parameterized Types
--------------------

Some types are more complex. We can easily imagine a type representing a
collection of similar items, let's call it a `Box`. But no instance is
an arbitrary `Box`; each one can only hold one sort of item. When we
discuss a `Box` we always need to specify a `Box` of something.


```js
// makeBox :: Number -> Number -> Number -> [a] -> Box a
const makeBox = curry((height, width, depth, items) => /* ... */);

// addItem :: a -> Box a -> Box a
const addItem = curry((item, box) => /* ... */);
```

This is how we specify a `Box` parameterized by the unknown type `a`:
`Box a`. This can be used wherever we need a type, as a parameter or as
the return of a function. Of course we could parameterize the type with
a more specific type as well, `Box Candy` or `Box Rock`. (Although this
is legitimate, we don't actually do this in Ramda at the moment. Perhaps
we simply don't want to be accused of being as dumb as a box of rocks.)

There does not have to be just a single type parameter. We might have a
`Dictionary` type that is parameterized over both the type of the keys
and the type of the values it uses. This could be written `Dictionary k
v`. This also demonstrates the sort of place where we might use single
letters that are not the initial ones from the alphabet.

There aren't many declarations like this in Ramda itself, but we
might find ourselves using such things fairly often in custom code. The
largest usage of these is to support typeclasses, so we should describe
those.



Type Aliases
------------

Sometimes our types get out of hand, and it becomes difficult to work
with them because of their inner complexity or because they're too
generic. Haskell allows for _type aliases_ to simplify the understanding
of these. Ramda borrows this notion as well, although it's used
sparingly.

The idea is simple. If we had a parameterized type `User String`, where
the String was meant to represent a name, and we wanted to be more
specific about the type of String that is represented when generating a
URL, we could create a type alias like this:


```js
// toUrl :: User Name u => Url -> u -> Url
//     Name = String
//     Url = String
const toUrl = curry((base, user) => base +
user.name.toLowerCase().replace(/\W/g, '-'));
toUrl('http://example.com/users/', {name: 'Fred Flintstone', age: 24});
//=> 'http://example.com/users/fred-flintstone'
```

The aliases `Name` and `Url` appear to the left of an "`=`". Their
equivalent values appear to the right.

As noted, this can also be used to create a simple aliases to a more
complex type. A number of functions in Ramda work with `Lens`es, and the
types for those are simplified by using a type alias:


```js
//     Lens s a = Functor f => (a -> f a) -> s -> f s
```

We'll try to break down that complex value a little later, but for now,
it should be clear enough that whatever `Lens s a` represents,
underneath it is just an alias for the complicated expression, `Functor
f ⇒ (a → f a) → s → f s`.




Type Constraints
----------------

Sometimes we want to restrict the generic types we can use in a
signature in some way or another. We might want a `maximum` function
that can operate on `Numbers`, on `Strings`, on `Dates`, but not on
arbitrary `Objects`. We want to describe _ordered_ types, ones for which
`a < b` will always return a meaningful result. We discuss details of
the type `Ord` [in the Types section][or]; for our purposes, its
sufficient to say that it is meant to capture those types which have
some ordering operation that works with `<`.


```js
// maximum :: Ord a => [a] -> a
const maximum = vals => reduce(
  (curr, next) => next > curr ? next : curr, head(vals),
  tail(vals)
)
maximum([3, 1, 4, 1]); //=> 4
maximum(['foo', 'bar', 'baz', 'qux', 'quux']); //=> 'qux'
maximum(
 [new Date('1867-07-01'),  new Date('1810-09-16'), new Date('1776-07-04')]
); //=> new Date("1867-07-01")
```

This description [^maximum-note] adds a _constraint section_ at the
beginning, separated from the rest by a right double arrow ("`=>`" in
code, sometimes "`⇒`" in other documentation.) `Ord a ⇒ [a] → a`
says that maximum takes a collection of elements of some type, but that
type must adhere to `Ord`.

In the dynamically-typed Javascript, there is no simple way to _enforce_
this type constraint without adding type-checking to every parameter,
and even every value of each list.[^strong-types] But that's true of our
type signatures in general. When we require `[a]` in a signature,
there's no way to guarantee that the user will not pass us `[1, 2, 'a',
false, undefined, [42, 43], {foo: bar}, new Date, null]`. So our entire
type annotation is descriptive and aspirational rather than
compiler-enforced, as it would be in, say, Haskell.

The most common type-constraints on Ramda functions are those specified
by the Javascript [FantasyLand specification][fl].

When we discussed a `map` function earlier, we talked only about mapping
a function over a list of values. But the idea of mapping is more
general than that. It can be used to describe the application of a
function to any data structure holding some number of values of a
certain type, if it returns another structure of the same shape with new
values in it. We might map over a `Tree`, a `Dictionary`, a plain
`Wrapper` that holds only a single value, or many other types.

The notion of something that can be mapped over is captured by an
algebraic type that other languages and FantasyLand borrow from abstract
mathematics, known as [`Functor`][fu]. A `Functor` is simply a type that
contains a `map` method subject to some simple laws. Ramda's `map`
function will call the `map` method on our type, assuming that if we
didn't pass a list (or other type known to Ramda) but did pass something
with `map` on it, we expect it to act like a `Functor`.

To describe this in a signature, we add a constraints section to the
signature block:


```js
// map :: Functor f => (a -> b) -> f a -> f b
```

**Note** that the constraint block does not have to have just one
constraint on it. We can have multiple constraints, separated by commas
and wrapped in parentheses. So this could be the signature for some odd
function:


```
// weirdFunc :: (Functor f, Monoid b, Ord b) => (a -> b) -> f a -> f b
```

Without dwelling on what it does or how it uses [`Monoid`][mo] or
[`Ord`][or], we at least can see what sorts of types need to be supplied
for this function to operate correctly.


[^maximum-note]: There is a problem with this maximum function; it
will fail on an empty list.  Trying to fix that problem would take us
too far afield.

[^strong-types]: There are some very good tools that address this
shortcoming of Javascript, including in-language techniques such as
Ramda's sister project, [Sanctuary][sa], extensions of Javascript to
be more strongly typed, such as [flow][fw] and [TypeScript][ts], and
more strongly-typed languages that compile to Javascript such as
[ClojureScript][cs], [Elm][el], and [PureScript][ps].



Multiple Signatures
-------------------

Sometimes rather than trying to find the most generic version of a
signature, it's more straightforward to list several related signatures
separately. These are included in Ramda source code as two separate
JSDoc tags, and end up as two distinct lines in the documentation. This
is how we might write one in our own code:


```js
// getIndex :: a -> [a] -> Number
//          :: String -> String -> Number
const getIndex = curry((needle, haystack) => haystack.indexOf(needle));
getIndex('ba', 'foobar'); //=> 3
getIndex(42,  [7, 14, 21, 28, 35, 42, 49]); //=> 5
```

And obviously we could do more than two signatures if we chose. But do
note that this should not be too common. The goal is to write signatures
generic enough to capture our usage, without being so abstracted that
they actually obscure the usage of the function. If we can do so with a
single signature, we probably should. If it takes two, then so be it.
But if we have a long list of signatures, then we're probably missing a
common abstraction.



Ramda Miscellany
----------------

### Variadic Functions ###

There are several issues involved in porting this style signature from
Haskell to Javascript. The Ramda team has solved them on an _ad hoc_
basis, and these solutions are still [subject to change][ct].

In Haskell, all functions have a fixed arity. But Javsacript has to deal
with variadic functions. Ramda's `flip` function is a good example. It's
a simple concept: accept any function and return a new function which
swaps the order of the first two parameters.


```js
// flip :: (a -> b -> ... -> z) -> (b -> a -> ... -> z)
const flip = fn => function(b, a) {
  return fn.apply(this, [a, b].concat([].slice.call(arguments, 2)));
};
flip((x, y, z) => x + y + z)('a', 'b', 'c'); //=> 'bac'
```

This[^flip-example] show how we deal with the possibility of variadic
functions or functions of fixed-but-unknown arity: we simply use
ellipses ("`...`" in source, "``" in output docs) to show that there
are some uncounted number of parameters missing in that signature. Ramda
has removed almost all variadic functions from its own code-base, but
this is how it deals with external functions that it interacts with
whose signatures we don't know.



[^flip-example]: This is not Ramda's actual code, which trades a
little simplicity for significant performance gains.



### `Any / *` Type ###

We're [hoping to change this][ct] soon, but Ramda's type signatures
often include an asterisk (`*`) or the `Any` synthetic type. This was
simply a way to report that although there was a parameter or return
here, we could infer nothing about its actual type. We've come to the
realization that there is only one place where this still makes sense,
which is when we have a list of elements whose types could vary. At that
point, we should probably report `[Any]`. All other uses of an arbitrary
type can probably be replaced with a generic type name such as `a` or
`b`. This change might happen at any time.




### Simple Objects ###

There are several ways we could choose to represent plain Javascript
objects. Clearly we could just say `Object`, but there are times when
something else seems to be called for. When an object is used as a
dictionary of like-typed values (as opposed to its other role as a
`Record`), then the types of the keys and the values can become
relevant. In some signatures Ramda uses "`{k: v}`" to represent this
sort of object.


```js
// keys :: {k: v} -> [k]
// values :: {k: v} -> [v]
// ...
keys({a: 86, b: 75, c: 309}); //=> ['a', 'b', 'c']
values({a: 86, b: 75, c: 309}); //=> [86, 75, 309]
```

And, as always, these can be used as the _results_ of a function call
instead:

```js
// makeObj :: [[k,v]] -> {k: v}
const makeObj = reduce((obj, pair) => assoc(pair[0], pair[1], obj), {});
makeObj([['x', 10], ['y', 20]]); //=> {"x": 10, "y": 20}
makeObj([['a', true], ['b', true], ['c', false]]);
//=> {a: true, b: true, c: false}
```



### Records ###

Although this is probably not all that relevant to Ramda itself, it's
sometimes useful to be able to distinguish Javascript objects used as
records, as opposed to those used as dictionaries. Dictionaries are
simpler, and the `{k: v}` description above can be made more specific as
needed, with `{k: Number}` or `{k: Rectangle}`, or even with
`{String: Number}` and so forth. Records we can handle similarly if
we choose:


```js
// display :: {name: String, age: Number} -> (String -> Number -> String) -> String
const display = curry((person, formatter) =>
                      formatter(person.name, person.age));
const formatter = (name, age) => name + ', who is ' + age + ' years old.';
display({name: 'Fred', age: 25, occupation: 'crane operator'}, formatter);
//=>  "Fred, who is 25 years old."
```

Record notation looks much like Object literals, with the values for
fields replaced by their types.  We only account for the field names
that are somehow relevant to us.  (In the example above, even though
our data had an 'occupation' field, it's not in our signature, as
it cannot be used directly.



Complex Example: `over`
-----------------------

So at this point, we should have enough information to understand the
signature of the [`over`][ov] function:


```js
Lens s a -> (a -> a) -> s -> s
Lens s a = Functor f => (a -> f a) -> s -> f s
```

We start with the type alias, `Lens s a = Functor f ⇒ (a → f a) →
s → f s`. This tells us that the type `Lens` is parameterized by two
generic variables, `s`, and `a`. We know that there is a constraint on
the type of the `f` variable used in a `Lens`: it must be a `Functor`.
With that in mind, we see that a `Lens` is a curried function of two
parameters, the first being a function from a value of the generic type
`a` to one of the parameterized type `f a`, and the second being a value
of generic type `s`. The result is a value of the parameterized type `f
s`. _But what does it **do**?_ We don't know. We can't know. Our type
signatures tell us a great deal about a function, but they don't answer
questions about what a function actually does. We can assume that
somewhere the `map` method of `f a` must be called, since that is the
only function defined by the type `Functor`, but we don't know how or
why that `map` is called. Still, we know that a `Lens` is a function as
described, and we can use that to guide our understanding of `over`.

The function `over` is described as a curried function of three
parameters, a `Lens a s` as just analyzed, a function from the generic
type `a` to that same type, and a value of the generic type `s`. The
whole thing returns a value of type `s`.

We could dig a bit deeper and perhaps make some further deductions about
what `over` must do with the types it receives. There is significant
research on the so-called _free theorems_ demonstrating invariants
derivable just from type signatures. But this document is already far
too long. If you're interested, please see the further reading.



But Why?
--------

So now we know _how_ to read and write these signatures. Why would we
want to, and why are functional programmers so enamored of them?

There are several good reasons. First of all, once we become used to
them, we can gain a lot of insight about a function from a single line
of metadata, without the distraction of _names_. Names sound like a good
idea until you realize the names chosen by someone else are not the
name you would choose. Above we discussed the functions called
"`maximum`" and "`makeObj`". Is it helpful or confusing to know that in
Ramda, the equivalent functions are called "`max`" and "`fromPairs`"?
It's significantly worse with parameter names. And of course there are
often language barriers to consider as well. Even if English has become
the _lingua franca_ of the Web, there are people who will not understand
our beautifully written, elegant prose about these functions.  But none
of this matters with the signatures; they express concisely everything
important about a function except for what it actually _does_.

But more important than this is the fact that these signatures make it
extremely easy to think about our functions and how they combine.  If
we were given this function:


```js
foo :: Object -> Number
```

and `map`, which we've already seen looks like

```js
map :: (a -> b) -> [a] -> [b]
```

then we can immediately derive the type of the function `map(foo)`
by noting that if we substitute `Object` for `a` and `Number` for
`b`, we satisfy the signature of the first parameter to `map`, and
hence by currying we will be left with the remainder:

```js
map(foo) :: [Object] -> [Number]
```

This makes working with functions a bit like the proverbial "Insert
Tab A into Slot A" instruction.  We can recognize just by the shapes
of our functions exactly how they can be plugged together to build
larger functions.  Being able to do this is one of the key features
of functional programming.  The type signatures make it much easier
to do so.
