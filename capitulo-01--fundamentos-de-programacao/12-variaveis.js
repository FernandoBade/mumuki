// 12. Variáveis
// Exercícío 1
procedure CopiarVerdesAoNorte() {
  Mover(Norte)
  ColocarN(pedrasVerdesAoSul(), Verde)
}

function pedrasVerdesAoSul() {
  Mover(Sul)
  return (nroPedras(Verde))
}

// Exercícío 2
procedure CopiarVerdesAoNorte() {
  quantidadePedrasNaCelulaInicial := nroPedras(Verde)
  Mover(Norte)
  ColocarN(quantidadePedrasNaCelulaInicial, Verde)
}

// Exercícío 3
function corLouca() {
  corzinha := Verde //resposta: Verde
  return (corzinha)
}

// Exercícío 4
Sul

// Exercícío 5
function boomBoomKid() {
  return (umaVariavelQueNaoExiste)
} //[2:10]: A variável "umaVariavelQueNaoExiste" não está definida.


// Exercícío 6
function quemGanhou(){
  if (golsVasco() < golsFlamengo()){
    vencedor := Vermelho
  } if (golsFlamengo() < golsVasco()){
    vencedor := Preto
  }return (vencedor)
}

// Exercícío 7
function maximo (x, y){
  if (x > y){
    resultado := x
  } if (y > x){
    resultado := y
  } return (resultado)
}

// Exercícío 8
function maximaQuantidadeDePedras(){
  atual := nroPedrasTotal ()
  vizinha := 0
  if (nroPedrasTotal () >= 0){
    atual := nroPedrasTotal ()
  } Mover(Leste)
  if (nroPedrasTotal () >= 0){
    vizinha := nroPedrasTotal()
  }return (maximo(atual, vizinha))
} 

// Exercícío 9
55

// Exercícío 10
function numero(){
  primeiroNumero := algarismo() * 100
  Mover(Leste)
  segundoNumero := primeiroNumero + algarismo() * 10
  Mover(Leste)
  terceiroNumero := segundoNumero + algarismo()
  return(terceiroNumero)
}

// Exercícío 11
procedure ColherHorta() {
  tomatesColhidos := 0
  repeat (3) {
    MoverN(1, Leste)
    tomatesColhidos := tomatesColhidos + quantidadeTomates()
    ColherPlanta()
  } MoverN(3, Oeste)
  DeixarTomates(tomatesColhidos)
}

// Exercícío 12
function quantoFaltaAte(direcao) {
  distancia := 0

  while (podeMover(direcao)) {
    Mover(direcao)
    distancia := distancia + 1
  } return (distancia)
}
