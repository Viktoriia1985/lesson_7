// - Створити довільний елемент с id = text. використовуючи JavaScript, зробіть так,
// щоб при кліку на кнопку зникав елемент с id="text".

// const element = document.getElementById('text');
//
// element.onclick = (event) => {
//     element.hidden = true;
//     console.log('hidden element');  // захотелось и console задействовать:)
// }
//                         OR
// text.onclick = (event) => {
//     text.hidden = true;
//     console.log('hidden element');
// }


//     - Створіть кнопку, при кліку на яку, вона буде приховувати сама себе.
//
// const btn = document.getElementById('btn');
//
// btn.onclick = (event) => {
//     btn.hidden = true;
// }


//   - Створити інпут який приймає вік людини та кнопку яка підтверджує дію.
//     При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи менше він
//     ніж 18, та повідомити про це користувача
//
//
// const input = document.getElementById('input');
// const btn2 = document.getElementById('btn2');
//
// btn2.onclick = (event) => {
//     if (+input.value < 18) {
//         confirm('Ти ще неповнолітній')
//     }
//         confirm('Замовляй!')
// };
//                        OR
// btn2.onclick = (event) => {
//     const event1 = (+input.value < 18) ? 'Ти ще неповнолітній' : 'Ти вже повнолітній'
//     confirm(event1)
// };


// - Створіть меню, яке розгортається/згортається при кліку
//
// const menu = document.getElementById('menu');
// const btn2 = document.getElementById('btn2');
//
// btn2.onclick = (event) => {
//     menu.style.display = 'none'
// };


// - Створіть список коментарів , приклад об'єкту коментаря - {title : 'lorem',
// body:'lorem ipsum dolo sit ameti'}.
// Вивести список коментарів в документ, кожний в своєму блоці.
//
//
// const comments = [
//     {
//         "postId": 1,
//         "id": 1,
//         "name": "id labore ex et quam laborum",
//         "email": "Eliseo@gardner.biz",
//         "body": "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium"
//     },
//     {
//         "postId": 1,
//         "id": 2,
//         "name": "quo vero reiciendis velit similique earum",
//         "email": "Jayne_Kuhic@sydney.com",
//         "body": "est natus enim nihil est dolore omnis voluptatem numquam\net omnis occaecati quod ullam at\nvoluptatem error expedita pariatur\nnihil sint nostrum voluptatem reiciendis et"
//     },
//     {
//         "postId": 1,
//         "id": 3,
//         "name": "odio adipisci rerum aut animi",
//         "email": "Nikita@garfield.biz",
//         "body": "quia molestiae reprehenderit quasi aspernatur\naut expedita occaecati aliquam eveniet laudantium\nomnis quibusdam delectus saepe quia accusamus maiores nam est\ncum et ducimus et vero voluptates excepturi deleniti ratione"
//     },
//     {
//         "postId": 1,
//         "id": 4,
//         "name": "alias odio sit",
//         "email": "Lew@alysha.tv",
//         "body": "non et atque\noccaecati deserunt quas accusantium unde odit nobis qui voluptatem\nquia voluptas consequuntur itaque dolor\net qui rerum deleniti ut occaecati"
//     },
//     {
//         "postId": 1,
//         "id": 5,
//         "name": "vero eaque aliquid doloribus et culpa",
//         "email": "Hayden@althea.biz",
//         "body": "harum non quasi et ratione\ntempore iure ex voluptates in ratione\nharum architecto fugit inventore cupiditate\nvoluptates magni quo et"
//     }]
//
// const rootElement = document.getElementById('root');
// comments.forEach(item => {
//     const header = document.createElement('h1');
//     const body = document.createElement('p');
//     const div = document.createElement('div');
//
//     body.innerHTML = item.body;
//     header.innerHTML = item.name;
//
//     div.appendChild(header);
//     div.appendChild(body);
//
//     rootElement.appendChild(div);
// })


