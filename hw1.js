//Вам дана заготовка и результат, который вы должны получить. Ваша задача — написать код, который будет преобразовывать XML в JS-объект и выводить его в консоль.

// XML, который мы будем парсить
const xmlString = ` 
<list>
  <student>
    <name lang="en">
      <first>Ivan</first>
      <second>Ivanov</second>
    </name>
    <age>35</age>
    <prof>teacher</prof>
  </student>
  <student>
    <name lang="ru">
      <first>Петр</first>
      <second>Петров</second>
    </name>
    <age>58</age>
    <prof>driver</prof>
  </student>
</list>
`;

function transformXML(strXML) {
  // Создание экземпляра класса DOMParser. Он позволит нам парсить XML
  let parser = new DOMParser();
  // Парсинг XML
  let xmlDOM = parser.parseFromString(strXML, "text/xml");
  // Получение всех DOM-нод
  let listNode = xmlDOM.querySelector("list");
  let studentsNode = listNode.querySelectorAll("student");
  //Запись данных
  let result = { list: [] };

  studentsNode.forEach((element) => {
    let student = new Object();
    let studentFirstName = element.querySelector("first");
    let studentSecondName = element.querySelector("second");
    let studentAge = element.querySelector("age");
    let studentProf = element.querySelector("prof");
    let nameNode = element.querySelector("name")
    let studentLang = nameNode.getAttribute("lang");
    student.name = studentSecondName.textContent + ' ' + studentFirstName.textContent;
    student.age = Number(studentAge.textContent);
    student.prof = studentProf.textContent;
    student.lang = studentLang;

    result.list.push(student);
  });
  console.log(result);
};
transformXML(xmlString)