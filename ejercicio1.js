// - Escribir nuestro nombre en minúscula y guardalo en una variable.

// los dos tipos de variables son "const" y "let"

let name = "carlos Alberto";

console.log(name);
// - Utiliza el método "?????” para escribir el nombre de un/a compañero/a mediante un dialogo que solicite al usuario introducirlo,
// si no se introduce que por defecto sea "pepe"
let name2 = prompt("Introduce tu nombre");

if (name2 === '') {
  name2 = "pepe";
}

console.log(name2); // Gabi || Pepe


// - El código tiene que decirnos cual de los dos nombre es más largo, 
//y en el caso que ambos sean iguales tendrá que decir que tienen la misma longitud. "Iguales"

let nombreLargo = '';

if (name.length > name2.length) {
  nombreLargo = name;
} else if (name2.length > name.length) {
  nombreLargo = name2;
} else {
  nombreLargo = "Iguales";
}

console.log('Nombre más largo -->', nombreLargo);

// - Tenemos que transformar la primera letra del nombre introducido a mayuscula
// y sobreescribir la variable con este nuevo valor.

// const name3 = name.slice(1)
// console.log(name3);
// const name4 = name[0].toUpperCase();
// console.log(name4);
// // const camelcaseName = name4 + name3;
// name = `${name4}${name3}`;
// console.log(name);


const nameToArray = name.split(''); // transformamos en un array
const char = nameToArray[0].toUpperCase(); // pasamos a mayuscula 
nameToArray.shift(); // elimina la primera posición de un array
name = `${char}${nameToArray.join('')}`; // 
console.log(name);