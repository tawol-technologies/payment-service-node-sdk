import {randomUUID} from 'crypto';

export default class {
  static isNumeric(char: string): boolean {
    return /\d/.test(char);
  }

  static snakeToCamel = (str: string) => str.replace(/(_\w)/g, (k) => (k[1].toUpperCase()));

  static camelToSnake = (str: string) => str.replace(/[A-Z]/g, (k) => `_${k.toLowerCase()}`);

  static snakeOBJToCamelCase(load: Record<string, any>) {
    if (!load) return load;
    return Object.entries(load).reduce((data: Record<string, any>, [key, val]) => {
      if (typeof val === 'object' && val !== null && !Array.isArray(val)) {
        val = this.snakeOBJToCamelCase(val);
      }
      data[this.snakeToCamel(key)] = val;
      return data;
    },
    {});
  }

  static camelOBJToSnakeCase(load: Record<string, any>) {
    if (!load) return load;
    return Object.entries(load).reduce((data: Record<string, any>, [key, val]) => {
      if (typeof val === 'object' && val !== null && !Array.isArray(val)) {
        val = this.camelOBJToSnakeCase(val);
      }
      data[this.camelToSnake(key)] = val;
      return data;
    },
    {});
  }

  static generateTransactionRef(prefix?: string) {
    return prefix+randomUUID();
  }
}
