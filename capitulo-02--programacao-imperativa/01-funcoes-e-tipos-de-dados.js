// Capítulo 2: Programação imperativa
// 1.Funções e Tipos de Dados
// Exercícío 1

function metade(numero) {
    return numero / 2;
 }
 
// Exercícío 2

function anterior(numero){
    return numero - 1
  }
  
  function triplo(numero){
    return numero * 3
  }
  
  function anteriorDoTriplo(numero){
   return  triplo(numero) - (anterior(numero)) + numero - 2
    
   }
   
// Exercícío 3
4 + 5
absoluto(-20)
funcaoLouca(1, 2, 3)

// Exercícío 4
function ePar(i){
if (i%2 === 0){
   return true
}
}

// Exercícío 5
5 + 6 
5 === 6 
8 > 6 
!true
false / true

// Exercícío 6
function dobroDoAbsoluto(numero) {
   return 2 * Math.abs(numero);
}

// Exercícío 7
function extrair(saldo, quantidade) {
  return Math.max(saldo - quantidade, 0);
}

// Exercícío 8
function quantoCarrega(atual, carregamento){
  return Math.min(25 - atual, carregamento)
}

// Exercícío 9
function estaEntre(x, y, z){
    return x < y && x > z || y === 0
}

function estaForaDoAlcance(x, y, z){
  return x < y || x > z
}

// Exercícío 10
function eFimDeSemana(dia){
return (dia === "sábado" || dia === "domingo");
}

// Exercícío 11
function longitudeNomeCompleto(x, y){
  return (longitude(x) + longitude(y) + 1).toString()
}

// Exercícío 12
function gritar(x){
  return ("¡"+ convertirEmMaiuscula(x) + "!")
}

// Exercícío 13
function maximo(x, y){
  if (x > y){
    return x
  } else if (x < y){
    return y
  }
}

// Exercícío 14
function signo(x){
  if (x > 0){
    return 1
  } if (x === 0){
    return 0
  } if (x < 0){
    return -1
  }
}

// Exercícío 15
function eNumeroDeSorte(x){
  return (x > 0) && (x!==15) && (x%2 === 0 || x%3 === 0)
}

// Exercícío 16
function medalhaDeAcordoComPosto(x){
  if (x === 1){
    return "ouro"
  } if (x === 2){
    return "prata"
  } if (x === 3){
    return "bronze"
  } else {
    return "nada"
  }
}
