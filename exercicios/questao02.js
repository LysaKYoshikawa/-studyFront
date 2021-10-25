function temperatura (){
    let temperaturaF = document.getElementById("tempF").value; //window.prompt("Temperatura em graus Fahrenheit", 0);
    let temperaturaC = 5 * ((temperaturaF -32) / 9)

    let resultado = document.write(`sua temperatura ${temperaturaC} em graus Celsius `)

    //console.log(`sua temperatura ${temperaturaC} `)
    console.log(resultado)
    document.getElementById('tempResultado').setAttribute("value", temperaturaC);

}


