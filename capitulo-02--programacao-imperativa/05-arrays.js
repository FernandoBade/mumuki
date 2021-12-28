// 5.Arrays
// Exercícío 1
  seriesFavoritasDaAna
=> ["Game of Thrones","Breaking Bad","House of Cards"]
  seriesFavoritasDoHector
=> ["The Walking Dead","Black Mirror"]
  ["olá","mundo!"]
=> ["olá","mundo!"]
  ["olá","olá"]
=> ["olá","olá"]

// Exercícío 2
arraysIguais(["olá", "mundo"], ["mundo", "olá"])
=> false
  arraysIguais(["olá", "mundo"], ["olá", "mundo"])
=> true
  arraysIguais(["olá", "mundo"], ["olá", "todo", "mundo"])
=> false
  ["olá", "mundo"] === ["mundo", "olá"]
=> false
  pessoas
pessoas;
^

ReferenceError: pessoas is not defined
  ["camilla", "julio"] === pessoas
["camilla", "julio"] === pessoas
^

ReferenceError: pessoas is not defined
  pessoas === pessoas
pessoas === pessoas
^

ReferenceError: pessoas is not defined

// Exercícío 3
  numerosDaLoteria
=> [2,11,17,32,36,39]
  saiuCara
=> [false,false,true,false]
  [[1, 2, 3], [4, 5, 6]]
=> [[1,2,3],[4,5,6]]

// Exercícío 4
 let arrayVazio = []
=> undefined
  arrayVazio
=> []

// Exercícío 5
pertences
=> ["espada","escudo","torcha"]
  pertences.push ("besta")
=> 4
  pertences
=> ["espada","escudo","torcha","besta"]
 pertences.pop()
=> "besta
pertences
=> ["espada","escudo","torcha"]

// Exercícío 6
let umArray = [1, 2, 3];
let outroArray = [4, 5];

function mover (umArray, outroArray){
  return outroArray.push(umArray.pop())
}

// Exercícío 7
diasDeTrabalho.indexOf("osvaldo")
=> -1

// Exercícío 8
function contem(array, i){
return array.indexOf(i) >= 0
}

// Exercícío 9
  mesesDoAno[11]
=> "dezembro"
  mesesDoAno[50]
=> undefined

// Exercícío 10
let medalha = ["nada", "ouro", "prata", "bronze"]
function medalhaDeAcordoComPosto(posicao){
  if (posicao===1 || posicao===2 || posicao===3) {
    return medalha[posicao]
  } else {
    return "nada"
  }
}

// Exercícío 11
somatoriaLucroSemestre (umTrimestre)
somatoriaLucroSemestre (umTrimestre);
^

ReferenceError: umTrimestre is not defined

// Exercícío 12
 lucroTotal([2, 3])
=> 5
   lucroTotal([2, 3, 1, 8, 8, -1])
=> 21
   lucroTotal([])
=> 0

// Exercícío 13
function lucroTotal4 (umPeriodo) {
  let somatoria = 0;
  somatoria = somatoria + umPeriodo[0];
  somatoria = somatoria + umPeriodo[1];
  somatoria = somatoria + umPeriodo[2];
  somatoria = somatoria + umPeriodo[3];
  return somatoria;
}

// Exercícío 14
 lucroTotal([])
=> 0
  lucroTotal([100])
=> 100
  lucroTotal([100, 2])
=> 102
  lucroTotal([2, 10, -20])
=> -8
  lucroTotal([2, 10, -20, 0, 0, 10, 10])
=> 12

// Exercícío 15
function quantidadeDeMesesComLucro(umPeriodo) {
  let quantidade = 0
for (let mes of umPeriodo) {
    if(mes > 0){
      quantidade++
    }
  }return quantidade;
}

// Exercícío 16

function quantidadeDeMesesComPerda(umPeriodo) {
  let quantidade = 0
for (let mes of umPeriodo) {
    if(mes < 0){
      quantidade++
    }
  }return quantidade;
}

// Exercícío 17
function saldosDosMesesComLucro(umPeriodo) {
  let saldos = []
  for (let i = 0; i < umPeriodo.length; i++) {
    if (umPeriodo[i] > 0) {
      saldos.push(umPeriodo[i])
    }
  }return saldos;
}

// Exercícío 18
function saldosDosMesesComLucro(umPeriodo) {
  let saldos = []
  for (let i = 0; i < umPeriodo.length; i++) {
    if (umPeriodo[i] > 0) {
      saldos.push(umPeriodo[i])
    }
  }return saldos;
}

// Exercícío 19
let numero = ["1", "2", "3", "4", "5","6", "7", "10", "11", "12"]
function naipeDoTruco(naipe) {
  let cartas = []
  for (let i = 0; i < numero.length ; i++) {
    cartas.push(numero[i] + " de " + naipe)
  }return cartas
}
