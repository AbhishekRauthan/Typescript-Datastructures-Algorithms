type VALUE<K> = { key: string, value: K }

/**
 * A hash table is a data structure that is used to store keys/value pairs.
 * 
 *  It uses a hash function to compute an index into an array in which an element will be inserted or searched.
 * 
 * Need to specify the type for value in typescript
 */
export default class HashTable<K> {
  private data: VALUE<K>[][];

  /**
 * A hash table is a data structure that is used to store keys/value pairs.
 * 
 *  It uses a hash function to compute an index into an array in which an element will be inserted or searched.
 * 
 * @constructor Initialize Hash Table with certain memory size
 * 
 * @param size numeric value for initializing hash table
 */
  public constructor(size: number) {
    this.data = new Array<VALUE<K>[]>(size);
  }

  /**
   * @private function that helps in getting a hash value
   * @param key string key that will be used for getting a numeric value
   */
  private _hash(key: string) {
    let hash = 0;

    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;
    }

    return hash;
  }

  /**
   * Add key/value pair to the hash table
   * 
   * Time complexity-> O(1)
   * @param key key of type string
   * @param value value of type K
   */
  public set(key: string, value: K) {
    let address = this._hash(key);
    if (!this.data[address]) {
      this.data[address] = [];
    }
    this.data[address].push({ key, value });
  }

  /**
   * get the value of the key/value pair in hash table
   * @param key of type string; used to get value from hash table 
   * 
   * @returns value of type K if found else false
   */
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

  /**
   * @returns all the keys of hash table as a string array
   */
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
