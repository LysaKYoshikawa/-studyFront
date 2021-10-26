//  Faça um programa que peça as 4 notas bimestrais e mostre a média.

function calculo () {

    let nota01 = parseFloat(document.getElementById('nota01').value);
    let nota02 = parseFloat(document.getElementById('nota02').value);
    let nota03 = parseFloat(document.getElementById('nota03').value);
    let nota04 = parseFloat(document.getElementById('nota04').value);

    let resultado = parseFloat((nota01 + nota02 + nota03 + nota04) / 4);

    //document.getElementById('txtResultado').setAttribute('value', resultado);
    document.getElementById('txtResultado').innerHTML = "Resultado: A media é  " + resultado;


}