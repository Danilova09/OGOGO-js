// 1) ✅ Дан массив с элементами [1, 2, 3, 4, 5]. 	С помощью цикла for выведите все эти элементы на экран. 

const { Router } = require("express");

const array1 = [1, 2, 3, 4, 5];

for (let i = 0; i < array1.length; i++) {
    console.log(array1[i]);
} 

// 2) ✅ Дан массив с элементами [2, 3, 4, 5]. 	С помощью цикла for найдите произведение элементов этого массива.

// const array2 = [2, 3, 4, 5];
// let sum2 = 1;
// for (let i = 0; i < array2.length; i++) {
//     sum2 *= array2[i];
//     console.log(sum2);
// } 

// 3) ✅ Дан объект obj с ключами 'Минск', 'Москва', 'Киев' 	с элементами 'Беларусь', 'Россия', 'Украина'. 	С помощью цикла for-in выведите на экран строки такого формата: 'Минск - это Беларусь.'. 
// const obj = {
// 	'Минск': 'Беларусь',
// 	'Москва': 'Россия',
// 	'Киев': 'Украина'
// };

// for (const capital in obj) {
//     console.log(`${capital} - это ${obj[capital]}`);
// }

// 4) ✅ Выведите столбец чисел от 11 до 33

// for (let i = 11; i <= 33; i++) {
//     console.log(i);
// }

// 5) ✅ Дан объект obj с ключами Коля, Вася, Петя с элементами '200', '300', '400'. С помощью цикла for-in выведите на экран строки такого формата: 'Коля - зарплата 200 долларов.'. 	

// const obj2 = {
//     'Коля': 200,
//     'Вася': 300,
//     'Петя': 400,
// }

// for (const property in obj2) {
//     console.log(`${property} - зарплата ${obj2[property]} долларов.`);
// }

// 6) ✅ Дано число n=1000. Делите его на 2 столько раз, 		пока результат деления не станет меньше 50. 

// let n = 1000;
// while (n > 50) {
//     n = n / 2;
//     console.log(n);
// }

// 7) ✅ Если переменная num равна 10, то выведите 'Верно', иначе выведите 'Неверно'. 
// let num = 10;
// num === 10 ? console.log('Верно') : console.log('Неверно');


// 8) ✅ В переменной min лежит число от 0 до 59. Определите в какую четверть часа попадает это число (в первую, вторую, третью или четвертую). 

// let min = +prompt("Введите число от 0 до 59");
// if (min >= 0 && min <= 14) {
//     console.log("Первая");
// }
// if (min >= 15 && min <= 30) {
//     console.log("Вторая");
// }
// if (min >= 31 && min <= 45) {
//     console.log("Третья");
// }
// if (min >= 46 && min <= 59) {
//     console.log("Четвертая");
// }

// 9) ✅ Переменная lang может принимать 2 значения: 'ru' 'en'. Если она имеет значение 'ru', то в переменную arr запишем массив дней недели на русском языке, 	а если имеет значение 'en' – то на английском. 	Решите задачу через 2 if, через switch-case и через многомерный массив 	без ифов и switch. 
// let array;
// let lang = prompt('Введите ru или en');

// while (lang !== 'ru' && lang !== 'en') {
//     lang = prompt('Введите ru или en');
// }

// if (lang === 'ru') {
//     array =  ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];
//     console.log(array);
// } else if ('en') {
//     array =  ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
//     console.log(array);
// } 

// switch (lang) {
//     case 'ru':
//         array = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];
//         console.log(array);
//         break;
//     case 'en':
//         array = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
//         console.log(array);
//         break;
//     default:
//         console.log('Wrong data');
// }

// lang = {
//     ru: ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'],
//     en: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
// }

// 10) ✅ Если переменная a равна нулю, то выведите 'Верно', иначе выведите 'Неверно'. Проверьте работу скрипта при a, равном 1, 0, -3. 
// let a = Number(prompt('Введите число'));

// a === 0 ? alert('Верно') : alert('Неверно');

// 11) ✅ Если переменная a больше нуля, то выведите 'Верно', иначе выведите 'Неверно'. Проверьте работу скрипта при a, равном 1, 0, -3. 

// let a = Number(prompt('Введите число'));

// a > 0 ? alert('Верно') : alert('Неверно');

// 12) ✅ Если переменная a меньше нуля, то выведите 'Верно', иначе выведите 'Неверно'. Проверьте работу скрипта при a, равном 1, 0, -3.
// let a = Number(prompt('Введите число'));
// a < 0 ? alert('Верно') : alert('Неверно');

// 13) ✅ Если переменная a больше или равна нулю, то выведите 'Верно', иначе выведите 'Неверно'. Проверьте работу скрипта при a, равном 1, 0, -3. 	
// let a = Number(prompt('Введите число'));
// a >= 0 ? alert('Верно') : alert('Неверно');

// 14) ✅ Если переменная a меньше или равна нулю, то выведите 'Верно', иначе выведите 'Неверно'. Проверьте работу скрипта при a, равном 1, 0, -3. 	
// let a = Number(prompt('Введите число'));
// a <= 0 ? alert('Верно') : alert('Неверно');

// 15) ✅ Если переменная a не равна нулю, то выведите 'Верно', иначе выведите 'Неверно'. Проверьте работу скрипта при a, равном 1, 0, -3. 	
// let a = Number(prompt('Введите число'));
// a !== 0 ? alert('Верно') : alert('Неверно');

// 16) ✅ Если переменная a равна 'test', то выведите 'Верно', иначе выведите 'Неверно'. Проверьте работу скрипта при a, равном 'test', 'тест', 3. 	
// let a = Number(prompt('Введите число'));
// a !== 'test' ? alert('Верно') : alert('Неверно');

// 17) ✅ Если переменная a равна '1' и по значению и по типу, то выведите 'Верно', иначе выведите 'Неверно'. Проверьте работу скрипта при a, равном '1', 1, 3. 	

// let a = '1';
// a === 1 ? alert('Верно') : alert('Неверно');