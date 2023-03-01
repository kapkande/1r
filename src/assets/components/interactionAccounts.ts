import DataAccount from './data/DataAccount';
import AccountData1 from './data/AccountData';

const interactionAccounts = {
  rootLinck: 'https://zany-cyan-chameleon-sock.cyclic.app',
  getName: async (id:string) => {
    const response = await fetch(`${interactionAccounts.rootLinck}/accounts/${id}`);
    const data = await response.json();console.log(data.name);
    return data.name;
  },
  getAcount: async (nameFromInput: string, passwordFromInput: string) => {
    const response = await fetch(`${interactionAccounts.rootLinck}/accounts`);
    const data = await response.json();
    let id = 0;

    data.forEach((account: DataAccount) => {
      if (account.name === nameFromInput && account.password === passwordFromInput) {
        id = account.id;
      }
    });
    return id;
  },
  getGames: async (id: number) => {
    const response = await fetch(`${interactionAccounts.rootLinck}/games/${id}`);
    return response.json();
  },
  createAcount: (async (data: AccountData1) => {
    const checkAvailability = await interactionAccounts.checkAvailability(data.name);
    if (checkAvailability) { return; }
    const response = await fetch(`${interactionAccounts.rootLinck}/accounts`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    return await response.json();
  }),
  checkAvailability: async (name: string) => {
    const response = await fetch(`${interactionAccounts.rootLinck}/accountsList`);
    const object = await response.json();
    for (const kay in object) {
      if (name === kay) {
        return true;
      }
    }
    object[name] = name;
    console.log(object);
    const response1 = await fetch(`${interactionAccounts.rootLinck}/accountsList`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(object),
    });
    return false;
  },
  createGameBlock: (async (id: number) => {
    console.log(1);
    const response = await fetch(`${interactionAccounts.rootLinck}/games`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id,
        'item-1': 'nameGame=machUp%2520Back&title=Match%2520Up&arr=11%2C1%2C12%2C2%2C13%2C3',
        'item-2': 'nameGame=sticks%2520Back&title=Sticks&arr=Look%20forward%20to|C%20нетерпением%20ждать%20чего-то@Carry%20on|Продолжать%20заниматься%20чем-то@Pass%20out|Терять%20сознание@Run%20out|Закончиться@Stand%20by|Приготовиться@Work%20out|Тренероваться@Watch%20out|Быть%20начеку@Give%20up|Сдаваться@Catch%20up|Наверстать@Pick%20out|Выбирать',
      }),
    });
    return response.json();
  }),
  getGameBlock: async (id:number) => {
    const response = await fetch(`${interactionAccounts.rootLinck}/games/${id}`);
    return response.json();
  },
  getAccountsList: async () => {
    const response = await fetch(`${interactionAccounts.rootLinck}/accountsList`);
    return response.json();
  },
  addGameBlock: (async (game:string, id: number) => {
    const getGameBlock = await interactionAccounts.getGameBlock(id);

    const getLastIndex = await interactionAccounts.getGameBlock(id).then((object) => +Object.keys(object).reverse()[0].split('-')[1] + 1);

    const response = await fetch(`${interactionAccounts.rootLinck}/games/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ ...getGameBlock, ...{ [`item-${getLastIndex}`]: game } }),
    });
    return response.json();
  }),
  deleteItemInGameBlock: async (data:string, id:number) => {
    const getGameBlock = await interactionAccounts.getGameBlock(id);
    delete getGameBlock[data];
    const response = await fetch(`${interactionAccounts.rootLinck}/games/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(getGameBlock),
    });
    return response.json();
  },
};

export default interactionAccounts;
