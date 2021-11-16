
function desafioCalculo () {
    let number = parseInt(document.getElementById("number").value);
    aoQuadrado(number)

    parOuImparFunction(number);

    cube(number);

    calculoFatorial(number)

    calculoPrime(number)

    calculoRaiz(number)
    
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

function calculoFatorial(number){
    let fatorial = 1
    for(let i=1; i<=number; i++){
        fatorial *= i;
    }
    document.getElementById("fatorial").innerHTML = "Resultado: O fatorial é  " + fatorial;
}

function calculoRaiz(number){
    let resultRaiz = document.getElementById("raiz");
    resultRaiz.innerText = Math.sqrt(number)
}

function calculoPrime(number){
    let resultPrimo = document.getElementById("prime")
    let divisors = 0

    for (let count=1; count<=number; count++){
        if(number % count == 0){
            divisors++;
        }
    }
    if(divisors == 2){
        resultPrimo.innerText = "É um numero Primo"
    }else{
        resultPrimo.innerText = "Não é numero Primo"
    }
}