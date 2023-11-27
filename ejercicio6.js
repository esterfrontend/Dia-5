// Generar una función para saber si un cliente tiene descuento que reciba tres parámetros (customerAge, hasCard, isFrequentCustomer)

/**
 * Un cliente tendrá descuento si cumple alguna de estas dos condiciones
 * - El cliente es mayor los 18
 * - Tiene que tener tarjeta de crédito
 * 
 * o
 * 
 * - Es un cliente frecuente
 * - Su edad es mayor de 25 y menor de 65
 */


const customer1 = { age: 25, hasCard: true, isFrequentCustomer: false };
const customer2 = { age: 17, hasCard: false, isFrequentCustomer: true };
const customer3 = { age: 30, hasCard: true, isFrequentCustomer: true };
const customer4 = { age: 70, hasCard: true, isFrequentCustomer: true };