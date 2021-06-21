let array = [6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2];
let array2 = [1, 2, 3, 4, 5, 6];    
let array3 = [1, -2, 3, -4, -5, 6, 9];

//1. Створіть функцію getRandomArray(length, min, max) – яка повертає масив випадкових цілих чисел.
const getRandomArray = (() => {
  const lengthArray = 15;
    const min = 1;
   const max = 100;
    let randomArray = [];
    for (let i = 0; i < lengthArray; i++) {
        randomArray[i] = [Math.floor(Math.random() * (max - min + 1)) + min];
    }
    return randomArray.join().split();
});
console.log( 'Функція 1:',getRandomArray());

// 3. Створіть функцію getAverage(...numbers) – яка рахує середнє арифметичне всіх переданих в неї аргументів.

const arrayIntegers = array.filter((number) => Number.isInteger(number));
let sum = 0;
for (let number of arrayIntegers) {
    sum += number;
}
let getAverage = sum / arrayIntegers.length;
console.log('Функція 3:',getAverage)
 
//4. Створіть функцію getMedian(...numbers) – яка рахує медіану всіх переданих в неї аргументів. 

function getMedian(array) {
   array.filter((item) => (Number.isInteger(item) || !item));
    let count = 0;
    array.sort((a, b) => a - b);
    do {
        array.pop();
        array.shift();
    } while (array.length > 2)  
    if (array.length === 2) {
        for (let i = 0; i < array.length; i++) {
            count = (array[0] + array[1]);
            return count / 2;
        } }
    return array[0];
}
console.log('Функція 4:', getMedian(array))
//5. Створіть функцію filterEvenNumbers(...numbers) – яка фільтрує парні числа передані як аргументи функції


function getEvenNumbers () {
   let evenNumbers = array2.filter(item => !(item % 2 === 0) )
    return evenNumbers;
}
console.log('Функція 5:', getEvenNumbers());

//6. Створіть функцію countPositiveNumbers(...numbers) – яка порахує кількість чисел більших 0


function positiveNumber() {
   let positiveNumbers = array3.filter(item => item > 0);
    return positiveNumbers.length;
}
console.log('Функція 6:', positiveNumber())

//7. Створіть функцію getDividedByFive(...numbers) – яка відфільтрує усі елементи в масиві та залишить тільки ті, які діляться на ціло на 5

let duplicateArray = [6, 2, 55, 11, 25, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2];

function getDividedByFive() {
    dividedByFive = duplicateArray.filter(item => item % 5 === 0)
    return dividedByFive;
};
console.log('Функція 7:', getDividedByFive());
