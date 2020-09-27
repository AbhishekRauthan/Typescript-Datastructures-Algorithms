export default class Sets<T> {
  private set: T[];

  has(item: T) {
    return (this.set.indexOf(item) !== -1)
  }

  values() {
    return this.set;
  }

  add(item: T) {
    if (!this.has(item)) {
      const index: number =this.set.push(item);
      return index
    }
    return false
  }

  remove(item: T) {
    if (this.has(item)) {
      const index: number = this.set.indexOf(item);
      this.set = this.set.splice(index, 1);
      return index
    }
    return false
  }

  size() {
    return this.set.length;
  }

  union(otherSet: Sets<T>) {
    const union = new Sets<T>();
    const firstSet = this.values();
    const secondSet = otherSet.values();
    firstSet.forEach((e) => {
      union.add(e);
    });
    secondSet.forEach((e) => {
      union.add(e);
    });
    return union;
  }

  intersection(otherSet: Sets<T>) {
    const intersection = new Sets<T>();
    const firstSet = this.values();
    firstSet.forEach((e) => {
      if (otherSet.has(e)) {
        intersection.add(e);
      }
    });
    return intersection;
  }

  difference(otherSet: Sets<T>) {
    const difference = new Sets<T>();
    const firstSet = this.values();
    firstSet.forEach((e) => {
      if (!otherSet.has(e)) {
        difference.add(e);
      }
    });
    return difference;
  }

  subset(otherSet: Sets<T>) {
    const firstSet = this.values();
    return firstSet.every((value) => {
      return otherSet.has(value);
    });
  }
}