import Queue from "../Queue";

describe("Testing number Stack Data structure", () => {
  let queue: Queue<number>;
  beforeAll(() => {
    queue = new Queue<number>(6);
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);
    queue.enqueue(4);
    queue.enqueue(5);
    queue.enqueue(6);
  });

  it("Testing isEmpty and isFull", function () {
    expect(queue.isEmpty()).toBe(false);
    expect(queue.isFull()).toBe(true);
  });

  it("Testing getQ", function () {
    expect(queue.getQ()).toEqual([1, 2, 3, 4, 5, 6]);
  });

  it("Testing dequeue and enqueue", function () {
    expect(queue.enqueue(7)).toBe(false);
    expect(queue.dequeue()).toBe(1);
  });
});
