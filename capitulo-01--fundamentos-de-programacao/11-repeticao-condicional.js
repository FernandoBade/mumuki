// 11. Repetição condicional
// Exercícío 1
procedure IrAoExtremo(direcao) {
  while (podeMover(direcao)) {
    Mover(direcao)
  }
}

// Exercícío 2
procedure SairDaLinhaVerde(direcao){
  while (haPedras(Verde)){
    if (podeMover(direcao)){
      Mover(direcao)
    }
  }
}

// Exercícío 3
procedure AteOInfinito() {
  while (podeMover(Leste)) {
    Colocar(Vermelho)
  }
}

// Exercícío 4
procedure PraFrenteEPraTras() {
  while (podeMover(Norte)) {
    Mover(Norte)
    Colocar(Verde)
    Mover(Sul)
  }
}

// Exercícío 5
procedure DesdobrarTapetePara(direcao) {
  while (podeMover(direcao)) {
    Mover(direcao)
    Colocar(Vermelho)  
  }
}

// Exercícío 6


// Exercícío 7
// Exercícío 8
// Exercícío 9
// Exercícío 10
// Exercícío 11
// Exercícío 12
