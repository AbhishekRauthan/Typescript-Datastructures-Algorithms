import Set from "../Set";

describe("Testing basic Set properties", function () {
  let set: Set<number>;
  beforeAll(() => {
    set = new Set<number>();
    set.add(5);
    set.add(4);
    set.add(3);
    set.add(2);
    set.add(1);
  });

  it("check if 'has' property is working properly", function () {
    expect(set.has(5)).toBe(true);
    expect(set.has(6)).toBe(false);
  });
  it("check if 'value' property is working properly", function () {
    expect(set.values()).toEqual([5, 4, 3, 2, 1]);
    expect(set.values()).not.toEqual([1, 2, 3, 4, 5]);
  });
  it("see if 'size' is working", function () {
    expect(set.size()).toBe(5);
    expect(set.size()).not.toBe(6);
  });
});

describe("Testing Union, Intersection, etc of Set", () => {
  let set1: Set<number>, set2: Set<number>;
  beforeAll(() => {
    set1 = new Set<number>();
    set1.add(5);
    set1.add(4);
    set1.add(3);
    set1.add(2);
    set1.add(1);
    set2 = new Set<number>();
    set2.add(6);
    set2.add(7);
    set2.add(8);
    set2.add(9);
    set2.add(10);
  });
  it("Test union", function () {
    let set3 = set1.union(set2);
    expect(set3.size()).toBe(10);
    expect(set3.values()).toEqual([5, 4, 3, 2, 1, 6, 7, 8, 9, 10]);
  });

  it("Test intersection", function () {
    let set3 = set1.intersection(set2);
    expect(set3.size()).toBe(0);
    expect(set3.values()).toEqual([]);
  });
  it("Test difference", function () {
    let set3 = set1.difference(set2);
    expect(set3.size()).toBe(5);
    expect(set3.values()).toEqual([5, 4, 3, 2, 1]);
  });
  it("Test subSet", function () {
    let set3 = set1.isSubsetOf(set2);
    expect(set3).toEqual(false);
  });
});
