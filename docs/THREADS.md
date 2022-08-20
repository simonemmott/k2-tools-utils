# Javascipt Threads Utilities

K2 Javascript Utilities offers several utilities packages. The threads package privide methods for working with threads.

## Install

```
npm install @k2_tools/utils
```

## Import

``` javascript
import {threads} from "@k2_tools/utils";
```

## Usage
K2_tools string utilities offers a the following methods to format strings.

1. `sleep`

### sleep

The `sleep(ms)` method accepts blocks the current thread for the given milliseconds.

``` javascript
await sleep(1000);
```

Suspends the thread for 1 second.

***Note** The javascript `await` keyword can only be used in a function prefixed with the `async` keyword.