// Додайте кожному коментарю по кнопці для згортання його body.
//
//
// const comments = [
//     {
//         "postId": 1,
//         "id": 1,
//         "name": "id labore ex et quam laborum",
//         "email": "Eliseo@gardner.biz",
//         "body": "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium"
//     },
//     {
//         "postId": 1,
//         "id": 2,
//         "name": "quo vero reiciendis velit similique earum",
//         "email": "Jayne_Kuhic@sydney.com",
//         "body": "est natus enim nihil est dolore omnis voluptatem numquam\net omnis occaecati quod ullam at\nvoluptatem error expedita pariatur\nnihil sint nostrum voluptatem reiciendis et"
//     },
//     {
//         "postId": 1,
//         "id": 3,
//         "name": "odio adipisci rerum aut animi",
//         "email": "Nikita@garfield.biz",
//         "body": "quia molestiae reprehenderit quasi aspernatur\naut expedita occaecati aliquam eveniet laudantium\nomnis quibusdam delectus saepe quia accusamus maiores nam est\ncum et ducimus et vero voluptates excepturi deleniti ratione"
//     },
//     {
//         "postId": 1,
//         "id": 4,
//         "name": "alias odio sit",
//         "email": "Lew@alysha.tv",
//         "body": "non et atque\noccaecati deserunt quas accusantium unde odit nobis qui voluptatem\nquia voluptas consequuntur itaque dolor\net qui rerum deleniti ut occaecati"
//     },
//     {
//         "postId": 1,
//         "id": 5,
//         "name": "vero eaque aliquid doloribus et culpa",
//         "email": "Hayden@althea.biz",
//         "body": "harum non quasi et ratione\ntempore iure ex voluptates in ratione\nharum architecto fugit inventore cupiditate\nvoluptates magni quo et"
//     }]
//
//
// const rootElement = document.getElementById('root');
// comments.forEach(item => {
//     const header = document.createElement('h1');
//     const body = document.createElement('p');
//     const div = document.createElement('div');
//     const button = document.createElement('button');
//
//     button.innerText = 'Hidden Comment';
//     button.onclick = () =>  {
//         body.hidden = !body.hidden;
//     }
//
//
//
//     body.innerHTML = item.body;
//     header.innerHTML = item.name;
//
//     div.appendChild(header);
//     div.appendChild(body);
//     div.appendChild(button);
//
//     rootElement.appendChild(div)
// });


// - Створити 2 форми  по 2 інпути в кожній. створити кнопку при кліку на яку зчитується
// та виводиться на консоль інформація з цих 2х форм.
//  Кнопка повинна лежати за межами форм (Щоб уникнути  перезавантаження сторінки)
// Доступ до інпутів через Forms API. Отже дайте формі та інпутам всі необхідні атрибути.
//
// const btn1 = document.getElementById('btn1');
// btn1.onclick = (ev) => {
//     const myForms = document.forms;
//     for (let item of myForms) {
//         for (let input of item) {
//             console.log(input.value);
//         }
//     }
// }


// - Створити функцію, яка генерує таблицю.
//     Перший аргумент визначає кількість строк.
//     Другий параметр визначає кількість ячейок в кожній строці.
//     Третій параметр визначає елемент в який потрібно таблицю додати.
//
//
// const rootElement = document.getElementById('root');
//
// const createTable = (str, columns, targetTagID) => {
//
//     const target = document.getElementById(targetTagID);
//     const table = document.createElement('table');
//     for (let i = 0; i < str; i++) {
//         const tr = document.createElement('tr');
//         for (let j = 0; j < columns; j++) {
//             const td = document.createElement('td');
//             td.innerText = `${i} : ${j}`
//             tr.appendChild(td);
//         }
//         table.appendChild(tr);
//     }
//     target.appendChild(table)
// };
//
// createTable(5, 8, 'root')


