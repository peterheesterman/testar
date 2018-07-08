
# Todos: 

## Suggestions from own use -

 1) make a .testrc for storing configuration that is overridden by env variables
 2) add config so that it can work for es5 modules and commonjs modules etc.
 3) `testar spec` should look in current folder and if there is only 1 file that is not a test file, if so it should create a spec file for it. 

## Phase 1:
 - Add a `testar learn` function that tells you tips and tricks about testing
 - Chalk it all up so that it looks nice (# 2) 
 - Dogfood the functions on all the file to put some tests in.
 - Make it write meaningful tests
 - Make it detect the types in the function handle
 - Add and use flow
 - Make it so that it can store config in a .testar file in home directory
 - Make the testing framework optionally setable (with a .testar in home directory and a testar init function)

## Phase 2:
 - Add anaylitics of functions already in file
 - Make it use async await everywhere
 - Transpile it so that it can be used anywhere

