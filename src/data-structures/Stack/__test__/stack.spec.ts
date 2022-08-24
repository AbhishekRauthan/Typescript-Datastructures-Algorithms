import Stack from "../Stack";

describe("Testing number Stack Data structure", () => {
  let stack: Stack<number>;
  beforeAll(() => {
    stack = new Stack<number>(15);
    stack.push(1);
    stack.push(2);
    stack.push(3);
    stack.push(4);
    stack.push(5);
    stack.push(6);
  });

  it("Testing isEmpty and isFull", function () {
    expect(stack.isEmpty()).toBe(false);
    expect(stack.isFull()).toBe(false);
  });

  it("Testing getStack", function () {
    expect(stack.getStack()).toEqual([1, 2, 3, 4, 5, 6]);
  });

  it("Testing pop", function () {
    expect(stack.pop()).toBe(6);
    expect(stack.pop()).toBe(5);
    expect(stack.pop()).toBe(4);
    expect(stack.pop()).not.toBe(6);
  });

  it("Testing top", function () {
    expect(stack.top()).toEqual(2);
  });
});
