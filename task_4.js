/* Реализовать следующее консольное приложение подобно примеру, который разбирался в видео. Реализуйте его на прототипах.
Определить иерархию электроприборов. Включить некоторые в розетку. Посчитать потребляемую мощность. 
Таких приборов должно быть, как минимум, два (например, настольная лампа и компьютер). Выбрав прибор, подумайте,
какими свойствами он обладает. */

let powerUsageTotal = 0;

function Device(name, powerUsage, weight, socket) {
    this.name = name,
    this.powerUsage = powerUsage,
    this.weight = weight,
    this.socket = socket
}

//Функция, показывающая, включен ли прибор и считающая общее потребление
Device.prototype.getSwitched = function() {
    if (this.socket == 'on') {
        powerUsageTotal += this.powerUsage;
        console.log(`Устройство "${this.name}" включено в розетку`);
    } else {
        this.powerUsage = 0;
        console.log(`Устройство "${this.name}" выключено из розетки`);
    }
}

//Раздел "бытовая техника"
function Appliances(name, powerUsage, weight, socket, size) {
    this.name = name,
    this.powerUsage = powerUsage,
    this.weight = weight,
    this.socket = socket,
    this.size = size
}
Appliances.prototype = new Device();

const fridge = new Appliances('холодильник', 350, 60, 'on', 'big');
fridge.volume = 250;
fridge.presentation = function() {
    console.log(`Основные характеристики устройства "${this.name}": энергопотребление ${this.powerUsage} Вт/ч; объем: ${this.volume} л`);
}
console.group(`${fridge.name}:`)
fridge.presentation();
fridge.getSwitched('on');
console.groupEnd();

function Electronic(name, powerUsage, weight, socket, color, screen) {
    this.name = name,
    this.powerUsage = powerUsage,
    this.weight = weight,
    this.socket = socket,
    this.color = color,
    this.screen = screen
}
Electronic.prototype = new Device();

const mobile = new Electronic('мобильный телефон', 5, 0.186, 'off', 'blue', 'OLED');
mobile.camera = 64;
mobile.memory = 256;
mobile.presentation = function() {
    console.log(`Основные характеристики устройства "${this.name}": экран ${this.screen}; камера: ${this.camera} Мп; объем памяти: ${this.memory} Гб`);
}
console.group(`${mobile.name}:`)
mobile.presentation();
mobile.getSwitched();
console.groupEnd();

const laptop = new Electronic('ноутбук', 60, 1, 'on', 'grey', 'IPS');
laptop.CPU = 'Intel core i7';
laptop.videoCard = 'intel IRIS';
laptop.presentation = function() {
    console.log(`Основные характеристики устройства "${this.name}": экран ${this.screen}; процессор ${this.CPU}; видеокарта ${this.videoCard}`);
}
console.group(`${laptop.name}:`)
laptop.presentation();
laptop.getSwitched();
console.groupEnd();

console.log(`Общее энергопотребление включенных в розетку приборов = ${powerUsageTotal} Вт/ч`);