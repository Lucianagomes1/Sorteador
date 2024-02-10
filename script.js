function gerador() {
  var min = Math.ceil(document.querySelector(".minimo").value);
  var max = Math.floor(document.querySelector(".maximo").value);

  Math.floor(Math.random() * (max - min) + min);

  if (min < max) {
    var numeroSorteado = Math.floor(Math.random() * (max - min + 1)) + min;
    document.getElementById("resultado").innerText =
      "Número Sorteado: " + numeroSorteado;
  } else {
    document.getElementById("resultado").innerText =
      "Erro: Valor mínimo deve ser menor que o valor máximo";
  }
}
