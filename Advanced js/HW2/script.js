let variableN;

do {
    variableN = +prompt("Введіть перше число", '');
}
 while(!Number.isInteger(variableN) );

let variableM;

do {
    variableM = +prompt("Введіть друге число", '');
} 
while (!Number.isInteger(variableM) );

const minVariable = Math.min(variableN, variableM);
const maxVariable = Math.max(variableN, variableM);

let skipEvenNumbers = confirm("Пропускати парні числа?");

let sum = 0;
for ( 
    let i = minVariable; i <= maxVariable; i++) {
    if (
        skipEvenNumbers && i % 2 == 0) continue;
    sum += i;
}
document.writeln(`Домашнє завдання #2: Цикли та Розгалуження <br>
 Перше число: ${variableN}; <br> 
 Друге число: ${variableM}; <br> 
 Пропускати парні числа? ${skipEvenNumbers}; <br>
 Результат підрахунку: ${sum}; <br>`)
 