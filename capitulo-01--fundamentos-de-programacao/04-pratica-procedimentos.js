// 4.Prática Procedimentos
// Exercícío 1
procedure ColocarUmaDeCada() {
  Colocar(Vermelho);
  Colocar(Verde);
  Colocar(Azul);
  Colocar(Preto)
}

procedure MoverOeste3() {
  repeat(3){
    Mover(Oeste) }
}

procedure ColocarLinhaMulticolorida4() {
  ColocarUmaDeCada();
  Mover(Leste)
  ColocarUmaDeCada();
  Mover(Leste)
  ColocarUmaDeCada();
  Mover(Leste)
  ColocarUmaDeCada();
  MoverOeste3()
}

// Exercícío 2
procedure ColocarQuadradoMulticolorido4(){
  ColocarLinhaMulticolorida4()
  Mover(Norte)
  ColocarLinhaMulticolorida4()
  Mover(Norte)
  ColocarLinhaMulticolorida4()
  Mover(Norte)
  ColocarLinhaMulticolorida4()
  Mover(Sul)
  Mover(Sul)
  Mover(Sul)
 }

// Exercícío 3
procedure  ColocarADistancia3(x, y){
  repeat(3) { Mover(y) }
  Colocar(x)
}

// Exercícío 4
procedure  ColocarPontos3 (cor){
  Colocar(cor);
  ColocarADistancia3(cor, Leste)
  ColocarADistancia3(cor, Leste)
  repeat(6) {Mover(Oeste)}
}

// Exercícío 5
procedure ColocarPontos3Recarregado(cor){
  Colocar(cor)
  ColocarADistancia3(cor, Leste)
  Colocar(cor)
  ColocarADistancia3(cor, Leste)
  Colocar(cor)
  Colocar(cor)
}

// Exercícío 6
program {
  ColocarADistancia3(Verde, Sul)
  Mover3(Oeste)
  ColocarADistancia3(Azul, Norte)
  Mover3(Norte)
  ColocarADistancia3(Preto, Leste)
  Mover3(Leste)
  ColocarADistancia3(Vermelho, Sul)
  Mover3(Oeste)
}

// Exercícío 7
program {
  ColocarPontos3(Azul)
  Mover(Leste)
  ColocarPontos3(Preto)
  Mover(Leste)
  ColocarPontos3(Verde)
  Mover(Norte)
  Mover(Oeste)
  ColocarPontos3(Vermelho)
  Mover(Oeste)
  Mover(Sul)
}

// Exercícío 8
procedure Aspas(cor, direcao) {
  Mover(direcao)
  Colocar(cor)
  Mover(direcao)
  Colocar(cor)
  Colocar(cor)
  Mover(direcao)
  Colocar(cor)
  Colocar(cor)
  Colocar(cor)
}

procedure VoltarMeio(direcao){
  repeat (3) {Mover(direcao)}
}

program {
  Aspas(Preto, Leste)
  VoltarMeio(Oeste)
  Aspas(Preto, Norte)
  VoltarMeio(Sul)
  Aspas(Preto, Oeste)
  VoltarMeio(Leste)
  Aspas(Preto, Sul)
  VoltarMeio(Norte)
}

// Exercícío 9
procedure VermelhoABorda (){
  IrABorda(Norte)
  IrABorda(Oeste)
  Colocar(Vermelho)
}

// Exercícío 10
procedure CriarVaso(cor){
  Colocar(cor)
  Mover(Leste)
  Colocar(cor)
  Mover(Norte)
  Colocar(cor)
  Mover(Oeste)
  Colocar(cor)
  Mover(Sul)
}

program{
  CriarVaso(Vermelho)
  IrABorda(Leste)
  Mover(Oeste)
  CriarVaso(Azul)
  IrABorda(Norte)
  Mover(Sul)
  CriarVaso(Verde)
  IrABorda(Oeste)
  CriarVaso(Preto)
}