const jsonServer = require('json-server');
const db = {
  accountsList: { "ExampleName0": "ExampleName0", "ExampleName1": "ExampleName1" },
  accounts: [
    {
      "name": "asd",
      "password": "asd",
      'id': 1,
    },
    {
      "name": "ExampleName1",
      "password": "ExamplePassword1",
      'id': 2,
    },
  ],
  games: [
    {
      "id": 1,
      'item-1': 'nameGame=machUp&title=Match%2520Up%2520Back&arr=11%2C1%2C12%2C2%2C13%2C3',
      'item-2': 'nameGame=sticks&title=Sticks%2520Back&arr=Look%20forward%20to|C%20нетерпением%20ждать%20чего-то@Carry%20on|Продолжать%20заниматься%20чем-то@Pass%20out|Терять%20сознание@Run%20out|Закончиться@Stand%20by|Приготовиться@Work%20out|Тренероваться@Watch%20out|Быть%20начеку@Give%20up|Сдаваться@Catch%20up|Наверстать@Pick%20out|Выбирать',
    },
    {
      "id": 2,
      'item-1': 'nameGame=machUp&title=Match%2520Up%2520Back&arr=11%2C1%2C12%2C2%2C13%2C3',
      'item-2': 'nameGame=sticks&title=Sticks%2520Back&arr=Look%20forward%20to|C%20нетерпением%20ждать%20чего-то@Carry%20on|Продолжать%20заниматься%20чем-то@Pass%20out|Терять%20сознание@Run%20out|Закончиться@Stand%20by|Приготовиться@Work%20out|Тренероваться@Watch%20out|Быть%20начеку@Give%20up|Сдаваться@Catch%20up|Наверстать@Pick%20out|Выбирать',
    },
  ]
};

const server = jsonServer.create();
const router = jsonServer.router(db);
const middlewares = jsonServer.defaults();

const PORT = 3000;
server.use(middlewares);
server.use(router);
server.listen(PORT, () => {
  console.log('Server is running on port', PORT);
});
