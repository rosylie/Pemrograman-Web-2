const user = {
    firstName: 'Rose',
    lastName: 'Simbulan',
    age: 23,
    isJedi: true,
    'home world': 'Toraja'
};

console.log('halo nama saya' + user.firstName + ' ' + user.lastName);
console.log('Umur saya ' + user.age + ' tahun');
console.log('Saya berasal dari ' + user['home world']);

const spaceship = {
    name: 'Falcon',
    manufacturer: 'CEC',
    maxSpeed: 1200,
    color: 'Light Gray'
};

spaceship.color = 'Glossy red',
spaceship['maxSpeed'] = 1300,
spaceship.class = 'Light freighter';

delete spaceship.manufacturer

console.log(spaceship);

const restaurant = {
    name: 'Beefcon',
    city: 'UK',
    'favorite drink': 'Choco',
    'favorite food': 'Salad',
    isVegan: false
};

var name = restaurant.name;
var favoriteDrink = restaurant['favorite drink'];

