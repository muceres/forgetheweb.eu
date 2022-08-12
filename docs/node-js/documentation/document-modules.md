
# How to document a module

- description
- installation
- Usage
- api documentation
- FAQ (Optional)
- Related (Optional)
- Maintainers (Optional)
- License

## 1 items of a good documentation

### 1.1 - Module description

**Exemple:**
```
# my-module

> Lorem ipsum dolor sit amet, consectetur adipiscing elit
```

### 1.2 - Module installation
No matter if you module is available on npm, on your projet folder or somewhere else, you must indicate how to export it.

### 1.3 - Usage
Provide a quick snippet showing rapidly how your module can be used. en exemple [here](https://github.com/muceres/deep-map-with-key#usage).

### 1.4 - API documentation

I recommand to use JSDOC on your entire codebase.
Once at least all the functions of your modules have been documented this way you can use the library [jsdoc2md](https://github.com/jsdoc2md/jsdoc-to-markdown) in order to integrate its output inside your readme.


### 1.5 - FAQ (Optional)
Only if your module does have frequent questions that can be quickly answered

### 1.6 - Related (Optional)
If there are modules that are often used with your own or modules that provide related features you see highlight them using a simple list

**Exemple:**
```
# Related
- [Module 1](link) - lorem ipsum dolor sit amet
- [Module 2](link) - consectetur adipiscing elit
- [Module 3](link) - integer et tincidunt diam
- [Module 4](link) - a fermentum nisl donec dapibus
```

### 1.7 - Maintainers (Optional)
if your are more than one person on the project you can a list of the maintainers and the period of their activity.

**Exemple:**
```
# Related
- [Erik Antoon](link) - may 2019 to present
- [Helena Ibai](link) - jan 2016 to may 2019
- [Jon Judita](link) - fev 2015 to jan 2016
- [Aline Sherzod](link) - may 2013 to fev 2015
```

### 1.8 - License
This part must contain two informations :
- the license
- the name of the author(s) and/or maintainer(s)

**Exemple:**
```
# License
MIT © [muceres](https://forgetheweb.eu)
```

## 2 - Bonus

### 2.1 - Exemples of modules

You can find exemples of these practices in some of my open source projects like:
- [koa-handler](https://github.com/muceres/koa-handler)
- [koa-joi-validator](https://github.com/muceres/koa-joi-validator)
- [deep-map-with-key](https://github.com/muceres/deep-map-with-key)
- etc...

Projets done by other people:
- [Percentage by sindresorhus](https://github.com/sindresorhus/Percentage)

### 2.2 - Readme template

TO DO
