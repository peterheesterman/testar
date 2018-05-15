
# testar

A tool to making writing unit tests in js a little faster and less error prone.

## installation

`npm i -g testar`

## Configuration
  - `export testframework=jest`
  - `export testframework=ava` (default if no value is set)

The only configuraion at this point is a enviornment variable to select a testing framework:
  - [jest](https://github.com/facebook/jest)
  - [ava](https://github.com/avajs/ava)


### Usage

#### Spec

Allows the quick setup of many test files  
`testar spec [file_path]`

Adds a test file in the same folder (`default: [file_path].spec.js) with an import and one test that calls the function with no arguments and expects the result to be undefined. If the file is named "index.js" then the importName will be the containing folders name.

#### pick

Give you visibility into how well a give function is tested and helps you create those tests.
`testar pick [file_path]`
|
----------------> pick function
|(if no file)
----------------> y/n to make file

[long form discusion of how it works]


#### enum

[need to go remember what this does]




## Thoughts to consider for the future

```
function doSomething(aThing, bThing) 
```

This can take aThing as :
 - null
 - undefined
 - "some string"
 - "" empty string
 - 0
 - 234 
 - []
 - [12,23,'12']
 - {}
 - {name: "thing1"}
 - () => {}

as so can bThing. This results in a scary number of combinations for getting it
wrong. This is why we need to us flow to help us get it right and ensure have
have good sensible converage.


