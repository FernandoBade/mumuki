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
procedure LevantarTapetePara(direcao){
  while (podeMover(direcao)) {
    Mover(direcao)
    LimparERetirarTapete() 
  }
}

procedure LimparERetirarTapete(){
  RetirarTodas(Verde)
  RetirarTodas(Azul)
  RetirarTodas(Preto)
  RetirarTodas(Vermelho)
}

// Exercícío 7
function haParedeAo(direcao){
  while (podeMover(direcao)){
    Mover(direcao)
  }return (haParede())
}

// Exercícío 8
procedure ProcurarComida(direcao){
  while (not haPlantaComestivel()){
    Mover(direcao)
  }
}

// Exercícío 9
procedure EscalarAteDescanso(){
  while(haParedeAo(Leste)){
    Mover(Norte)
  } Mover(Leste)
}

// Exercícío 10
procedure DesmatarPara(direcao){
  while(podeMover(direcao)){
    UsarFoice()
    Mover(direcao)
  } UsarFoice()
}

// Exercícío 11


// Exercícío 12
