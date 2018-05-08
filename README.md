
# testar

A tool to enumerate possible combinations given a function handle and allow you to analyse which functions are tested well and which are not.

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

## Todo: 

### Phase 1:
 - Dogfood the functions on all the file to put some tests in.
 - Chalk it all up so that it looks nice
 - Make it detect the types in the function handle
 - Make it write meaningful tests
 - Add and use flow
 - Make the testing framework optionally setable.
 - Make it so that it can store config in a .testar file in home directory

### Phase 2:
 - Add anaylitics of functions already in file

