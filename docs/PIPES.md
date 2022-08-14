# Javascrtipt Pipes

The k2 Tools Utilitis offer two types of pipe implementation

Both pipe implmentations function in broadly similar ways.

They are created by passing a consumer function to the pipe constructor functions 
available through `@k2_tools/utils`

Calling the pipe constructor creates an object which functions as a pipe.

The pipe object offers an `accept` method. Any item submitted to the `accept` method of the pipe
is passed to the pipes consumer.

Pipes offer a mechanism to pass data from one component to another without each component havbing
to be aware of the existence of the other.

## Install

```
npm install @k2_tools/utils
```

## Import

``` javascript
import {pipes} from "@k2_tools/utils";
```

## Usage
K2_tools pipes utilities offers two pipe implementations

1 `pipe`
1 `cachingPipe`


