// 4.Lógica booleana
// Exercícío 1
let camaCima = true;

function brincarNoHospital (){
  camaCima = !camaCima
}

// Exercícío 2
function eMaiorDeIdade(numero){
  return numero >= 18
}

function eMenorDeIdade(numero){
  return !eMaiorDeIdade(numero)
}

// Exercícío 3
function ePeripatetico(x, y, z){
  let profissao = "filósofo"
  let nacionalidade = "grego"
  let anda = 2
  
  return x === profissao && y === nacionalidade && z > 2
}

// Exercícío 4
   ePeripatetico("filosofo", "grego", 5)
=> true
   ePeripatetico("atleta", "brasileiro", 10)
=> false
   ePeripatetico("filosofo", "brasileiro", 3)
=> false
   ePeripatetico("professor", "canadense", 1)
=> false
   
// Exercícío 5
   ganhou(true, 25)
=> true
   ganhou(false, 30)
=> true
   ganhou(false, 20)
=> false
   ganhou(true, 31)
=> true

// Exercícío 6
let sab = "sabado"
let dom = "domingo"

function eFimDeSemana(dia) {
  return  dia === sab || dia === dom
}

function eDiaDeSemana (dia){
  return !eFimDeSemana
}

function estaFechado(eFeriado, dia, horario) {
  return eFeriado || eFimDeSemana(dia) || !dentroDoHorarioBancario(horario)
}

// Exercícío 7
function mesmaMae(nome1,nome2){
  return maeDe(nome1) === maeDe(nome2);
}

function mesmoPai(nome1,nome2){
  return paiDe(nome1)===paiDe(nome2);
}

function mesmosPais(nome1,nome2){
  return mesmaMae(nome1,nome2) && mesmoPai(nome1,nome2);
}

function meioIrmaos(nome1,nome2){
  return mesmaMae(nome1,nome2)&& !mesmosPais(nome1,nome2) || mesmosPais(nome1,nome2) && !mesmosPais(nome1,nome2);
}

// Exercícío 8
   meioIrmaos(arcadio, aurelianoJose)
=> true
   meioIrmaos(aurelianoSegundo, remedios)
=> false
   meioIrmaos(aurelianoJose, remedios)
=> false

// Exercícío 9
function xor(x,y){
  return x !== y
}

// Exercícío 10
   pagaComCartao(true, "visa", 320)
=> false
   pagaComCartao(false, "visa", 80)
=> true
   pagaComCartao(true, "mastercard", 215)
=> false
   pagaComCartao(true, "mastercard", 32)
=> true
   
// Exercícío 11
function podeSeAposentar(idade, sexo, anosContribuicao){
  return (idade >= 60 && sexo ==="F") && anosContribuicao >=30 || (idade >= 65 && sexo ==="M") && anosContribuicao >=30
}

// Exercícío 12
function podeSubir (altura, acompanhada, cardiaco){
  return ((altura >= 1.5) || (altura >= 1.2 && acompanhada)) && !cardiaco
}
