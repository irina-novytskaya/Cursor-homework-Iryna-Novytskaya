/*Фунукція 1. 1.	Створити функцію getMaxDigit(number) – яка отримує будь-яке число
 та виводить найбільшу цифру в цьому числі. Приклади: 1236 -> 6, 987 -> 9, 385 -> 8*/

function getMaxDigit(num){
 number = (num.toString().split('').map(Number)); 
 maxDigit = 0;
   for(let i = 0; i < number.length; i++) {
       if(maxDigit < number[i]) {
        maxDigit = number[i];
       } else {
           continue;
       }
   }
return maxDigit;
 }
 /*Фунукція 2. Створити функцію, яка визначає ступінь числа.
  Не використовуючи Math.pow та **. Використовуйте цикл*/

 function pow(N, M) {
     result = N;
    for (let i = 0; i < M; i++) {
      result *= N;
    }
return result;
  }

 /* Фунукція 3.	Створити функцію, яка форматує ім'я,
  роблячи першу букву великою. ("влад" -> "Влад", "вЛАД" -> "Влад" і так далі);*/

 function alignCase(str) {
    if (!str) return str;
return str[0].toUpperCase() + str.slice(1).toLowerCase() }

/* Фунукція 4.	Створити функцію, яка вираховує суму, що залишається після оплати податку від зарабітньої плати. 
(Податок = 18% + 1.5% -> 19.5%). Приклад: 1000 -> 805*/
  
function netProfit(sum){
     incomeTax = (sum / 100) * 18;
     militaryFee = (sum / 100) * 1.5;
return sum - (incomeTax + militaryFee);
   }

/*Фунукція 5. Створити функцію, яка повертає випадкове ціле число в діапазоні від N до M.
 Приклад: getRandomNumber(1, 10) -> 5*/

function getRandomInRange(N, M) {
     max = Math.max(N, M);
     min = Math.min(N, M);
return Math.floor(Math.random() * (max - min + 1)) + min;
  }
 /* Фунукція 6.	Створити функцію, яка рахує скільки разів певна буква повторюється в слові.
  Приклад: countLetter("а", "Асталавіста") -> 4*/
  
  function countLetter ( word, letter){
    count = 0;
    word = word.toLowerCase();
    for(let i = 0; i < word.length; i++) {
       if(letter === word[i]) {
           count++;
       }
    }
return count;
}
 /*Функція 10.  Створіть функцію, яка перевіряє, чи є слово паліндромом. Приклад: isPalyndrom("мадам") -> true,
  isPalyndrom("кокос") -> false, isPalyndrom("Я несу гусеня") -> true*/

function isPalyndrom(str) {
     string = str.toLowerCase();
     stringReverse =  string.split('').reverse().join('')
     if(string === stringReverse) {
         return true;
     } else {
         return false;
    }
}



document.writeln(`Домашнє завдання #2: Функції <br>
Функція №1 : ${getMaxDigit(1239426)}; <br>
Функція №2 : ${pow(3,3)};<br>
Функція №3 : ${alignCase("влАд")}; <br>
Функція №4 : ${netProfit(1000)}; <br>
Функція №5 : ${getRandomInRange(1,10)}; <br>
Функція №6 : ${countLetter("Асталавіста","а")};<br>
Функція №10 : ${isPalyndrom("Мадам")}<br>`)