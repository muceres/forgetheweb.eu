# Structure your solution by components

## Overview

**TL;DR:** The worst large applications pitfall is maintaining a huge code base with hundreds of dependencies - such a monolith slows down developers as they try to incorporate new features. Instead, partition your code into components, each gets its folder or a dedicated codebase, and ensure that each unit is kept small and simple. Visit 'Read More' below to see examples of correct project structure

**Otherwise:** When developers who code new features struggle to realize the impact of their change and fear to break other dependent components - deployments become slower and riskier. It's also considered harder to scale-out when all the business units are not separated


##  In depth

For medium sized apps and above, monoliths are really bad - having one big software with many dependencies is just hard to reason about and often leads to spaghetti code. Even smart architects — those who are skilled enough to tame the beast and 'modularize' it — spend great mental effort on design, and each change requires carefully evaluating the impact on other dependent objects. The ultimate solution is to develop small software: divide the whole stack into self-contained components that don't share files with others, each constitutes very few files (e.g. API, service, data access, test, etc.) so that it's very easy to reason about it. Some may call this 'microservices' architecture — it's important to understand that microservices are not a spec which you must follow, but rather a set of principles. You may adopt many principles into a full-blown microservices architecture or adopt only a few. Both are good as long as you keep the software complexity low. The very least you should do is create basic borders between components, assign a folder in your project root for each business component and make it self-contained - other components are allowed to consume its functionality only through its public interface or API. This is the foundation for keeping your components simple, avoid dependency hell and pave the way to full-blown microservices in the future once your app grows.


### Blog Quote: "Scaling requires scaling of the entire application"

 From the blog MartinFowler.com

> Monolithic applications can be successful, but increasingly people are feeling frustrations with them - especially as more applications are being deployed to the cloud. Change cycles are tied together - a change made to a small part of the application requires the entire monolith to be rebuilt and deployed. Over time it's often hard to keep a good modular structure, making it harder to keep changes that ought to only affect one module within that module. Scaling requires scaling of the entire application rather than parts of it that require greater resource.

<br/>

### Blog Quote: "So what does the architecture of your application scream?"

 From the blog [uncle-bob](https://8thlight.com/blog/uncle-bob/2011/09/30/Screaming-Architecture.html)

> ...if you were looking at the architecture of a library, you’d likely see a grand entrance, an area for check-in-out clerks, reading areas, small conference rooms, and gallery after gallery capable of holding bookshelves for all the books in the library. That architecture would scream: Library.<br/>

So what does the architecture of your application scream? When you look at the top level directory structure, and the source files in the highest level package; do they scream: Health Care System, or Accounting System, or Inventory Management System? Or do they scream: Rails, or Spring/Hibernate, or ASP?.

<br/>

### Good: Structure your solution by self-contained components

![alt text](https://github.com/goldbergyoni/nodebestpractices/blob/master/assets/images/structurebycomponents.PNG "Structuring solution by components")

<br/><br/>

### Bad: Group your files by technical role

![alt text](https://github.com/goldbergyoni/nodebestpractices/blob/master/assets/images/structurebyroles.PNG "Structuring solution by technical roles")


**NOTE:** Modified version taken from [Node.js Best Practices](https://github.com/goldbergyoni/nodebestpractices#1-project-structure-practices).
