const students = ["Олександр",
                  "Ігор", 
                  "Олена", 
                  "Іра",
                  "Олексій",
                 "Світлана"];
const themes = ["Диференційне рівняння",
                  "Теорія автоматів",
                   "Алгоритми і структури даних"];         
const marks = [4, 5, 5, 3, 4, 5];                         

/*Розділіть студентів на пари(хлопець + дівчина) для работи над проєктом.
 У вас повинен вийти вкладений масив з парами студентів: [["Олександр", "Олена"], [..], [...]];*/

const girls = students.filter(student => student[student.length - 1] === 'а');
const boys = students.filter(student => student[student.length - 1] !== 'а');
 function createCouple (boys, girls){
    const coupleOfStudents = [];
    for (let i = 0; i < boys.length; i++) {
        coupleOfStudents[i] = [boys[i], girls[i]];
    }
    return coupleOfStudents;
}
const couple = createCouple(boys, girls);


/*Зіставте пари з попереднього завдання та теми проєктів, над якими студенти будуть працювати.
 Повинен вийти вкладений масив виду: [["Олександр і Олена", "Теорія автоматів"], [...], [...]]*/
function formCoupleWithTheme (couple, themes){
    const themesCouple = [];
    for (let i = 0; i < themes.length; i++){
        themesCouple.push([couple[i][0] + ' і ' + couple[i][1], themes[i]]);
    }
    return themesCouple;
}
const coupleWithThemes =formCoupleWithTheme(couple, themes)


//Зіставте оцінки(marks) зі студентом(students): [["Саша", 4], [...], [...]]

function getMarksStudent(students, marks){
    const marksStudent = [];
    for(let i =0; i < marks.length; i++){
      marksStudent.push([students[i], marks[i]]);
    }
    return marksStudent;
}
const marksForStudents = getMarksStudent(students, marks);


/*Поставте кожній парі випадкову оцінку(від 1 до 5) за проєкт
(тут функція буде нечистою, але не повинна мутувати массив).*/
function getMarksCouple (coupleWithThemes){
    const marksCouple= [];
    for (let i = 0; i < coupleWithThemes.length; i++){
        const mark = Math.floor(Math.random()*5)+1 ;
        marksCouple.push([coupleWithThemes[i][0], coupleWithThemes[i][1], mark]);
}
    return marksCouple;
}
const marksWithCouple = getMarksCouple(coupleWithThemes);


console.log("1", couple);
console.log("2",coupleWithThemes);
console.log("3",marksForStudents);
console.log("4",marksWithCouple);