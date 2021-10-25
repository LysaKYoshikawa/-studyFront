// 5 – Faça um programa que verifique se uma letra digitada é vogal ou consoante.

function letras () {
    let vogais = ["a", "e", "i", "o", "u"]
    let letra = document.getElementById("letra").value;
    letra = letra.toLowerCase();


    if (letra==='a' || letra==='e' || letra==='i' || letra==='o' || letra==='u') {
        console.log("Resultado: A letra " + letra + " é uma vogal");
        return document.getElementById("letraAdicional").innerHTML = "Resultado: A letra " + letra + " é uma vogal";
      } else{
        console.log("Resultado: A letra " + letra + " é uma consoante");
        return document.getElementById("letraAdicional").innerHTML = "Resultado: A letra " + letra + " é uma consoante";
      }

}