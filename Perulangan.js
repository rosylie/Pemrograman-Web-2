console.log("---For---"); 

for (let i = 0; i < 5; i++) {
    console.log(i);
}

console.log("---For of---");

let myArr = ['Luke', 'Lily', 'Sepri','Sheryl'];
for (const arrayItem of myArr) {
    console.log(arrayItem);
}

console.log("---While & do-while---");

let a = 1;
while (a <= 10) {
    console.log(a);
    a++;
}

let b = 1;

do{
    console.log(b);
    b++;
} while (b <= 10);

// infinite loop => crash
/*

let c = 1;
while(c <= 5) {
    console.log(c);
}

output : Maaf, kami mengalami kegagalan dalam menjalankan kode Anda.
Cobalah beberapa saat lagi.
Kode Error: 22

for(let d = 1; d <= 5; d = 1) {
    console.log(d);
}

output : Maaf, kami mengalami kegagalan dalam menjalankan kode Anda.
Cobalah beberapa saat lagi.
Kode Error: 22
*/