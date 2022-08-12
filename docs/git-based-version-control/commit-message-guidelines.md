# Commit Message Guidelines

## Goals

- have more readable messages
- allow generating CHANGELOG.md by script

## Overview

Each commit message consists of a header, a body and a footer. The header has a special format that includes a type, a scope and a subject:

```xml
<type>(<scope>): <subject>
<BLANK LINE>
<body>
<BLANK LINE>
<footer>
```

The header is **mandatory** and the scope of the header is optional.

## Message header

```xml
<type>(<scope>): <subject>
```

The header should be a short description (50 characters).

### type

- **build:** Changes that affect the build system or external dependencies (example scopes: gulp, broccoli, npm)
- **ci:** Changes to our CI configuration files and scripts (example scopes: Circle, BrowserStack, SauceLabs)
- **docs:** Documentation
- **feat:** A new feature
- **fix:** A bug fix
- **perf:** A code change that improves performance
- **refactor:** A code change that neither fixes a bug nor adds a feature
- **style:** (white-space, formatting, missing semi-colons, etc)
- **test:** Adding/correcting missing tests

### Scope

The scope can be the name of the npm package or module affected.

- Scope is recommended bu optional. don't specify it if there isn't any fitting scope.

### Subject

This is a very short description of the change.

- use imperative, present tense: “change” not “changed” nor “changes”
- don't capitalize first letter
- no dot (.) at the end

## Message body

```xml
<body>
```

## Header body

### Including Issues in a Commit Message

```xml
<command> #<issue id>
```

| Keyword | Example                  |
| ------- | ------------------------ |
| close   | `close #123, #245, #992` |
| reopen  | `reopen #746`            |
| hold    | `hold #23, #34`          |
| see     | `see #528, #23`          |

- use imperative, present tense: “change” not “changed” nor “changes”
- include the # before the issue id
- keywords can refer to one or more issues
- except `see` keywords must be used in the footer
- the keyword `see` must be used in the body

## Commit messages examples

```
feat(browser): onUrlChange event (popstate/hashchange/polling)

Added new event to $browser:
- forward popstate event if available
- forward hashchange event if popstate not available
- do polling when neither popstate nor hashchange available

BREAKING CHANGE: $browser.onHashChange, which was removed (use onUrlChange instead)

```

```
test(compile): couple of unit tests for IE9

Older IEs serialize html uppercased, but IE9 does not...
Would be better to expect case insensitive, unfortunately jasmine does
not allow to user regexps for throw expectations.

Closes #392
BREAKING CHANGE: foo.bar api, foo.baz should be used instead

```

# Reference use for this document

- [AngularJS Git Commit Message Conventions - Angular Team](https://docs.google.com/document/d/1QrDFcIiPjSLDn3EL15IJygNPiHORgU1_OOAqWjiDU5Y/edit#heading=h.uyo6cb12dt6w)
- [Resolve issues automatically when users push code - Bitbucket](https://confluence.atlassian.com/bitbucket/resolve-issues-automatically-when-users-push-code-221451126.html)
