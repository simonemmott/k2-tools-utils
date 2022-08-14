# Javascipt String Utilities

K2 Javascript Utilities offers several utilities packages. The strings package privide several methods to format strings.

## Install

```
npm install @k2_tools/utils
```

## Import

``` javascript
import {strings} from "@k2_tools/utils";
```

## Usage
K2_tools string utilities offers a the following methods to format strings.

1. `capitalizeFirstLetter`
1. `titleCase`
1. `snakeCase`
1. `kebabCase`
1. `camelCase`
1. `aliasCase`

### capitalizerFirstLetter

The `capitailizeFirstLetter(str)` method accepts a string as its argument and returns a string where the first letter of the accepted string is replaced with its
uppercase variant.

``` javascript
console.log(strings.capitalizrFirstLetter("the quick brown fox!"));
```

Produces the following output

```
The quick brown fox!
```

### titleCase

The `titleCase(str)` method accepts a string as its argument and returns the string with the first letter of each word in the string capitalized.

``` javascript
console.log(strings.titleCase("the quick brown fox!"));
``` 

Produces the following output

```
The Quick Brown Fox!
```

### snakeCase

The `snakeCase(str)` method accepts a string as its argument and returns the string in alpha-numeric lowercase with underscores `_` replacing spaces between words.

``` javascript
console.log(strings.snakeCase("The quick brown fox!"));
``` 

Produces the following output

```
the_quick_brown_fox
```

### kebabCase

The `kebabCase(str)` method method accepts a string as its argument and returns the string in alpha-numeric lowercase with hyphens `-` replacing spaces between words.

``` javascript
console.log(strings.kebabCase("The quick brown fox!"));
``` 

Produces the following output

```
the-quick-brown-fox
```

### camelCase

The `camelCase(str)` method method accepts a string as its argument and returns the string in alpha-numeric lowercase with the first letter of each word capitalized
and the spaces wetweeb words removed.

``` javascript
console.log(strings.camelCase("The quick brown fox!"));
``` 

Produces the following output

```
TheQuickBrownFox
```

### aliasCase

The `aliasCase(str)` method method accepts a string as its argument and returns the string in alpha-numeric lowercase with the first letter of each word capitalized
and the spaces wetweeb words removed but with the very first charter in lowercase.

``` javascript
console.log(strings.aliasCase("The quick brown fox!"));
``` 

Produces the following output

```
theQuickBrownFox
```

