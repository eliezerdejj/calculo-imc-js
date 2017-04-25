
function calcular() {
    var sexo = document.formulario.sexo.value;
    var peso = document.formulario.peso.value;
    var altura = document.formulario.altura.value;

    var imc = peso / (altura * altura);

    if (sexo == 'Masculino') {
        if (imc < 20.7) {
            alert("Abaixo do peso");
        } else if (imc < 26.4) {
            alert("Peso Normal");
        } else {
            alert("Acima do peso");
        }
    } else {
      if (imc < 19.1) {
          alert("Abaixo do peso");
      } else if (imc < 25.8) {
          alert("Peso Normal");
      } else {
          alert("Acima do peso");
      }
    }
}
