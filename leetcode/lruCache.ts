// 146. LRU Cache

class LRUCache {
  capacity: number;
  map: Map<number, number>;

  constructor(capacity: number) {
    this.capacity = capacity;
    this.map = new Map();
  }

  get(key: number): number {
    const value = this.map.get(key);

    if (value === undefined) return -1;

    this.map.delete(key);
    this.map.set(key, value);

    return value;
  }

  put(key: number, value: number): void {
    if (this.map.size >= this.capacity && !this.map.has(key)) {
      const firstKey = this.map.keys().next().value;
      this.map.delete(firstKey!);
    }
    this.map.delete(key);
    this.map.set(key, value);
  }
}

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
const lruCache = new LRUCache(2);
lruCache.put(1, 1); // cache is {1=1}
lruCache.put(2, 2); // cache is {1=1, 2=2}
console.log(lruCache.get(1)); // return 1
lruCache.put(3, 3); // evicts key 2, cache is {1=1, 3=3}
console.log(lruCache.get(2)); // returns -1 (not found)
lruCache.put(4, 4); // evicts key 1, cache is {4=4, 3=3}
console.log(lruCache.get(1)); // return -1 (not found)
console.log(lruCache.get(3)); // return 3
console.log(lruCache.get(4)); // return 4
