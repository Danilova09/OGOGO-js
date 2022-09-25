// 1) Создайте переменные a = 7 и b = 8, выведите на  экран их сумму с помощью диалогового окна 
let a = 7;
let b = 8;
alert(a + b);

// 2) Используя диалоговые окна запросите у пользователя имя, фамилию,  количество отработанных дней за месяц, зарплату за месяц (24 раб. дня) и присвойте эти данные в объект: const worker = {},
let userName = prompt('Введите свое имя');
let surename = prompt('Введите свою фамилию');
let workedPerMonthDays = prompt('Введите количество отработанных дней за месяц');
let salaryPerMonth = prompt('Введите зарплату за месяц');

let worker = {
    name: userName,
    surename,
    workedPerMonthDays,
    salaryPerMonth,
}

console.log(worker);

// 3) Напишите часть кода которая преобразует все полученные данные из задачи №2  в нижний регистр
const workerValues = Object.values(worker);

for (let i = 0; i < workerValues.length; i++) {
    workerValues[i];
    console.log(workerValues.toLocaleString().toLowerCase());
}

// 4) Напишите условную проверку если пользователь не ввел какие-нибудь данные из задачи №2, сообщите ему об ошибке и попросите снова ввести данные которые он пропустил

while (!userName) {
    userName = prompt('Введите свое имя');
    worker.name = userName;
}

while (!surename) {
    surename = prompt('Введите свою фамилию');
    worker.surename = surename;
}

while (!workedPerMonthDays || isNaN(workedPerMonthDays)) {
    while (isNaN(workedPerMonthDays)) {
        alert('Вы ввели не число');
        workedPerMonthDays = prompt('Введите количество отработанных дней за месяц(число)');
        worker.workedPerMonthDays = workedPerMonthDays;
    }
    workedPerMonthDays = prompt('Введите количество отработанных дней за месяц');
    worker.workedPerMonthDays = workedPerMonthDays;
}


while (!salaryPerMonth || isNaN(salaryPerMonth)) {
    while (isNaN(salaryPerMonth)) {
        alert('Вы ввели не число');
        salaryPerMonth = prompt('Введите зарплату за месяц(число)');
        worker.salaryPerMonth = salaryPerMonth;
    }
    salaryPerMonth = prompt('Введите зарплату за месяц');
    worker.salaryPerMonth = salaryPerMonth;
}


// 5) Напишите функцию которая будет высчитывать и выводить на экран заработную плату   пользователя исходя из полученных данных ранее в задаче №2
const getSalary = () => {
    return  worker.workedPerMonthDays / worker.salaryPerMonth;
}
console.log(getSalary());

// 6) Напишите условную проверку которая не даст отработать задачи №4 в случае если пользователя зовут “Андрей, Иван, Айдар”
while (userName === 'Андрей' || userName === 'Иван' || userName === 'Айдар') {
    alert('Имя для ввода запрешено');
    userName = prompt('Введите имя пользователя заново');
    worker.name = userName;
}

console.log(worker);

// 7) Напишите функцию которая возвращает сумму двух полученных чисел
const sumNumbers = (a, b) => {
    return a + b;
}
console.log(sumNumbers(2, 6));

// 8) Напишите функцию которая принимает два параметра: первый-число, второй-степень числа
//  И будет возвращать степень первого числа
const getThePowerOfANumber = (number, power) => {
    return Math.pow(number, power);
}
console.log(getThePowerOfANumber(7, 2));

// 9) Напишите калькулятор, принимайте у пользователя два числа и математический оператор и ввести ответ на экран
const calculate = (num1, num2, operator) => {
    return eval(num1 + operator + num2);
}
console.log(calculate(2, 2, '+'));


