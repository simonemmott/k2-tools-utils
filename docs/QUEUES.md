# Javascript Queues

The k2 Tools Utilitis offers a queue implementation

A queue is created by calling the queue constructor functions 
available through `@k2_tools/utils`

Calling the queue constructor creates an object which functions as a queue.

The queue object offers an `accept` method. Any item submitted to the `accept` method of the queue
is cached by the queue until the item is removed from the queue.

Queues differ from Pipes in that an item accepted by a pipe is immediately processed by the pipes consumer
while items accepted by a queue are cached until the process reading the queue is ready to process the next
item on the queue.

Queues allow javascript components to share data without knowing whether each other exist and emnsuring that
items subbitted to the queue are processed independently and sequentially, even if multiple components and
multiple threads submit items to the queue concurrently.

## Install

```
npm install @k2_tools/utils
```

## Import

``` javascript
import {queues} from "@k2_tools/utils";
```

## Usage
K2_tools queues utilities offers a queue implementations

1. `queue`

### Queue

#### Creating A Queue

``` javascript
const queue = queues.queue() // Create a new queue
```

Queues can also be created with some inital items to be preocessed by passing the initial items to the queue
constructor function.

``` javascript
const item1 = {id: 1, type: "item", body: {...}} // Create an item to be queued
const item2 = {id: 2, type: "item", body: {...}} // Create another item to be queued

const queue = queues.queue(item1, item2); // Create a queue with initial items on the queue
```

Queues can also be created with initial items in a list.

``` javascript
const items = [
  {id: 1, type: "item", body: {...}},
  {id: 2, type: "item", body: {...}}
]; // Create items for the queue in a list

const queue = queues.queue(items); // Create a queue with intial items in a list
```

Queues can be creaded with initial items supplied distinctly or as items in a list in a single constructor.

``` javascript
const item1 = {id: 1, type: "item", body: {...}} // Create an item to be queued
const item2 = {id: 2, type: "item", body: {...}} // Create another item to be queued
const items = [
  {id: 1, type: "item", body: {...}},
  {id: 2, type: "item", body: {...}}
]; // Create items for the queue in a list

const queue = queues.queue(item1, items, items2); // Create a queue with some intial items

```

#### Submitting Items To A Queue

Queues can accept items before anyting is configured to read items from the queue.
Items submitted to the queue are queued until the process reading the queue is ready to process the submitted
item.

Queues implement an `accept` method to submit items to the queue.

``` javascript
queue.accept({id: 1, type: "item", body: {...}}); // Submit an item to the queue
```

#### Reading Items On A Queue

Each item in a queue is processed separately in the sequence they were accepted onto the queue.

Queues offer several methods for dealing with items on the queue.

1. `next()`
1. `size()`
1. `queued()`
1. `shift()`
1. `flush()`

##### Next

The `next()` method offered by a queue returns a Promise which resolves to the next item in the queue when
it is available.

Queued items can only be resolved by a single Promise. Therefore calling `next()` before the Promise for
the previous item in the queue has resolved will cause the Promise returned by the first call to `next()` to
never resolve.

Calls to `next()` always return a Promise for the next item in the queue. Consequently calling next before
the next time in the queue is available will replace the resolve method in the queue with the resolve method

``` javascript
const QueuedItemHandler = ({queue}) => { // Create a React component to process items on the queue

  const [item, setItem] = useState(undefined); // Ceate a state to hold the current item off the queue
  
  if (item === undefined) { // If there is no current item 
    queue.next().then(setItem); // Get a Promise for the next item on the queue and when it resolves set
                                // the state to the item read from the queue
  }
  
  return <div>
    {item && <ItemRenderer item={item} onClose={() => setItem(undefined)} />}
    {!item && <p>Please wait for an item to arrive on the queue!</p>
  </div>; // If an item has been read from the queue show the item. Once the item is finished with the 
          // curent item state is set to undefined causing the component to rerender and get a Promise for
          // the next item on the queue.
  
};
```

Using the `next()` method of a queue as above guarantees that each item in the queue will be processed one at a 
time and in the same sequence which the items were accepted on to the queue.

Because the `next()` method returns a Promise is it safe to call the `next()` method even when there is nothing on
the queue. The promise will resolve to the next item in the queue when an iten is accepted onto the queue.

##### Size

The `size()` method returns the number of items currently waiting on the queue

``` javascript
const queue = queues.queue("A", "B", "C", "D"); // Createa a queue with 4 initial items

console.log(queues.size()) // Logs 4
```

##### Queued

The `queued()` method returns true if there are items on the queue to read.

``` javascript
const queue = queues.queue(); // Create an item with no initially queued items

console.log(queue.queued()); // Logs false - there a no items currently on the queue;
```

``` javascript
const queue = queues.queue("A", "B"); // Create a queue with 2 initial items

consoloe.log(queue.queued()); // Logs true - there are items currently on the queue

```

##### Shift

The `shift()` method removes the next itme off the queue and returns it. If there are no items on the queue
the `shift()` method returns `undefined`

``` javascript
while (queue.queued()) { // loop over all the items in the queue
  const item = queue.shift(); // Remove the next item from the queue
  
  ... // Do something with the next item on the queue

}
```

##### Flush

The `flush()` method returns all the items currently on the queue and clears the queue.

If there are no items on the queue the `shift()` method returns an emply list.

``` javascript
if (queue.queued()) {
  const items = queue.flush();
  
  ... // Do something with all the items that were on the queue
  
}
```

















