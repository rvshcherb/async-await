import './styles/scss/main.scss';

import GameSavingLoader from './GameSavingLoader';

const obj = (async () => {
  try {
    const loader = GameSavingLoader.load();
    return JSON.parse(await loader);
  } catch {
    throw new Error();
  }
})();

console.log(obj);
