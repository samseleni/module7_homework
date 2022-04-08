/* Переписать консольное приложение из предыдущего юнита на классы. */

let powerUsageTotal = 0;

class Device {
    constructor(name, powerUsage, weight, socket) {
        this.name = name;
        this.powerUsage = powerUsage;
        this.weight = weight;
        this.socket = socket;
    }

    //Функция, показывающая, включен ли прибор и считающая общее потребление
    getSwitched() {
        if (this.socket == 'on') {
            powerUsageTotal += this.powerUsage;
            console.log(`Устройство "${this.name}" включено в розетку`);
        } else {
            this.powerUsage = 0;
            console.log(`Устройство "${this.name}" выключено из розетки`);
        }
    } 
}

//Раздел "бытовая техника"
class Appliances extends Device {
    constructor(name, powerUsage, weight, socket, size) {
        super(name, powerUsage, weight, socket);
        this.size = size
    }
}

const fridge = new Appliances('холодильник', 350, 60, 'on', 'big');
fridge.volume = 250;
fridge.presentation = function() {
    console.log(`Основные характеристики устройства "${this.name}": энергопотребление ${this.powerUsage} Вт/ч; объем: ${this.volume} л`);
}
console.group(`${fridge.name}:`)
fridge.presentation();
fridge.getSwitched('on');
console.groupEnd();

class Electronic extends Device {
    constructor(name, powerUsage, weight, socket, color, screen) {
        super(name, powerUsage, weight, socket);
        this.color = color;
        this.screen = screen;
    }
}

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