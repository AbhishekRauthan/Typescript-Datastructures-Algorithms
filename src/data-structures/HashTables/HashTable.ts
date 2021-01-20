type VALUE<K> = [string, K]

class HashTable<K> {
  private data: VALUE<K>[][];
  public constructor(size: number) {
    this.data = new Array<VALUE<K>[]>(size);
  }

  private _hash(key: string) {
    let hash = 0;

    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;
    }

    return hash;
  }

  public set(key: string, value: K) {
    let address = this._hash(key);
    if (!this.data[address]) {
      this.data[address] = [];
    }
    this.data[address].push([key, value])
  }

  public get(key: string) {
    let address = this._hash(key);
    const currentBucket = this.data[address];
    for (const bucket of currentBucket) {
      if (bucket[0] === key) {
        return bucket[1]
      }
    }
    return false;
  }
}
