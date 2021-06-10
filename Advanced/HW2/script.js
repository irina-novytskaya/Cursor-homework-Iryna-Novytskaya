let theFirstNumber;

do { theFirstNumber = +prompt("Введіть перше число", '');
} while (!Number.isInteger(theFirstNumber) || false);

let secondNumber;

do { secondNumber = +prompt ("Введіть друге число", '');
} while (!Number.isInteger(secondNumber) || false)

let minNumber = Math.min (theFirstNumber, secondNumber);
let maxNumber = Math.max (theFirstNumber, secondNumber);

let skipEvenNumbers = confirm ("Пропускати парні числа?");

let sum = 0;
for ( let i = minNumber; i <= maxNumber; i++) {
    if (skipEvenNumbers && i % 2 == 0) continue;
    sum += i;
}
document.writeln(`Домашнє завдання #2: Цикли та Розгалуження <br>
 Перше число: ${theFirstNumber}; <br> 
 Друге число: ${secondNumber}; <br> 
 Пропускати парні числа? ${skipEvenNumbers}; <br>
 Результат підрахунку: ${sum}; <br>`)