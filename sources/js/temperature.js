"use stric";


function Medida(){
  this.valor;
  this.tipo;

  var datosEntrada = arguments[0];
  var ndatosEntrada = datosEntrada.length;
  switch (ndatosEntrada) {
    case 1: // only one argument.
      var regexp = /([+-]?\d+(?:\.\d*)?(?:\s*[e]\d+)?)\s*([fFcC])/;
      var aux = datosEntrada[0].match(regexp);
      this.valor = aux[1];
      this.tipo = aux[2];
      break;
    case 2:
      this.valor = datosEntrada[0];
      this.tipo = datosEntrada[1];
      break;
    default:
      alert("Error interno");
  }
}

function Temperatura(){
  Medida.call(this,arguments);
}

Temperatura.prototype.convert = function(){
  if(this.tipo === 'C' || this.tipo ==='c'){
    var aux = this.valor * (9/5) + 32;
    return (aux.toFixed(1) + 'F');
  }else{
    var aux = (this.valor - 32) * (5/9);
    return (aux.toFixed(1) + 'C');
  }
}

function convertir(){
  temp = new Temperatura(entrada.value);
  salida.innerHTML = temp.convert();
}
