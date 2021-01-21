type VALUE<K> = { key: string, value: K }

export default class HashTable<K> {
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
    this.data[address].push({ key, value })
    // console.log(this.data[address]);
  }

  public get(key: string) {
    let address = this._hash(key);
    const currentBucket = this.data[address];
    for (const bucket of currentBucket) {
      if (bucket.key === key) {
        return bucket.value
      }
    }
    return false;
  }

  public keys() {
    const keys: string[] = [];
    for (const bucket of this.data) {
      if (bucket) {
        for (const ind of bucket) {
          keys.push(ind.key);
        }
      }
    }
    return keys;
  }
}
