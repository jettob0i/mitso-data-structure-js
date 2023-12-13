
/**
 * Реализация Фильтра Блума.
 * Фильтр Блума - это пространственно-эффективная вероятностная структура данных,
 * созданная для проверки наличия элемента в множестве.
 */

module.exports = class BloomFilter {
  /**
   * @param {number} size - размер хранилища.
   * @param {number} hashCount - количество хеш-функций.
   */
  constructor(size, hashCount) {
    this.size = size;
    this.hashCount = hashCount;
    this.storage = this.createStore(size);
  }

  /**
   * Создает хранилище для фильтра.
   * @param {number} size - размер хранилища.
   * @return {Array<boolean>}
   */
  createStore(size) {
    return new Array(size).fill(false);
  }

  /**
   * Добавляет элемент в фильтр.
   * @param {string} item - элемент для добавления.
   */
  insert(item) {
    const hashValues = this.getHashValues(item);
    hashValues.forEach(hash => {
      this.storage[hash] = true;
    });
  }

  /**
   * Проверяет, содержится ли элемент в фильтре.
   * @param {string} item - элемент для проверки.
   * @return {boolean}
   */
  mayContain(item) {
    const hashValues = this.getHashValues(item);
    return hashValues.every(hash => this.storage[hash]);
  }

  /**
   * Выполняет хеширование элемента.
   * @param {string} item - элемент для хеширования.
   * @return {number[]}
   */
  getHashValues(item) {
    // Простое реализация хеш-функций для демонстрации.
    const hash1 = this.hash1(item);
    const hash2 = this.hash2(item);
    const hash3 = this.hash3(item);
    return [hash1, hash2, hash3].map(hash => hash % this.size);
  }

  // Примеры простых хеш-функций
  hash1(item) { /* реализация хеш-функции 1 */ }
  hash2(item) { /* реализация хеш-функции 2 */ }
  hash3(item) { /* реализация хеш-функции 3 */ }
};
const { NotImplementedError } = require("../extensions/index.js"); 
 
class BloomFilter { 
  constructor(size = 99) { 
    this.store = this.createStore(size); 
  } 
 
  insert(item) { 
    const hashValues = this.getHashValues(item); 
    hashValues.forEach((hash) => { 
      this.store.setValue(hash, true); 
    }); 
  } 
 
  mayContain(item) { 
    const hashValues = this.getHashValues(item); 
    return hashValues.every((hash) => this.store.getValue(hash)); 
  } 
 
  createStore(size) { 
    return { 
      store: Array(size).fill(false), 
      getValue: function (index) { 
        return this.store[index]; 
      }, 
      setValue: function (index, value) { 
        this.store[index] = value; 
      }, 
    }; 
  } 
 
  hash(item, seed) { 
    let hash = seed; 
    for (let i = 0; i < item.length; i++) { 
      const char = item.charCodeAt(i); 
      hash = ((hash * 31+char) % 1000000000); 
    } 
    return hash % 100; 
  } 
 
 
  hash1(item) { 
    return (this.hash(item, -1) % 100) + 3; 
  } 
 
  hash2(item) { 
    return this.hash(item, -1) % 100; 
  } 
 
  hash3(item) { 
    return this.hash(item, 0) % 100; 
  } 
 
  getHashValues(item) { 
    return [ 
      this.hash1(item), 
      this.hash2(item), 
      this.hash3(item) 
    ]; 
  } 
} 
 
module.exports = BloomFilter;