// - Напишіть «Карусель» – стрічку зображень, яку можна гортати вліво-вправо
// нажаттям на стрілочки.
//
// const arrayOfJacks = [
//     {
//         alt: 'jack1',
//         url: './jack1.jpg'
//     },
//     {
//         alt: 'jack2',
//         url: './jack2.jpg'
//     },
//     {
//         alt: 'jack3',
//         url: './jack3.jpg'
//     },
// ];
//
//
// const btnFirst = document.getElementById('btnFirst');
// const btnSecond = document.getElementById('btnSecond');
// const imgBox = document.getElementById('imgBox');
//
// let currentIndex = 0;
//
// imgBox.style.width = '550px';
//
// btnFirst.onclick = () => {
//     if(currentIndex - 1 < 0) {
//         currentIndex = arrayOfJacks.length-1;
//     }else {
//         currentIndex = currentIndex - 1;
//     }
// // imgBox.src = arrayOfJacks[currentIndex].url
// imgBox.alt = arrayOfJacks[currentIndex].alt
//     imgBox.setAttribute('src', arrayOfJacks[currentIndex].url)
// }
//
// btnSecond.onclick = () => {
//     if(currentIndex + 1 > arrayOfJacks.length-1) {
//         currentIndex = 0;
//     }else {
//         currentIndex = currentIndex + 1;
//     }
//     // imgBox.src = arrayOfJacks[currentIndex].url
//     imgBox.alt = arrayOfJacks[currentIndex].alt
//     imgBox.setAttribute('src', arrayOfJacks[currentIndex].url)
// }


/////////////////////////////////////////////////////////////////////////////////////////////////////////
//     ______________________________________________________________________________________________________________________________________________________
// РОБОТА В АУДИТОРІЇ
// ______________________________________________________________________________________________________________________________________________________
//////////////////////////////////////////////////////////////////////////////////////////////////////////

// - Сворити масив нецензурних слів.
//     Сворити інпут текстового типу.
//     Якщо людина вводить слово і воно міститься в масиві нецензурних слів кинути алерт
//     з попередженням. Перевірку робити при натисканні на кнопку
//
// const input1 = document.getElementById('input1');
// const btn1 = document.getElementById('btn1');
// const badWords = ['badword1', 'badword2', 'badword3', 'badword4', 'badword5']
//
// btn1.onclick = ev => {
//     const text = input1.value;
//
//     console.log(text);
//     const word = badWords.includes(text);
//     if (word) {
//         alert('Ви щойно промовили погане слово...')
//     } else {
//         alert('це слово не є нецензурним...')
//     }
// }


// - Сворити масив нецензцрних слів.
//     Сворити інпут текстового типу.
//     Потрібно перевіряти чи не містить ціле речення в собі погані слова.
//     Кинути алерт з попередженням у випадку якщо містить.
//     Перевірку робити при натисканні на кнопку
//
//
// const input1 = document.getElementById('input1');
// const btn1 = document.getElementById('btn1');
// const badWords = ['badword1', 'badword2', 'badword3', 'badword4', 'badword5']
//
// btn1.onclick = ev => {
//     const texts = input1.value.split(' ');
//
//     console.log(texts);
//     let flag = false;
//     texts.forEach(word => {
//         flag = badWords.includes(word);
//     })
//     if (flag) {
//         alert("this is a bad word");
//     }
//         alert('this is a good word');
//     {
//     }
// }


// -- Створити скрипт, котрий бере зчитує на сторінці (rules.html) текст і робить збоку меню-зміст
// по всіх заголовках які є в тексті. При кліку на пункт заголовку ви маєте відправлятись
// до цього пункту в тексті
//
// const arrayH2 = document.getElementsByTagName('h2');
// const content = document.getElementById('content');
// const wrap = document.getElementById('wrap');
// const ul = document.createElement('ul');
//
// for (let i = 0; i < arrayH2.length; i++) {
//     const li = document.createElement('li');
//     const a = document.createElement('a');
//     let ankor = 'ankor'+i;
//     a.href = '#'+ankor;
//     arrayH2[i].setAttribute('id', ankor);
//     a.innerHTML = arrayH2[i].innerText;
//     li.appendChild(a);
//     ul.appendChild(li);
// }
// content.appendChild(ul);
// content.style.width = '40%';
// wrap.style.width = '60%';
// content.style.float = 'left';
// wrap.style.float = 'left';


