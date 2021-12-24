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
let sab = "sábado"
let dom = "domingo"

function eFimDeSemana(dia) {
  return  dia === sab || dia ===  dom
}

function eDiaDeSemana (dia){
  return !eFimDeSemana || dia !== sab
}

  function estaFechado(eFeriado, dia, horario) {
    return eFeriado || !eDiaDeSemana(dia) ||(!dentroDoHorarioBancario(horario));
}

// Exercícío 7
// Exercícío 8
// Exercícío 9
// Exercícío 10
// Exercícío 11
// Exercícío 12
