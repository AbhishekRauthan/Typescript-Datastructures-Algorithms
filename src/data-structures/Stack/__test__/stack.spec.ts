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
});
