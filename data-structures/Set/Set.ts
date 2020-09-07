class Sets<T> {
  private set: T[];

  has(item: T) {
    return (this.set.indexOf(item) !== -1)
  }

  values() {
    return this.set;
  }

  add(item:T) {
    if (!this.has(item)) {
      this.set.push(item);
      return true
    }
    return false
  }

  remove(item:T) {
    if (this.has(item)) {
      const index:number = this.set.indexOf(item);
      this.set.splice(index,1);
      return true
    }
    return false
  }

  size() {
    return this.set.length;
  }

  union(otherSet:Sets<T>) {
    const union = new Sets<T>();
    const firstVals = this.values();
    const secondVals = otherSet.values();
    
  }
}