// 8. Alternativa Condicional
// Exercícío 1
procedure RetirarAzulComMedo() {
  Retirar(Azul)
}

// Exercícío 2
procedure RetirarAzulComMedo() {
  if (haPedras(Azul)) {
    Retirar(Azul)
  } 
}

// Exercícío 3
procedure RetirarVermelhaComMedo() {
  if (haPedras(Vermelho)) {
    Retirar(Vermelho)
  }
}

// Exercícío 4
procedure CompletarCelula() {
  if (haPedras(Preto)) {
    Colocar(Vermelho)
    Colocar(Azul)
    Colocar(Verde)
  }
}

// Exercícío 5
program{
  if (podeMover(Leste)){
    Mover(Leste)
  }
}

// Exercícío 6
program {
  if((nroPedras(Preto) < 5)){
    Colocar(Preto)
    }
}

// Exercícío 7
procedure GarantirUmaPedraVerde(){
  if (not haPedras(Verde)){
    Colocar(Verde)
  }
}

// Exercícío 8
procedure MoverComoSeja() {
    if (podeMover(Oeste)) {
        Mover(Oeste)
    } else {
        Mover(Norte)
    }
}

// Exercícío 9
procedure AcenderOuApagarLuz(){
  if(haPedras (Verde)){
    Retirar (Verde)
    Colocar(Preto)
 }else {
   Retirar (Preto)
   Colocar(Verde)
    }
}
