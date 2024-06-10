function strVerification(inStr, inObj) {
    return inStr in inObj;
}

const obj = {a: 1, b: 2, c: 3, d: 4, e: 5, f: 6};
const str = 'a';
const str1 = 'g';

console.log(strVerification(str, obj));

console.log(strVerification(str1, obj));