// -- Взяти масив юзерів
// Створити три чекбокси. Кожний з них активує фільтр для вищевказаного масиву. Фільтри можуть працювати як разом так і окремо.
// 1й - відфільтровує юзерів зі статусом false (залишає зі статусом false)
// 2й - залишає старших 29 років включно
// 3й - залишає тих в кого місто Київ
// Дані виводить в документ
//
// const usersWithAddress = [
//     {id: 9, name: 'vasya', age: 31, isMarried: false, address: {city: 'Kyiv', street: 'Gongadze', number: 16}},
//     {id: 2, name: 'petya', age: 30, isMarried: true, address: {city: 'Rivne', street: 'Zelena', number: 1}},
//     {id: 4, name: 'kolya', age: 29, isMarried: true, address: {city: 'Lviv', street: 'Pasichna', number: 121}},
//     {id: 3, name: 'olya', age: 28, isMarried: false, address: {city: 'Rivne', street: 'Shevchenko', number: 90}},
//     {id: 8, name: 'max', age: 30, isMarried: true, address: {city: 'Lviv', street: 'Kriva Lipa', number: 115}},
//     {id: 6, name: 'anya', age: 31, isMarried: false, address: {city: 'Lviv', street: 'Shevchenko', number: 2}},
//     {id: 10, name: 'oleg', age: 28, isMarried: false, address: {city: 'Kyiv', street: 'Centralna', number: 22}},
//     {id: 5, name: 'andrey', age: 29, isMarried: true, address: {city: 'Lviv', street: 'Gorodotska', number: 43}},
//     {id: 1, name: 'masha', age: 30, isMarried: true, address: {city: 'Kyiv', street: 'Peremogi', number: 12}},
//     {id: 7, name: 'olya', age: 31, isMarried: false, address: {city: 'Lviv', street: 'Naukova', number: 16}},
//     {id: 11, name: 'max', age: 31, isMarried: true, address: {city: 'Rivne', street: 'Ivana Franka', number: 121}}
// ];
//
// const content = document.getElementById('content');
// const userDiv = document.createElement('div');
// userDiv.className = 'user';
// userDiv.appendChild(renderContent(usersWithAddress));
//
// const input1 = document.createElement('input');
// const input2 = document.createElement('input');
// const input3 = document.createElement('input');
//
// const label1 = document.createElement('label');
// const label2 = document.createElement('label');
// const label3 = document.createElement('label');
//
// const button = document.createElement('button');
//
// label1.innerHTML = 'зі статусом false'
// label2.innerHTML = 'старших 29 років включно'
// label3.innerHTML = 'тих в кого місто Київ'
//
// button.innerText = 'Filler On'
//
// input1.type = 'checkbox';
// input2.type = 'checkbox';
// input3.type = 'checkbox';
//
// content.appendChild(userDiv);
//
// content.appendChild(label1);
// content.appendChild(input1);
// content.appendChild(label2);
// content.appendChild(input2);
// content.appendChild(label3);
// content.appendChild(input3);
//
// content.appendChild(button);
//
// button.onclick = () => {
//     let myArray = JSON.parse(JSON.stringify(usersWithAddress))
//
//     if (input1.checked) myArray = myArray.filter(value => !value.isMarried);
//     if (input2.checked) myArray = myArray.filter(value => value.age >= 29);
//     if (input3.checked) myArray = myArray.filter(value => value.address.city === 'Kyiv');
//
//     userDiv.innerHTML = '';
//     userDiv.appendChild(renderContent(myArray));
// }
//
//
// function renderContent(array) {
//     const main = document.createElement('div');
//     array.forEach(item => {
//         const div = document.createElement('div');
//         div.innerHTML = JSON.stringify(item);
//         main.appendChild(div);
//
//     })
//     return main;
// }
//
//
















