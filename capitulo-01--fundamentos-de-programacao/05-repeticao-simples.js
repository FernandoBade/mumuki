// 5.Repetição Simples
// Exercícío 1
procedure MoverOeste10() {
  repeat(10) {
    Mover(Oeste)
  }
}

// Exercícío 2
procedure MoverOeste10() {
  repeat(10) {
    Mover(Oeste)
  }
}

// Exercícío 3
procedure MoverOeste5() {
  repeat(5) {
    Mover(Oeste)
  }
}

// Exercícío 4
procedure Colocar3AoNordeste(){
  Mover(Norte)
  Mover(Leste)
  repeat(3) {
   Colocar(Preto)
  }
}

// Exercícío 5
procedure ColocarAzulLonge(){
  repeat(4) {
    Mover(Leste)
  }
  Colocar(Azul)
}

// Exercícío 6
procedure DesenharLinhaPreta6(){
  repeat(6){
    Colocar(Preto)
    Mover(Leste)
  }
}

// Exercícío 7
procedure LinhaVermelha4() {
  repeat(4) {
   Colocar(Vermelho)
   Mover(Norte)
  }
}

// Exercícío 8
procedure Diagonal4Azul (){
  repeat(4) {
   Colocar(Azul)
   Mover(Norte)
   Mover(Leste)
  }
}

// Exercícío 9
procedure DiagonalPesada4Azul  (){
  repeat(4) {
   repeat(21){Colocar(Azul)}
   Mover(Norte)
   Mover(Leste)
  }
}

// Exercícío 10
procedure LinhaPreta4Leste() {
  repeat(3) {
    Colocar(Preto)
    Mover(Leste)
  } 
    Colocar(Preto)
}

// Exercícío 11
procedure QuadradoPreto4 (){
  repeat(3){
     LinhaPreta4Leste()
     repeat(3) {Mover(Oeste)}
     Mover(Norte)
} LinhaPreta4Leste()
}