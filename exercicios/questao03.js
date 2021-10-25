function maiorValor() {
  let frist = parseInt(document.getElementById("fristNumber").value);
  let second = parseInt(document.getElementById("secondNumber").value);
 
  if (frist > second) {
    console.log("Resultado: " + frist + " é o maior número");
    return document.getElementById("result").innerHTML = "Resultado: " + frist + " é o maior número";
  } else if (second > frist) {
    console.log("Resultado: " + second + " é o maior número");
    return document.getElementById("result").innerHTML = "Resultado: " + second + " é o maior número";
  } else {
    console.log("Resultado: Os números são iguais");
    return document.getElementById("result").innerHTML = "Resultado: Os números são iguais";
  }
}
// document.write(`O numero ${maiorValor}  é o maior numero `);
