/* Написать функцию, которая принимает в качестве аргументов строку и объект, а затем проверяет есть ли у переданного объекта 
свойство с данным именем. Функция должна возвращать true или false. */

const school = {
    Ivanov: 5,
    Petrov: 3,
    Sidorov: 4,
    Kolesnikova: 5
};

//Функция проверяет, есть ли str в obj
function exam(str, obj) {
    return str in obj;
}

console.log(exam('Ivanov', school));