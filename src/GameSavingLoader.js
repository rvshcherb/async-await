import json from './parser';
import read from './reader';

export default class GameSavingLoader {
  static async load() {
    try {
      const data = read(); // возвращается Promise!
      const result = await data;
      const value = json(await result);
      return value;
    } catch {
      throw new Error('Error');
    }
  }
}
