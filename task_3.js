// Написать функцию, которая создает пустой объект, но без прототипа.

function emptyObj () {
    const obj = Object.create(null);
    return obj;
}

console.log(emptyObj());