// 3.Procedimentos
// Exercícío 1
program {
  Colocar(Preto)
  Mover(Leste)
  Colocar(Preto)
  Mover(Leste)
  Colocar(Preto)
  Mover(Norte)
  Colocar(Preto)
  Mover(Oeste)
  Colocar(Preto)
  Mover(Oeste)
  Colocar(Preto)
  Mover(Norte)
  Colocar(Preto)
  Mover(Leste)
  Colocar(Preto)
  Mover(Leste)
  Colocar(Preto)
}

// Exercícío 2
procedure DesenharQuadradoPretoDeLado3() {
  Colocar(Preto)
  Mover(Leste)
  Colocar(Preto)
  Mover(Leste)
  Colocar(Preto)
  Mover(Norte)
  Colocar(Preto)
  Mover(Oeste)
  Colocar(Preto)
  Mover(Oeste)
  Colocar(Preto)
  Mover(Norte)
  Colocar(Preto)
  Mover(Leste)
  Colocar(Preto)
  Mover(Leste)
  Colocar(Preto)    
}
program {
  DesenharQuadradoPretoDeLado3()   
}

// Exercícío 3
procedure Colocar3Verdes() {
  Colocar(Verde)
  Colocar(Verde)
  Colocar(Verde)
}
program {
  Colocar3Verdes()   
}

// Exercícío 4
procedure Colocar3Vermelhas() {
  Colocar(Vermelho)
  Colocar(Vermelho)
  Colocar(Vermelho)
}
program {
  Colocar3Vermelhas()   
}

// Exercícío 5
program {
  Colocar3Verdes()  
  Colocar3Verdes()   
  Colocar3Verdes()   
}

// Exercícío 6
procedure DesenharLinhaPreta3() {
  Colocar(Preto)
  Mover(Leste)
  Colocar(Preto)
  Mover(Leste)
  Colocar(Preto)
}

// Exercícío 7
procedure DesenharLinhaPreta3() {
  Colocar(Preto)
  Mover(Leste)
  Colocar(Preto)
  Mover(Leste)
  Colocar(Preto)
  VoltarAtras()
}

// Exercícío 8
procedure DesenharQuadradoPretoDeLado3 (){
  DesenharLinhaPreta3()
  Mover(Norte)
  DesenharLinhaPreta3()
  Mover(Norte)
  DesenharLinhaPreta3()
}

// Exercícío 9
procedure Colocar3(cor) {
  Colocar(cor)
  Colocar(cor)
  Colocar(cor)
}
program {
  Colocar3(Preto)
  Colocar3(Vermelho)
}

// Exercícío 10
procedure Colocar3(cor) {
  Colocar(cor)
  Colocar(cor)
  Colocar(cor)
}
program{
  Colocar3(Verde)
}

// Exercícío 11
procedure DesenharLinha3(cor) {
  Colocar(cor)
  Mover(Leste)
  Colocar(cor)
  Mover(Leste)
  Colocar(cor)
  VoltarAtras()
}

// Exercícío 12
procedure DesenharQuadradoDeLado3(cor) {
  DesenharLinha3(cor)    
  Mover(Norte)
  DesenharLinha3(cor)    
  Mover(Norte)
  DesenharLinha3(cor)    
}

// Exercícío 13

program {
  DesenharLinha3(Verde, Leste)
  Mover(Leste)
  DesenharLinha3(Vermelho, Norte)
  Mover(Norte)
  DesenharLinha3(Preto, Oeste)
  Mover(Oeste)
  DesenharLinha3(Azul, Sul)
}

// Exercícío 14
program {
  DesenharLinha3(Leste, Vermelho)
}

// Exercícío 15
program {
  DesenharLinha3(Verde)
}

// Exercícío 16
procedure Triade(corX, corY, corZ) {
  Colocar(corX)
  Mover(Leste)
  Colocar(corY)
  Mover(Leste)
  Colocar(corZ)
}