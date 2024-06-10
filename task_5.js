class ElectricalAppliance {
    constructor(name, power) {
        this.name = name;
        this.power = power;
    }
    // status: enter true if the device is turned on and false if it is turned off
    setStatus(status) {
        return this.status = status;
    }
}

class Television extends ElectricalAppliance {
    constructor(name, power, brand, diagonalCm, matrix) {
        super(name, power);
        this.name = name;
        this.power = power;
        this.brand = brand;
        this.diagonalCm = diagonalCm;
        this.matrix = matrix;
    }
}

class Conditioner extends ElectricalAppliance {
    constructor(name, power, brand, type, coolingSqm) {
        super(name, power);
        this.name = name;
        this.power = power;
        this.brand = brand;
        this.type = type;
        this.coolingSqm = coolingSqm;
    }
}

class Сomputer extends ElectricalAppliance {
    constructor(name, power, brand, type) {
        super(name, power);
        this.name = name;
        this.power = power;
        this.brand = brand;
        this.type = type;
    }
}

const tv1 = new Television('TV', 100, 'Sony', 50, 'IPS');
tv1.setStatus(false);


const conditioner1 = new Conditioner('conditioner', 750, 'LG', 'split_system', 20);
conditioner1.setStatus(true);

const computer1 = new Сomputer('computer', 250, 'MSI', 'laptop');
computer1.setStatus(true);

let arrAppliances = [tv1, conditioner1, computer1]

for (key in arrAppliances) {
    console.log(arrAppliances[key]);
}

function sumEnergyСonsumption(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        if (Object.values(arr[i]).includes(true)) {
            sum += arr[i].power;
        }
    }
    return sum;
}

const sumEnergy = sumEnergyСonsumption(arrAppliances);
console.log(`The sum of all working devices: ${sumEnergy} watts`);