const obj = {a: 1, b: 2, c: 3, d: 4, e: 5, f: 6};

function funcOutKeyVal(objIn) {
    for (let key in objIn) {
        if (objIn.hasOwnProperty(key)) {
            console.log(`Key: ${key}, Values: ${objIn[key]}`)
        }
    }
}

funcOutKeyVal(obj);