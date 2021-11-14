// 9. Funções
// Exercícío 1
procedure MoverConformePedras() {
  if (nroPedras(Azul) + nroPedras(Preto) + nroPedras(Vermelho) + nroPedras(Verde) > 10) {
    Mover(Leste)
  } else {
    Mover(Norte)
  }
}

// Exercícío 2
function nroPedrasTotal() {
  return (nroPedras(Azul) + nroPedras(Preto) + nroPedras(Vermelho) + nroPedras(Verde))
}

// Exercícío 3
procedure MoverConformePedras() {
  if (nroPedrasTotal() > 10) {
    Mover(Leste)
  } else {
    Mover(Norte)
  }
}

// Exercícío 4
function todasMenos(cor) {
  return (nroPedrasTotal() - nroPedras(cor))
}

// Exercícío 5
function vermelhoEDominante(){
  return (nroPedras(Vermelho) > todasMenos(Vermelho))
}

// Exercícío 6
function eLivreLados(){
  return (podeMover(Oeste) && podeMover(Leste))
}

// Exercícío 7
function haAlgumaPedra(){
  return (haPedras(Vermelho) || haPedras(Preto) || haPedras(Verde) || haPedras(Azul))
}

// Exercícío 8
function estouEmUmaBorda(){
  return (not podeMover(Norte) || not podeMover(Sul) || not podeMover(Leste) || not podeMover(Oeste))
}

// Exercícío 9
function haPedrasAo(direcao, cor){
  Mover(direcao)
  return(haPedras(cor))
}

// Exercícío 10
function haPedrasAo(direcao, cor){
  Mover(direcao)
  return(haPedras(cor))
}

// Exercícío 11
function haPedrasLongeAo(direcao, cor, distancia){
  MoverN(distancia, direcao)
  return(haPedras(cor))
}

// Exercícío 12
function estouRodeadoDe(cor){
  return (haPedrasAo(Norte, cor) &&
         haPedrasAo(Sul, cor) &&  
         haPedrasAo(Leste, cor) &&
         haPedrasAo(Oeste, cor)) 
}

// Exercícío 13
function haTabuleiroEPedrasAo(direcao, cor){
  return (podeMover(direcao) && haPedrasAo(direcao, cor))
}

// Exercícío 14
function estouLimitada(){
   return (estouEmUmaBorda() || estouRodeadoDe(Vermelho))
}
