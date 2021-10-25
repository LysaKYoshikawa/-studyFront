function boletim() {

    let studentFirstGrade01 = parseFloat(document.getElementById("studentFirstGrade01").value);
    let studentSecondGrade01 = parseFloat(document.getElementById("studentSecondGrade01").value);
    let studentFirstGrade02 = parseFloat(document.getElementById("studentFirstGrade02").value);
    let studentSecondtGrade02 = parseFloat(document.getElementById("studentSecondtGrade02").value);

    let mediaAluno01 = (studentFirstGrade01 + studentSecondGrade01)/2;
    let mediaAluno02 = (studentFirstGrade02 + studentSecondtGrade02)/2;

    if(mediaAluno01 === 10){
        console.log(document.getElementById("resultMedia")
        .innerHTML = "Resultado: A media do Aluno 01 foi " + mediaAluno01 + " parabens esta Aprovado!!!")

    } else if(media>=7){
        console.log(document.getElementById("resultMedia")
      .innerHTML = "Resultado: A media do Aluno 01 foi " + mediaAluno01 + " parabens esta Aprovado na Media!!!")
    }
    else{
        console.log(document.getElementById("resultMedia")
        .innerHTML = "Resultado: A media do Aluno 01 foi " + mediaAluno01 + " e esta reprovado!!!")

    }

}