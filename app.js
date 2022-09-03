// esta es mi función que suma dos números
const sum = (a,b) => {
    return a + b
}

// solo un registro en consola para nosotros.
console.log(sum(7,3))


// declaramos una funcion con el mismo nombre "formEuroToDollar"
const fromEuroToDollar = function(valueInEuro){
    // convertimos el valor a dolares
    let valueInDollar = valueInEuro * 1.2;
    // retornamos el valor
    return valueInDollar;
}
const fromDollarToYen = function(value){
    // convertimos el valor a dolares
    let valueInYen = (value)*106.58;
    // retornamos el valor
    return valueInYen;
}

const fromYenToPound = function(value){
    // convertimos el valor a dolares
    let valueInPound = (value)*0.00625;
    // retornamos el valor
    //return Number(valueInPound.toFixed(5));
    return Number(valueInPound.toFixed(5));
}


// exporta la función para usarla en otros archivos 
// (similar a la palabra clave `export` cuando se usa webpack)
module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound }