let prevRes = document.getElementById("preview");
let inputOp = document.getElementById("operacion");
let primero;
let segundo;
let resultado;
let operacion;

// Operaciones
let suma = document
  .querySelector("#suma")
  .addEventListener("click", function (e) {
    operacion = "+";
    primero = parseFloat(inputOp.value);
    document.getElementById("formulario").reset();
  });

let resta = document
  .querySelector("#menos")
  .addEventListener("click", function (e) {
    operacion = "-";
    primero = parseFloat(inputOp.value);
    document.getElementById("formulario").reset();
  });

let multi = document
  .querySelector("#multi")
  .addEventListener("click", function (e) {
    operacion = "*";
    primero = parseFloat(inputOp.value);
    document.getElementById("formulario").reset();
  });

let division = document
  .querySelector("#division")
  .addEventListener("click", function (e) {
    operacion = "/";
    primero = parseFloat(inputOp.value);
    document.getElementById("formulario").reset();
  });

let porcentaje = document
  .querySelector("#porcentaje")
  .addEventListener("click", function (e) {
    operacion = "%";
    primero = parseFloat(inputOp.value);
    document.getElementById("formulario").reset();
  });

let limpiar = document
  .querySelector("#ce")
  .addEventListener("click", function (e) {
    document.getElementById("formulario").reset();
  });

  let borrar = document
  .querySelector("#borrar")
  .addEventListener("click", function (e) {
    inputOp.value = inputOp.value.substring(0, inputOp.value.length - 1);
  });  

let igual = document
  .querySelector("#igual")
  .addEventListener("click", function (e) {
    segundo = parseFloat(inputOp.value);

    switch (operacion) {
      case "+":
        resultado = parseFloat(primero) + parseFloat(segundo);
        inputOp.value = resultado.toString();
        break;
      case "-":
        resultado = primero - segundo;
        inputOp.value = resultado.toString();
        break;
      case "*":
        resultado = primero * segundo;
        inputOp.value = resultado.toString();
        break;
      case "/":
        resultado = primero / segundo;
        inputOp.value = resultado.toString();
        break;
      case "%":
        resultado = (primero * segundo) / 100;
        inputOp.value = resultado.toString();
        break;
    }
  });

// Botones de Números
let uno = document
  .querySelector("#uno")
  .addEventListener("click", function (e) {
    inputOp.value = inputOp.value + e.target.value;
  });

let dos = document
  .querySelector("#dos")
  .addEventListener("click", function (e) {
    inputOp.value = inputOp.value + e.target.value;
  });

let tres = document
  .querySelector("#tres")
  .addEventListener("click", function (e) {
    inputOp.value = inputOp.value + e.target.value;
  });

let cuatro = document
  .querySelector("#cuatro")
  .addEventListener("click", function (e) {
    inputOp.value = inputOp.value + e.target.value;
  });

let cinco = document
  .querySelector("#cinco")
  .addEventListener("click", function (e) {
    inputOp.value = inputOp.value + e.target.value;
  });

let seis = document
  .querySelector("#seis")
  .addEventListener("click", function (e) {
    inputOp.value = inputOp.value + e.target.value;
  });

let siete = document
  .querySelector("#siete")
  .addEventListener("click", function (e) {
    inputOp.value = inputOp.value + e.target.value;
  });

let ocho = document
  .querySelector("#ocho")
  .addEventListener("click", function (e) {
    inputOp.value = inputOp.value + e.target.value;
  });

let nueve = document
  .querySelector("#nueve")
  .addEventListener("click", function (e) {
    inputOp.value = inputOp.value + e.target.value;
  });

let cero = document
  .querySelector("#cero")
  .addEventListener("click", function (e) {
    inputOp.value = inputOp.value + e.target.value;
  });

let punto = document
  .querySelector("#punto")
  .addEventListener("click", function (e) {
    inputOp.value = inputOp.value + e.target.value;
  });
