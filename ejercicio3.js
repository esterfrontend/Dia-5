// Generar tres variables con arrays vacios donde se guardarán
/**
 * - números
 * - string
 * - booleanos || valores falsy
 */

const arrNumber = [];
const arrString = [];
const arrBooleansAndFalsy = [];

// Generear una función que reciba un parámetro guarde el valor del mismo en la variable correspondiente

function pushArr(x) {
  // console.log(x);
  if (typeof x === 'boolean' || !x) {
    arrBooleansAndFalsy.push(x);
  } else if (typeof x === 'string') {
    arrString.push(x);
  } else if (typeof x === 'number') {
    arrNumber.push(x);
  }
}

// console.log(arrNumber);
pushArr(50);
pushArr(51);
pushArr(52);
pushArr(53);
pushArr(54);
pushArr(55);
pushArr(56);
pushArr(57);
pushArr(58);
pushArr(59);
pushArr('Pepe');
pushArr('Pepe');
pushArr(0);
pushArr('');
// arrNumber.push(49)
// arrNumber.push(50)
// console.log(typeof true);
// // console.log(typeof 'Pepe');
// console.log('arrNumber', arrNumber);
// console.log('arrString', arrString);
// console.log('arrBooleansAndFalsy', arrBooleansAndFalsy);

// Generar una función que pueda recibir un parámetro o no. Y que nos devuelva de forma aleatoria un valor del array
// el cual nosotros le pasemos. Si el array está vacio deberá devolver "null" y si no le pasamos nada por defecto tendrá
// que darnos un valor de las variables de números


function getRandomElement(array = arrNumber) {
  const randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
}

const resultFn = getRandomElement(arrString);

// console.log(resultFn);

// Generar una función que reciba un parámetro que se encargue de eliminar la primera y última posición del array
// que le pasamos
// si el array se encuentra vacio deberá devolver "null".

function removeElementArr(array) {
  if (array.length === 0) {
    return null;
  }
  array.shift();
  array.pop();
}

console.log(arrString);

console.log(removeElementArr(arrString));

console.log(arrString);
