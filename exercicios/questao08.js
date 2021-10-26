function tipoTriangulo() {
  let ladoA = parseFloat(document.getElementById("ladoA").value);
  let ladoB = parseFloat(document.getElementById("ladoB").value);
  let ladoC = parseFloat(document.getElementById("ladoC").value);

  if (ladoA == ladoB && ladoA == ladoC) {
    return (document.getElementById("resulTriangle").innerHTML =
      "Resultado: Esse é um triangulo equilatero ");
  } else if (ladoA == ladoB || ladoA == ladoC || ladoB == ladoC) {
    return (document.getElementById("resulTriangle").innerHTML =
      "Resultado: Esse é um triangulo isoceles ");
  } else {
    return (document.getElementById("resulTriangle").innerHTML =
      "Resultado: Esse é um triangulo escaleno ");
  }
}
