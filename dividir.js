function dividir (num1 , num2){
    if (num2 !== 0){
       let resultado = num1 / num2
       return resultado
    }
    throw new Error ("No se puede dividir por cero")

}
module.exports = dividir 