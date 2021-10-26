function hours() {
  let date = new Date(
    0,
    0,
    0,
    document.getElementById("hours").value,
    document.getElementById("minutes").value
  );
  // let x = date.setDate(0,0,0)
  // console.log(x, "hahah"  )
  let hours = date.getHours();
  let minutes = date.getMinutes();

  if (hours < 12) {
    return (document.getElementById("resultHours").innerHTML =
      "Resultado: O horario " + hours + ":" + minutes + " Bom dia!!!");
  } else if (hours >= 12 && hours < 18) {
    return (document.getElementById("resultHours").innerHTML =
      "Resultado: O horario " + hours + ":" + minutes + " Boa tarde!!!");
  } else if (hours >= 18) {
    return (document.getElementById("resultHours").innerHTML =
      "Resultado: O horario " + hours + ":" + minutes + " Boa noite!!!");
  } else {
    return (document.getElementById("resultHours").innerHTML =
      "Resultado: O horario " +
      hours +
      ":" +
      minutes +
      " por favor repita o processo. Horas na caixa de cima Minutos na caixa de baixo!");
  }
}
