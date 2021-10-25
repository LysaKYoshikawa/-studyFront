//Faça um programa que peça um valor e mostre na tela se o valor é positivo ou negativo.
function numberPosNeg (){
    let number = parseInt(document.getElementById("requestedNumber").value)
    

    if (number > 0) {
       console.log(number, "é positivo")
       return document.getElementById("resultQuestionfour").innerHTML = "Resultado: O numero " + number + " é um numero positivo";
    }else{
        console.log(number, "é negativo")
        return document.getElementById("resultQuestionfour").innerHTML = "Resultado: O numero " + number + " é um numero negativo";
    }
   
}