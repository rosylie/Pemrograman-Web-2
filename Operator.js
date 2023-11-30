console.log("Assignment operator");
let x = 10;
let y = 5;

x += y;
console.log(x);

console.log("comparison operator");

let a = 10;
let b = 12;
console.log(a < b);
console.log(a > b);

console.log("perbedaan antara == dan ===");
const aString = '10';
const aNumber = 10;
console.log(aString == aNumber);
console.log(aString === aNumber);

console.log("logical operator && , ||, !"); 

// &&
console.log(a < 15 && b > 10);
console.log(a > 15 && b > 10);

// ||
console.log(a < 15 || b > 10);
console.log(a > 15 || b > 10);

// !
console.log(!(a < 15));
console.log(!(a < 15 && b > 10));

// if else statement
const isRaining = true;
console.log('Persiapan sebelum berangkat kegiatan');
if(isRaining) {
    console.log('Hari ini jujan bawa payung');
} 
console.log('berangkat kegiatan');

let c = 50;
if(c > 70) {
    console.log(x);
} else {
    console.log('Nilai kurang dari 70');
}

let language = 'French';
let greeting = 'Selamat pagi';

if(language === 'English') {
    greeting = 'Good Morning!';
} else if (language === 'French') {
    greeting = 'Bonjour!';
} else if (language === 'Japanese') {
    greeting = 'ohayou gozaimasu!';
}

console.log(greeting);

// ternary operator
// condition ? true expression : false expression

const isMember = false;
const discount = isMember ? 0.1 : 0;
console.log('Anda mendapatkan diskon sebesar ' + discount * 100 + '%');

// truty or falsy
let name = '';
if (name) {
    console.log('halo ' + name);
} else {
    console.log('nama masih kosong');
}

//switch case

/*
switch (expression) {
    case value1:
        // do somethind
        break;
    case value2:
        //do 2
        break;
    default:
        //do something else
} 
*/

let greeting1 = null;

switch (language) {
    case 'English':
        greeting = 'Good Morning';
        break;
    case 'French':
        greeting = 'Bonjour';
        break;
    case 'Japanese':
        greeting = 'Ohayou';
        break;
    default:
        greeting = 'Selamat pagi';
}

console.log(greeting1);