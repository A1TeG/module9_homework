//Вам дана заготовка и результат, который вы должны получить. Ваша задача — написать код, который будет преобразовывать JSON в JS-объект и выводить его в консоль.

// JSON, который мы будем парсить
const jsonString = `{
  "list": [
   {
    "name": "Petr",
    "age": "20",
    "prof": "mechanic"
   },
   {
    "name": "Vova",
    "age": "60",
    "prof": "pilot"
   }
  ]
 }`;

// Запись данных 
function transformJSON(strJSON) {
  // Получение данных
  let data = JSON.parse(strJSON)
  let list = data.list;

  let result = { list: [] };
  let objList = new Object();

  list.forEach(function (element) {
    objList = element;

    result.list.push(objList);
  });
  console.log(result);
};
transformJSON(jsonString)