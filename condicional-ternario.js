// Condicional normal
// En funcion de si soy mayor de edad puedo entrar en la disco o no.


    let edad = 18;
    let puedoEntrar; // 'Si', 'No'
/*
    if(edad >= 18){
        puedoEntrar = 'Si';
    }else{
        puedoEntrar = 'No';
    }
*/

// console.log(`${puedoEntrar} puedes entrar en la discoteca`);

// Condicionales ternarios
// Poner entre parentesis la condicion a comparar.
// Poner un simblolo de interrogante.
// Las dos posiblidades separadas por :

puedoEntrar = (edad >=18) ? "Si":"No"
console.log(`${puedoEntrar} puedes entrar en la discoteca`);