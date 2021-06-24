const students = [{
    name: "Tanya",
    course: 3,
    subjects: {
      math: [4, 4, 3, 4],
      algorithms: [3, 3, 3, 4, 4, 4],
      data_science: [5, 5, 3, 4],
    }
  }, {
    name: "Victor",
    course: 4,
    subjects: {
      physics: [5, 5, 5, 3],
      economics: [2, 3, 3, 3, 3, 5],
      geometry: [5, 5, 2, 3, 5],
    }
  }, {
    name: "Anton",
    course: 2,
    subjects: {
      statistics: [4, 5, 5, 5, 5, 3, 4, 3, 4, 5],
      english: [5, 3],
      cosmology: [5, 5, 5, 5],
    }
  }];


// 1. Створіть функцію getSubjects(students[0] --> ["Math", "Algorithms", "Data science"] - яка повертає список предметів для конкретного студента. 
//    Зверніть увагу – назву предмету необхідно повертати з великої літери, а _ – замінити на пробіл
function getSubjects(student) {
  const subjects = Object.keys(student.subjects);

  for (let i = 0; i < subjects.length; i++) {
    subjects[i] = subjects[i].slice(0,1).toUpperCase() + subjects[i].slice(1);
    if (subjects[i].includes("_")) {
      subjects[i] = subjects[i].split("_").join(" ");
    }
  }
  return subjects;
}
// 2. Створіть функцію getAverageMark(students[0]) --> 3.79 – яка поверне середню оцінку по усім предметам для переданого студента НЕ МАСИВА СТУДЕНТІВ.
//  Оцінку округліть до 2ого знаку. 

function getAverageMark(student) {
	const subjectMarks = Object.values(student.subjects);
	const allMarks = subjectMarks.reduce(function(a, b) { return a.concat(b);});
	const marksSum = allMarks.reduce((sum, currentMark) => sum + currentMark, 0);

	const averageMark = marksSum / allMarks.length.toFixed(2);

	return averageMark;
}

console.log(`Задача №02 : ${getAverageMark(students[0])}`);

// 3. Створіть функцію getStudentInfo(students[0]) --> { "course": 3, "name": "Tanya", "averageMark": 3.79} –
//  яка повертає інформацію загального виду по переданому студенту (вам знадобиться функція з попереднього завдання). 
// ПОвинна бути виведена інформація: курс, ім'я, середня оцінка.


function getStudentInfo(student) {
	const currentStudent = {
		course: student.course,
		name: student.name,
		averangeMark: getAverageMark(student),
	};
	return currentStudent; 
}


 
// 4.Ствроіть функцію getStudentsNames(students) --> ["Anton", "Tanya, "Victor"] – яка повертає імена студентів у алфавітному порядку.

function getStudentsNames(students) {
	const studentsNames = [];
	for (student of students) {
		studentsNames.push(student.name);
	}
	return studentsNames.sort();
}

// 5. Створіть функцію getBestStudent(students) --> "Anton" – яка повертає кращого студента зі списку по показнику середньої оцінки.

function getBestStudent(students) {
	const pairsStudentAverageMark = [];
	for (student of students) {
		let pairStudentAverageMark = [];
		pairStudentAverageMark.push(student.name);
		pairStudentAverageMark.push(getAverageMark(student));
		pairsStudentAverageMark.push(pairStudentAverageMark);
	}
	pairsStudentAverageMark.sort((a, b) => b[1] - a[1]);
	return pairsStudentAverageMark[0][0];
}


// 6. Створіть функцію calculateWordLetters("тест") --> { "т": 2, "е": 1, "с": 1 } – яка повертає обє'кт, в якому ключі це букви у слові, а значення – кількість їх повторень.

function calculateWordLetters(string) {
	const lettersOfWord = string.split("");

	const wordLetters = {};
	for (let i = 0; i < lettersOfWord.length; i++) {
		wordLetters[lettersOfWord[i]] = (lettersOfWord.filter(item => lettersOfWord[i] == item)).length;
	}
	return wordLetters;
}
console.log(`Задача №01 : ${getSubjects(students[0])}`);
console.log(`Задача №02 : ${getAverageMark(students[0])}`);
console.log("Задача №03 : ", getStudentInfo(students[0]));
console.log(`Задача №04 : ${getStudentsNames(students)}`);
console.log(`Задача №05 : ${getBestStudent(students)}`);
console.log("Задача №06 : ", calculateWordLetters("тест"));