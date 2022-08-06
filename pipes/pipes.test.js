let pipe = require("./pipes.js").pipe;
let cachingPipe = require("./pipes.js").cachingPipe;

describe("pipe", () => {
  
  it("returns an object with an accept function attribute", () => {
    const sut = pipe();
    expect(sut.accept).toBeDefined();
    expect(sut.accept instanceof Function).toBeTruthy();
  });
  
  it("returns an object with a setConsumer function attribute", () => {
    const sut = pipe();
    expect(sut.setConsumer).toBeDefined();
    expect(sut.setConsumer instanceof Function).toBeTruthy();
  });
  
  it("returns an object with an undefined consumer attribute when called without a consumer function", () => {
    const sut = pipe();
    expect(sut.consumer).toBeUndefined();
  });
  
  it("returns an object with a consumer attribute when called with a consumer function", () => {
    const consumer = (item) => {};
    const sut = pipe(consumer);
    expect(sut.consumer).toBeDefined();
    expect(sut.consumer).toEqual(consumer);
  });
  
  it("throws an Error if the given consumer is not a Function", () => {
    expect(() => {
      sut = pipe("XXX");
    }).toThrow(TypeError);
  });

  it("passes items submitted to accept to the given consumer", () => {
    const items = [];
    const consumer = (item) => {
      items.push(item);
    }
    sut = pipe(consumer);
    sut.accept("THIS");
    expect(items).toContain("THIS");
  });

  it("sets the consumer attribute on setConsumer", () => {
    const items = [];
    const consumer = (item) => {
      items.push(item);
    }
    sut = pipe();
    sut.setConsumer(consumer);
    expect(sut.consumer).toEqual(consumer);
  });

  it("passes items submitted to accept to the consumer supplied to setConsumer", () => {
    const items = [];
    const consumer = (item) => {
      items.push(item);
    }
    sut = pipe();
    sut.setConsumer(consumer);
    sut.accept("THIS");
    expect(items).toContain("THIS");
  });

  it("throws an Error if the consumer  supplied to setConsumer is not a Function", () => {
    expect(() => {
      sut = pipe();
      sut.setConsumer("XXX");
    }).toThrow(TypeError);
  });

});

describe("cachingPipe", () => {
  
  it("returns an object with an accept function attribute", () => {
    const sut = cachingPipe();
    expect(sut.accept).toBeDefined();
    expect(sut.accept instanceof Function).toBeTruthy();    
  });
  
  it("returns an object with a setConsumer function attribute", () => {
    const sut = cachingPipe();
    expect(sut.setConsumer).toBeDefined();
    expect(sut.setConsumer instanceof Function).toBeTruthy();    
  });
  
  it("returns an object with an undefined consumer attribute when called without a consumer function", () => {
    const sut = cachingPipe();
    expect(sut.consumer).toBeUndefined();
   });
  
  it("returns an object with a consumer attribute when called with a consumer function", () => {
    const consumer = (item) => {};
    const sut = cachingPipe(consumer);
    expect(sut.consumer).toBeDefined();
    expect(sut.consumer).toEqual(consumer);
  });

  it("throws an Error if the given consumer is not a Function", () => {
    expect(() => {
      sut = cachingPipe("XXX");
    }).toThrow(TypeError);
  });

  it("sets the consumer attribute on setConsumer", () => {
    const items = [];
    const consumer = (item) => {
      items.push(item);
    }
    sut = cachingPipe();
    sut.setConsumer(consumer);
    expect(sut.consumer).toEqual(consumer);
  });

  it("passes items submitted to accept to the given consumer", () => {
    const items = [];
    const consumer = (item) => {
      items.push(item);
    }
    sut = cachingPipe(consumer);
    sut.accept("THIS");
    expect(items).toContain("THIS");
  });

  it("passes items submitted to accept to the consumer supplied to setConsumer", () => {
    const items = [];
    const consumer = (item) => {
      items.push(item);
    }
    sut = cachingPipe();
    sut.setConsumer(consumer);
    sut.accept("THIS");
    expect(items).toContain("THIS");
  });

  it("throws an Error if the consumer  supplied to setConsumer is not a Function", () => {
    expect(() => {
      sut = cachingPipe();
      sut.setConsumer("XXX");
    }).toThrow(TypeError);
  });

  it("accepts items before it has a consumer then submits them to the consumer when supplied", () => {
    const items = [];
    const consumer = (item) => {
      items.push(item);
    }
    sut = cachingPipe();
    sut.accept("THIS");
    expect(items).toEqual([]);
    sut.setConsumer(consumer);
    expect(items).toContain("THIS");
 });

});