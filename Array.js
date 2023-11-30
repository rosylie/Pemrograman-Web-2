let myArr = [
    'Cokelat',
    42.5,
    22,
    true,
    'Programming'
];
console.log(myArr);
console.log(myArr[0]);
console.log(myArr[1]);
console.log(myArr[2]);
console.log(myArr[3]);
console.log(myArr[4]);
console.log(myArr[5]);

myArr.push('Javascript');
console.log(myArr);

myArr.pop();
console.log(myArr);

myArr.shift();
console.log(myArr);

myArr.unshift('Apple');
console.log(myArr);

delete myArr[1];
console.log(myArr);

myArr.splice(2,1);
console.log(myArr);


const evenNumber = [];
for (i = 1; i <= 100; i++) {
    if(i % 2 == 0){
        console.log(i);
        evenNumber.push(i);
    }
}

/**
 * abaikan kode di bawah ini
 */

module.exports = evenNumber;