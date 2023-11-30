function multiply(a,b) {
    return a*b;
}
console.log(multiply(3,4));

function greeting(name, language) {
    if (language === 'English') {
        return 'morning ' + name;
    } else if (language === 'French'){
        return 'Bonjour ' + name;
    } else {
        return 'pagi ' + name;
    }
}

let greetingMessage = greeting('Hary','French');
console.log(greetingMessage);

// expression function
console.log(greeting('Ron', 'English'));


function minimal(a,b) {
    if(a < b) {
        return a
    } else if (b < a) {
        return b
    } else if (a == b) {
        return a
    }
}

console.log(minimal(1,4)); 
console.log(minimal(3,2)); 
console.log(minimal(3,3)); 

function power(a,b) {
    return a ** b;
}
console.log(power(7,3));
console.log(power(3,3));
console.log(power(4,0.5));