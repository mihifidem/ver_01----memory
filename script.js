var temporal = 0;
var operacion = '';
memory = 0;

function clearInput() {
  if (input.value != '') {
    input.value = '';
  }else {
    temporal = 0;
    operacion = '';
  }
}

function pi(){
  input.value = 3.141596
}

function raiz(){
  input.value = input.value ** 0.5;
}

function cuadrado() {
  input.value = input.value ** 2;
}

function cubo() {
  input.value = input.value ** 3;
}

function inverso() {
  input.value = input.value * -1;
}

function porciento() {
  input.value = input.value / 100;
}


function add(num){
  if (num == 0) {
    if (input.value[input.value.length - 1] != '0' || input.value.length > 1) {
      input.value = input.value + num;
    }
  } else if (num == '.') {
    if (input.value[input.value.length - 1] != '.' && input.value != '') {
      input.value = input.value + num;
    }
  } else {
    input.value = input.value + num;  
  }

                    
}                 

function operacionFunction(operador) {
  operacion = operador;
  temporal = input.value;
  input.value = '';
}

function igual() {
  if (operacion != '') {
    input.value = eval(temporal + operacion + input.value);
  }                    
}

function addMemory(){
  memory += parseFloat(input.value);
}

function readMemory(){
  input.value = memory;
}

function lessMemory(){
  memory -= parseFloat(input.value);
}

function clearMemory(){
  memory = 0;
}
