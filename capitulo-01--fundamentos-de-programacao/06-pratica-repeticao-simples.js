// 6. Prática da Repetição Simples
// Exercícío 1
procedure Diagonal4AzulVoltando(){
   Diagonal4Azul()
   repeat(4){
     Mover(Sul)
     Mover(Oeste)
  }
}

// Exercícío 2
procedure BandaDiagonal4(){
  repeat(3){
  Diagonal4AzulVoltando()
  Mover(Norte)
} repeat(3){Mover(Sul)}
}

// Exercícío 3
procedure ColocarN(quantidade, cor){
  repeat(quantidade){
    Colocar(cor)
}
}

// Exercícío 4
procedure FimDaDitaduraMilitar (){
  ColocarN(15, Azul)
  Mover(Leste)
  ColocarN(1, Verde)
  Mover(Leste)
  ColocarN(1985, Preto)
}


// Exercícío 5
procedure Data(dia, mes, ano){
  ColocarN(dia, Azul)
  Mover(Leste)
  ColocarN(mes, Verde)
  Mover(Leste)
  ColocarN(ano, Preto)
}

// Exercícío 6
procedure MoverN(quantidade, direcao){
  repeat(quantidade){
    Mover(direcao)
  }
}

// Exercícío 7
procedure DesenharRelogio(raio){
  MoverN(raio, Norte)
  ColocarN(12, Vermelho)  
  MoverN(2*raio, Sul)
  ColocarN(6, Vermelho)
  MoverN(raio, Norte)
  ColocarN(0, Vermelho) 
  MoverN(raio, Oeste)
  ColocarN(9, Vermelho)  
  MoverN(2*raio, Leste)
  ColocarN(3, Vermelho)
  MoverN(raio, Oeste)
}

// Exercícío 8
procedure LinhaLestePesada(peso, cor, comprimento){
  repeat(comprimento){
    ColocarN(peso, cor)
    MoverN(1,Leste)
 }
  repeat(comprimento){
  Mover(Oeste)
  }
}

// Exercícío 9
procedure Azulejo(){
  ColocarN(1, Verde)
  ColocarN(5, Preto)
  ColocarN(9, Vermelho)
 }

procedure GuardaDe5(){
  repeat(4){
    Azulejo()
    Mover(Leste)
  } Azulejo()
}

// Exercícío 10
procedure GuardaEmL(){
  repeat(2){
  ColocarAzulejo()
  MoverN (1, Leste)
} ColocarAzulejo()
  MoverN(2, Oeste)
  MoverN(1, Norte)  
  ColocarAzulejo()
  MoverN(1, Norte)  
  ColocarAzulejo()
  MoverN(2, Sul)  
}

// 7. Expressões
// Exercícío 1
// Exercícío 2
// Exercícío 3
// Exercícío 4
// Exercícío 5
// Exercícío 6
// Exercícío 7
// Exercícío 8
// Exercícío 9
// Exercícío 10
// Exercícío 11


// 8. Alternativa Condicional
// Exercícío 1
// Exercícío 2
// Exercícío 3
// Exercícío 4
// Exercícío 5
// Exercícío 6
// Exercícío 7
// Exercícío 8
// Exercícío 9


// 9. Funções
// Exercícío 1
// Exercícío 2
// Exercícío 3
// Exercícío 4
// Exercícío 5
// Exercícío 6
// Exercícío 7
// Exercícío 8
// Exercícío 9
// Exercícío 10
// Exercícío 11
// Exercícío 12
// Exercícío 13
// Exercícío 14


// 10. Prática de Distribuir Livros
// Exercícío 1
// Exercícío 2
// Exercícío 3
// Exercícío 4
// Exercícío 5
// Exercícío 6
// Exercícío 7
// Exercícío 8
// Exercícío 9


// 11. Repetição condicional
// Exercícío 1
// Exercícío 2
// Exercícío 3
// Exercícío 4
// Exercícío 5
// Exercícío 6
// Exercícío 7
// Exercícío 8
// Exercícío 9
// Exercícío 10
// Exercícío 11
// Exercícío 12


// 12. Variáveis
// Exercícío 1
// Exercícío 2
// Exercícío 3
// Exercícío 4
// Exercícío 5
// Exercícío 6
// Exercícío 7
// Exercícío 8
// Exercícío 9
// Exercícío 10
// Exercícío 11
// Exercícío 12