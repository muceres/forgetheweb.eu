
# Wrap common utilities as dependancies manager packages

## Overview

**TL;DR:** In a large app that constitutes a large codebase, cross-cutting-concern utilities like a logger, encryption and alike, should be wrapped by your code and exposed as packages. This allows sharing them among multiple codebases and projects

**Otherwise:** You'll have to invent your deployment and the dependency wheel

##  In depth

Once you start growing and have different components on different servers which consumes similar utilities, you should start managing the dependencies - how can you keep 1 copy of your utility code and let multiple consumer components use and deploy it? well, there is a tool for that, it's called npm... Start by wrapping 3rd party utility packages with your own code to make it easily replaceable in the future and publish your own code as private npm package. Now, all your code base can import that code and benefit free dependency management tool. It's possible to publish npm packages for your own private use without sharing it publicly using [private modules](https://docs.npmjs.com/private-modules/intro), [private registry](https://npme.npmjs.com/docs/tutorials/npm-enterprise-with-nexus.html) or [local npm packages](https://medium.com/@arnaudrinquin/build-modular-application-with-npm-local-modules-dfc5ff047bcc).

<br/>

### Sharing your own common utilities across environments and components

![alt text](https://github.com/goldbergyoni/nodebestpractices/blob/master/assets/images/Privatenpm.png "Structuring solution by components"

**NOTE:** Modified version taken from [Node.js Best Practices](https://github.com/goldbergyoni/nodebestpractices#1-project-structure-practices).
