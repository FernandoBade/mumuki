// 7. Expressões
// Exercícío 1
program {
  ColocarN (3+2, Preto)
}

// Exercícío 2
procedure ColocarSoma(x, y){
  ColocarN(x+y, Vermelho)
}

// Exercícío 3
procedure ContarGente(onibus, carros, bicicletas){
  ColocarN (onibus * 40 + carros * 4 + bicicletas, Verde)
}

// Exercícío 4
procedure MoverComoSalmao(direcao) {
  Mover(oposto(direcao))
}

// Exercícío 5
procedure CaminharDesconfiado(passos){
  MoverN(passos div 2, Leste)
}

// Exercícío 6
procedure ColocarAo(direcao, cor){
  Mover(direcao)
  Colocar(cor)
  Mover(oposto(direcao))
}

// Exercícío 7
procedure Linha(direcao, cor, comprimento) {
  repeat(comprimento) {
    Colocar(cor)
    MoverN(1, direcao)
  } repeat(comprimento){
    Mover(oposto(direcao))
  }
}

// Exercícío 8
procedure Ele(direcao){
  Linha(direcao, Azul, 3)
  Linha(seguinte(direcao), Azul, 3)
}

// Exercícío 9
procedure Seta(direcao){
  MoverN(1, direcao)
  ColocarN(1, Vermelho)
  MoverN(1, seguinte(direcao))
  Mover(oposto(direcao))
  ColocarN(1, Vermelho)
  MoverN(2, previo(direcao))
  ColocarN(1, Vermelho)
  MoverN(1, seguinte(direcao))
}

// Exercícío 10
procedure CopiarVerdesEmVermelhas(){
  ColocarN(nroPedras(Verde), Vermelho)
}

// Exercícío 11
procedure RetirarTodas(cor){
  RetirarN(nroPedras(cor), cor)
}
