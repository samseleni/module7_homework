/* Написать, функцию, которая принимает в качестве аргумента объект и выводит в консоль все ключи и значения только собственных свойств. 
Данная функция не должна возвращать значение. */

//прототип
const student = {
    Ivanov: 5,
    Petrov: 3,
    Smirnov: 4
};

//создание объекта school с прототипом student
const school = Object.create(student);

//добавление собственных свойств в school
school.Sidorov = 2;
school.Kolesnikova = 5;

//функция выводит все ключи и значения собственных свойств
function ownProp(obj) {
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            console.log(`${key}: ${obj[key]}`);
        }
    }
}

ownProp(school);