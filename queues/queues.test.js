let queue = require("./queues.js").queue;

describe("queue", () => {
  
  it("returns an object with an accept function attribute", () => {
    const sut = queue();
    expect(sut.accept).toBeDefined();
    expect(sut.accept instanceof Function).toBeTruthy();
  });
  
  it("returns an object with a next function attribute", () => {
    const sut = queue();
    expect(sut.next).toBeDefined();
    expect(sut.next instanceof Function).toBeTruthy();
  });
  
  it("returns an object with a size function attribute", () => {
    const sut = queue();
    expect(sut.size).toBeDefined();
    expect(sut.size instanceof Function).toBeTruthy();
  });
  
  it("returns an object with a queued function attribute", () => {
    const sut = queue();
    expect(sut.queued).toBeDefined();
    expect(sut.queued instanceof Function).toBeTruthy();
  });
  
  it("returns an object with a shift function attribute", () => {
    const sut = queue();
    expect(sut.shift).toBeDefined();
    expect(sut.shift instanceof Function).toBeTruthy();
  });
  
  it("returns an object with a flush function attribute", () => {
    const sut = queue();
    expect(sut.flush).toBeDefined();
    expect(sut.flush instanceof Function).toBeTruthy();
  });
  
  it("returns an object with a setConsumer function attribute", () => {
    const sut = queue();
    expect(sut.setConsumer).toBeDefined();
    expect(sut.setConsumer instanceof Function).toBeTruthy();
  });
  
  it("returns an object with an undefined consumer attribute when called without a consumer function", () => {
    const sut = queue();
    expect(sut.consumer).toBeUndefined();
  });
  
  it("accepts items before a consumer is set", () => {
    const sut = queue();
    sut.accept("THIS");
    expect(sut.items).toContain("THIS");
  });
  
  it("sends the accepted items to the consumer when it is set", () => {
    const items = [];
    const consumer = (item) => {
      items.push(item);
    }
    const sut = queue();
    sut.accept("THIS");
    expect(sut.items).toContain("THIS");
    expect(items).toEqual([]);
    sut.setConsumer(consumer);
    expect(items).toContain("THIS");
  });
  
  it("returns a Promise when next is called", () => {
    const sut = queue();
    expect(sut.next()).toBeInstanceOf(Promise);
  });
  
  it("The returned Promise resolves with the accepted item", () => {
    const sut = queue();
    sut.next().then((item) => {expect(item).toEqual("THIS")});
    sut.accept("THIS");
    sut.accept("THAT");
    sut.next().then((item) => {expect(item).toEqual("THAT")});
  });
  
  it("The size function returns the number of items in the queue", () => {
    const sut = queue();
    expect(sut.size()).toEqual(0);
    sut.accept("THIS");
    expect(sut.size()).toEqual(1);
    sut.accept("THAT");
    expect(sut.size()).toEqual(2);
  });
  
  it("The shift function returns undefiend if the queue is empty", () => {
    const sut = queue();
    expect(sut.shift()).toBeUndefined();
  });
  
  it("The shift function returns the last item in the queue if the queue is not empty and removes it from the queue", () => {
    const sut = queue();
    sut.accept("THIS");
    sut.accept("THAT");
    expect(sut.shift()).toEqual("THIS");
    expect(sut.size()).toEqual(1);
    expect(sut.items).not.toContain("THIS");
  });
  
  it("The queued function returns false when the queue is empty", () => {
    const sut = queue();
    expect(sut.queued()).toBeFalsy();
  });
  
  it("The queued function returns true when the queue is not empty", () => {
    const sut = queue();
    sut.accept("THIS");
    expect(sut.queued()).toBeTruthy();
  });
  
  it("The flush method returns all the items in the queue as an array and empties the queue", () => {
    const sut = queue();
    sut.accept("THIS");
    sut.accept("THAT");
    expect(sut.flush()).toEqual(["THIS", "THAT"]);
    expect(sut.size()).toEqual(0);
  });
  
  it("Adds items given to the constuctor to the queue", () => {
    const sut = queue("THIS", "THAT");
    expect(sut.flush()).toEqual(["THIS", "THAT"]);
    expect(sut.size()).toEqual(0);
  });
  
  it("Adds items in arrays given to the constuctor individually to the queue", () => {
    const sut = queue("THIS", ["A", "B"], "THAT");
    expect(sut.flush()).toEqual(["THIS", "A", "B", "THAT"]);
    expect(sut.size()).toEqual(0);
  });
  
});

