const ukraine = { tax: 0.195, middleSalary: 1789, vacancies: 11476 };
const latvia = { tax: 0.25, middleSalary: 1586, vacancies: 3921 };
const litva = { tax: 0.15, middleSalary: 1509, vacancies: 1114 };

/* 1. Створіть функцію getMyTaxes.call(country, salary) -> number; – 
яка рахує скільки податків ви заплатите як IT-спеціаліст в якійсь з країн. 
Функція повинна викликатись через call та працювати з даними через this*/

function getMyTaxes(salary) {
    return this.tax * salary;
    
}

console.group('Функція 1');
console.log( `getMyTaxes.call(Україна, 10000): ${getMyTaxes.call(ukraine, 10000)}`);
console.log(`getMyTaxes.call(Латвія, 10000): ${getMyTaxes.call(latvia, 10000)}`);
console.log(`getMyTaxes.call(Литва, 10000): ${getMyTaxes.call(litva, 10000)}`);
console.groupEnd();

/* 2. Створіть функцію getMiddleTaxes.call(country) -> number; – 
яка рахує скільки у середньому податків платятт IT-спеціалісти у кожній країні. (tax * middleSalary). 
Функція повинна викликатись через call та працювати з даними через this*/

function getMiddleTaxes() {
    return (this.middleSalary * this.tax).toFixed(2);
}
console.group('Функція 2');
console.log(`getMiddleTaxes.call(Україна): ${getMiddleTaxes.call(ukraine)}`);
console.log(`getMiddleTaxes.call(Латвія): ${getMiddleTaxes.call(latvia)}`);
console.log(`getMiddleTaxes.call((Литва): ${getMiddleTaxes.call(litva)}`);
console.groupEnd();

/* 3. Створіть функцію getTotalTaxes.call(country) -> number; – яка рахує, скільки 
всього податків платять IT-спеціалісти у кожній країні. (tax * middleSalary * vacancies).
Функція повинна викликатись через call та працювати з даними через this*/

function getTotalTaxes() {
    return (this.vacancies * this.middleSalary * this.tax).toFixed(2);
}
console.group('Функція 3');
console.log(`getTotalTaxes.call(Україна): ${getTotalTaxes.call(ukraine)}`);
console.log(`getTotalTaxes.call(Латвія): ${getTotalTaxes.call(latvia)}`);
console.log(`getTotalTaxes.call((Литва): ${getTotalTaxes.call(litva)}`);
console.groupEnd();

/* 4 Створіть функцію getMySalary(country) – яка буде писати в консоль об'єкт виду: 
{ salary: number, taxes: number, profit: number } кожні 10 секунд. Значення salary – генеруйте випадковим чином
 у діапазоні 1500-2000. taxes – розраховується в залежності від вибраної країни та значення salary.
profit = salary - taxes;*/

function getMySalary() {
    const randomSalary = Math.floor(Math.random() * 500 + 1500);
    const taxOfRandomSalary = Number((randomSalary * this.tax).toFixed(2));
    const profit = Number((randomSalary - taxOfRandomSalary).toFixed(2));
    const mySalary = {
        salary: randomSalary,
        taxes: taxOfRandomSalary,
        profit: profit,
    };
    return mySalary;
}

console.group('Функція 4');
console.group('getMySalary.call(Латвія):');
setInterval(() => console.log(getMySalary.call(latvia)), 10000);
console.groupEnd();