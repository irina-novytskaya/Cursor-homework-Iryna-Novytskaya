const priceCable = 15.678;
const priceKeyboard = 123.965;
const priceMouse = 90.2345;

//  1.Використовуючи вбудований об'єкт Math – виведіть максимальне число
const maxPrice = Math.max(priceCable, priceKeyboard, priceMouse);
console.log(maxPrice);

//  2.Використовуючи вбудований об'єкт Math – виведіть мінімальне число
const minPrice = Math.min(priceCable, priceKeyboard, priceMouse);
console.log(minPrice);

//  3.Складіть вартість всіх товарів, помістіть її в змінну та виведіть цю суму
const sumPrice = (priceCable + priceKeyboard + priceMouse);
console.log(sumPrice)

//  4.Відкиньте копійки у всіх товарів, потім – складіть цілу частину вартості 
//кожного товару між собою. Округлення використовувати в МЕНЬШУ сторону.
const sumRoundedPrice = Math.trunc(priceCable) + Math.trunc(priceKeyboard) + Math.trunc(priceMouse);
console.log(sumRoundedPrice);

//  5.Виведіть суму товарів округлену до сотень. (Наприклад якщо вийшло 260, то виведіть 300)
const sumPriceRoundTo100 = Math.round(sumPrice / 100) * 100
console.log(sumPriceRoundTo100)

//  6.Виведіть булеве значення: чи є сума всіх товарів (округлена в меншу сторону) парним чи непарним числом?
const roundedSumPrice = Math.trunc(sumPrice);
const sumEven = roundedSumPrice % 2 === 0;
console.log(sumEven);

//  7.Виведіть суму решти, при оплаті всіх товарів (без округлення), якщо клієнт платить 500 грн.
const fiveHundred = 500;
const sumOfRest500 = fiveHundred - sumPrice;
console.log(sumOfRest500);

//   8.Виведіть середнє значення цін, округлене до другого знаку після коми
const averageValuePrice = (sumPrice / 3).toFixed( 2 ) ;
console.log(averageValuePrice);

//  9.Створіть змінну, в якої збережіть випадкову знижку (використовуйте функцію Math.random).
const percentageDiscount  =Math.round (Math.random()* 50);
console.log(percentageDiscount);
const discountInMoney = Math.trunc((sumPrice /100) *percentageDiscount)
console.log(discountInMoney)
//  10.Зробіть клієнту випадкову знижку та виведіть суму до оплати округлену до 2 знаків після коми.
const discountedPrice = (sumPrice -discountInMoney).toFixed( 2 ) ;
console.log(discountedPrice);

//  11.Виведіть чистий прибуток, якщо клієнт заплатив зі знижкою та собівартість товарів рівно в два рази нижче їх ціни?
const profit = ((sumPrice /2) -discountInMoney) .toFixed( 2 ) ;
console.log(profit);

//Advanced
document.writeln(`Домашнє завдання #1: Змінні та типи данних <br>
  1. Максимальна ціна: ${maxPrice}; <br> 
  2. Мінімальна ціна: ${minPrice}; <br> 
  3. Сума всіх товарів: ${sumPrice}; <br>
  4. Сума без копійок: ${sumRoundedPrice}; <br>
  5. Сума товарів округлена до сотень: ${sumPriceRoundTo100}; <br>
  6. Сума товарів парне число?: ${sumEven}; <br>
  7. Решта з 500 при покупці всіх товарів: ${sumOfRest500}; <br>
  8. Середнє значення цін: ${averageValuePrice}; <br>
  9. Випадкова знижка в відcотках: ${percentageDiscount}; <br>
  10.Випадкова знижка в грошах: ${discountInMoney}; <br>
  11.Сума до оплати, з урахуванням знижки: ${discountedPrice}; <br>
  12.Чистий прибуток: ${profit};<br>`)