// Queremos crear un diccionario con tipo de dato Map() para guardar las entradas de un diccionario típico de la lengua española

const diccionario = new Map();

// Guardar una entrada para gato

diccionario.set('Gato', 'Felino monisimo presente en muchas casas.');
diccionario.set('Perro', 'Cuadrupedo peludo muy intenso');

// Consultar una entrada
console.log(diccionario.get('gato'));

// agenda
const agenda = new Map();
agenda.set('Jotape', 622526580);
console.log(agenda.get('Almudena'));