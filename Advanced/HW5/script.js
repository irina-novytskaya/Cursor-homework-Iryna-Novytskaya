
//1. Створіть функцію getRandomArray(length, min, max) – яка повертає масив випадкових цілих чисел.

function askAboutLenght () {
    const lengthArray = +prompt(`Введіть довжину масиву`, `від 1 до 100`);

const getRandomArray = (() => {
    const min = 1;
    const max = 100;
    let randomArray = [];
    for (let i = 0; i < lengthArray; i++) {
        randomArray[i] = [Math.floor(Math.random() * (max - min + 1)) + min];
    }
    return randomArray.join().split();
});
console.log( 'Функція 1:',getRandomArray());

};
askAboutLenght()

// 3. Створіть функцію getAverage(...numbers) – яка рахує середнє арифметичне всіх переданих в неї аргументів.
function getAverage(...numbers) {
    numbers = numbers.filter(number => Number.isInteger(number));
    
    const numbersQuantity = numbers.length;
    const numbersSum = numbers.reduce((sum, item) => sum + item, 0);
    const averageOfNumbers = numbersSum / numbersQuantity;

    return averageOfNumbers;
}
console.log("Функція 3", getAverage(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2));

//4. Створіть функцію getMedian(...numbers) – яка рахує медіану всіх переданих в неї аргументів. 

function getMedian(...numbers) {
    numbers.filter((item) => (Number.isInteger(item) || !item));
    let count = 0;
    numbers.sort((a, b) => a - b);
    do {
        numbers.pop();
        numbers.shift();
    } while (numbers.length > 2)  
    if (numbers.length === 2) {
        for (let i = 0; i < numbers.length; i++) {
            count = (numbers[0] + numbers[1]);
            return count / 2;
        } }
    return numbers[0];
}
console.log("Функція 4", getMedian(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2));

//5. Створіть функцію filterEvenNumbers(...numbers) – яка фільтрує парні числа передані як аргументи функції


function filterEvenNumbers(...numbers) {
   let evenNumbers = numbers.filter(item => !(item % 2 === 0) )
    return evenNumbers;
}

console.log("Функція 5", filterEvenNumbers(1, 2, 3, 4, 5, 6));

//6. Створіть функцію countPositiveNumbers(...numbers) – яка порахує кількість чисел більших 0


function countPositiveNumbers(...numbers) {
   let positiveNumbers = numbers.filter(item => item > 0);
    return positiveNumbers.length;
}
console.log("Функція 6", countPositiveNumbers(1, -2, 3, -4, -5, 6)); 

//7. Створіть функцію getDividedByFive(...numbers) – яка відфільтрує усі елементи в масиві та залишить тільки ті, які діляться на ціло на 5

function getDividedByFive(...numbers) {
    numbers = numbers.filter(item => item % 5 === 0)
    return numbers;
};
console.log("Функція 7", getDividedByFive(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2));