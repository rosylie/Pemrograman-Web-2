// const language = 'Japanese';
// let greeting = '';
// switch (language) {
//     case 'English':
//         greeting = 'Good Morning!';
//         break;
//     case 'French':
//         greeting = 'Bonjour!';
//         break;
//     case 'Japanese':
//         greeting = 'Ohayou Gozaimasu!';
//     default:
//         greeting = 'Selamat Pagi!';
// }
// console.log(greeting);

if (123 === '123') console.log('Dicoding Indonesia')
else if ('123' == 123) console.log('Bandung Kota')
else console.log('Front-End Web Developer');

const language = 'Japanese';
let greeting = '';
switch (language) {
  case 'English':
    greeting = 'Good Morning!';
    break;
  case 'French':
    greeting = 'Bonjour!';
    break;
  case 'Japanese':
    greeting = 'Ohayou Gozaimasu!';
  default:
    greeting = 'Selamat Pagi!';
}
console.log(greeting);

const newObject = {
  satu: 'satu',
  dua: 'dua',
  tiga: true,
};
localStorage.setItem('newItem', JSON.stringify(newObject));
const getObject = localStorage.getItem('newItem');
console.log(`${getObject.satu} ${getObject.dua} ${getObject.tiga}`);