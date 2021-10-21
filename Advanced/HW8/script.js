
// 1. У стдентів повинні бути наступні властивості: university, course, fullName, вони передаються при створенні студента(в конструктор).//

const marks = [5, 4, 4, 5];
class Student {
  constructor(university, course, fullName) {
    this.university = university;
    this.course = course;
    this.fullName = fullName;
    this.marks = marks;
    this.isDismissed = false;
  }

  /* 2. Створіть метод this.getInfo() -> "Студент 1го курсу Вищої Школи Психотерапії м.Одеса, 
  Остап Родоманський Бендер", метод повертає сукупну інформацію про курс, учбовий заклад та імені студента.*/

  getInfo() {
    return `Студент ${this.course}го курсу ${this.university}, ${this.fullName}`;
  }

// 3. Створіть геттер оцінок this.marks, який повертає масив оцінок студента [5, 4, 4, 5]//

  get getMarks() {
    if (this.isDismissed) return null;
    else return this.marks;
  }

  /* 4. Створіть сеттер оцінок this.marks = 5, який дозволяє поставити оцінку студенту.
   Після того, як оцінка поставлена, геттер повинен повернути масив this.marks -> [5, 4, 4, 5, 5]*/

  set setMarks(newMark) {
    if (this.isDismissed) return null;
    else return this.marks.push(newMark);
  }

// 5. Створіть метод отримання середнього балу this.getAverageMark() -> 4.6//

  getAverageMark() {
    let sum = 0;

    for (let i = 0; i < marks.length; i++) {
        sum = sum + marks[i];
    };
    const averageMark = sum / this.marks.length;
    return averageMark;
};

  /* 6. Створіть метод this.dismiss, який "виключить" студента. Після виклику цього методу – ставити студенту оцінки та отримувати їх більше не можна.
   (Ніяких помилок, просто повертається завжди null замість масиву оцінок)*/

  dismiss() {
    return (this.isDismissed = true);
  }

  // 7. Створіть метод this.recover, який дозволить поновити студента//

  recover() {
    return (this.isDismissed = false);
  }
}
console.log(
  "Завдання 2"
);
const ostap = new Student(
  "Вищої Школи Психотерапії м.Одеса",
  "1",
  "Остап Родоманський Бендер"
);
console.log(ostap.getInfo());

console.log(
  "Завдання 3"
);
console.log(ostap.getMarks);

console.log(
  "Завдання 4"
);
ostap.setMarks = 5;
console.log(ostap.getMarks);

console.log("Завдання 5");
console.log(ostap.getAverageMark());

console.log(
  'Завдання 6'
);
ostap.dismiss();
ostap.setMarks = 2;
console.log(ostap.getMarks);

console.log(
  "Завдання 7"
);
ostap.recover();
console.log(ostap.getMarks);