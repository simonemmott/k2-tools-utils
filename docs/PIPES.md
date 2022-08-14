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

1. `pipe`
1. `cachingPipe`

### Pipe

The basic pipe implementation provides a pipe which passes accepted items to the 
consumer used to contruct the pipe.

#### Constructing A Pipe

```javascript
const consumer = (item) => {
  // ...
  // Do something with each tiem subnmitted to the accept method of the pipe
  // ...
  console.log(JSON.stringify(item);
};  // Define an item consumer function

const pipe = pipes.pipe(consumer); // Create a pipe using the defined consumer
```

Pipes can be costructed without a consumer. However, baisc pipes will throw an error
if at item is submitted to the `accept` method of the pipe if it does not have a
consumer to process the item accepted onto the pipe.

``` javascript
const pipe = pipes.pipe(); // Create a pipe without a consumer
```

#### Setting The Consumer Of An Existing Pipe

After a pipe has been constructed the `setConsumer` method of the pipe can be used
to set the consumer function of the pipe.

``` javascript
const pipe = pipes.pipe(); // Create a pipe without a consumer

const consumer = (item) => {
  // ...
  // Do something with each item subnmitted to the accept method of the pipe
  // ...
  console.log(JSON.stringify(item);
}; // Create a consumer function to handle items submitted to the pipe

pipe.setConsumer(consumer);
```

A pipe may only have a single consumer. Calling `setConsumer` on a pipe which already 
has a consuemr will replace the consumer on the pipe and subsequent items accepted
onto the pipe will be prossessed only by the most recnetly set consumer function.

#### Submitting An Item Onto The Pipe

Pipes can accept any variable and will pass the accepted variable to the configured consumer.
If the pipe was not constructed with a consumer or the consumer has been removed by calling
`pipe.setConsumer(undefined);` then a `TypeError` is thrown when an item is accepted onto the pipe.

``` javascript
pipe.accept({id: 123, type: "something", message: "An item"}); // Submit an item to the pipe.
```

Items submitted to the accept method of the pipe are immidiately passed to the consumer function to be
consumed.

### Caching Pipe

 The Cahcing Pipe implementation differs from the basic pipe implamenetation above by caching items accepted
 onto the pipe while the pipe does not have a consumer.
 
#### Constructing A Caching Pipe

```javascript
const consumer = (item) => {
  // ...
  // Do something with each tiem subnmitted to the accept method of the pipe
  // ...
  console.log(JSON.stringify(item);
};  // Define an item consumer function

const pipe = pipes.cachingPipe(consumer); // Create a caching pipe using the defined consumer
```

Caching Pipes can be costructed without a consumer. Items submitted to the `accept` method of the caching pipe
are cached while the pipe does not have a doncumer defined. As soon a a consumer is added to the pipe the
cached items are submitted to the consumer in the order they were submitted to the `accept` methof of the 
pipe. 

``` javascript
const pipe = pipes.cachingPipe(); // Create a caching pipe without a consumer
```

#### Setting The Consumer Of An Existing Caqching Pipe

After a pipe has been constructed the `setConsumer` method of the pipe can be used
to set the consumer function of the pipe.

``` javascript
const pipe = pipes.cachingPipe(); // Create a caching pipe without a consumer

const consumer = (item) => {
  // ...
  // Do something with each item subnmitted to the accept method of the pipe
  // ...
  console.log(JSON.stringify(item);
}; // Create a consumer function to handle items submitted to the pipe

pipe.setConsumer(consumer);
```

A pipe may only have a single consumer. Calling `setConsumer` on a pipe which already 
has a consuemr will replace the consumer on the pipe and subsequent items accepted
onto the pipe will be prossessed only by the most recnetly set consumer function.

#### Submitting An Item Onto The Caching Pipe

Pipes can accept any variable and will pass the accepted variable to the configured consumer.
If the pipe was not constructed with a consumer or the consumer has been removed by calling
`pipe.setConsumer(undefined);` then a the accepted items are cached until a consumer is set for
the caching pipe.

``` javascript
pipe.accept({id: 123, type: "something", message: "An item"}); // Submit an item to the pipe.
```



