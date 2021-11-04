
function desafioCalculo () {
    let number = parseInt(document.getElementById("number").value);
    aoQuadrado(number)

    parOuImparFunction(number);

    cube(number)
}

function parOuImparFunction(number) {
    if (number % 2 === 0) {
        console.log(document.getElementById("numberMath").innerHTML = "Resultado: O numero " + number + " é par");

    } else if (number % 2 !== 0) {
        console.log(document.getElementById("numberMath").innerHTML = "Resultado: O numero " + number + " é impar ");

    } else {
        document.getElementById("numberMath").innerHTML = "numero incorreto!  ";
    }
}

function aoQuadrado(number) {
    
    const exponente = 2;
    let square = Math.pow(number,exponente);
    document.getElementById("aoQuadrado").innerHTML = "Resultado: O quadrado é " + square;
    
}

function cube(number) {
    
    const exponente = 3;
    let resultCube = Math.pow(number,exponente);
    document.getElementById("cube").innerHTML = "Resultado: O cubo é " + resultCube;
    
}