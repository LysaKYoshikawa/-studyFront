function boletim() {
  let studentFirstGrade01 = parseFloat(
    document.getElementById("studentFirstGrade01").value
  );
  let studentSecondGrade01 = parseFloat(
    document.getElementById("studentSecondGrade01").value
  );

  let mediaAluno01 = (studentFirstGrade01 + studentSecondGrade01) / 2;

  if (mediaAluno01 === 10) {
    document.getElementById("resultMedia").innerHTML =
      "Resultado: A media do Aluno 01 foi " +
      mediaAluno01 +
      " parabens esta Aprovado!!!";
  } else if (mediaAluno01 >= 7) {
    document.getElementById("resultMedia").innerHTML =
      "Resultado: A media do Aluno 01 foi " +
      mediaAluno01 +
      " parabens esta Aprovado na Media!!!";
  } else {
    document.getElementById("resultMedia").innerHTML =
      "Resultado: A media do Aluno 01 foi " +
      mediaAluno01 +
      " e esta reprovado!!!";
  }
}
