# New York Times Spelling Bee Checker

## Install

```
yarn install
```

## Checking

Provide lowercase letters with the middle letter as the first one. The first 2 letters and the total word length can be found on the spelling bee hints blog.

```
check <LETTERS> <FIRST 2> <WORD LENGTH>
```

Here's an example:

```
node check venabli va 8
```

The longer the total word length, the longer it will take. The call stack stops at 9 on my machine.
