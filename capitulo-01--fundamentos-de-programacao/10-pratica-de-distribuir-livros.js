// 10. Prática de Distribuir Livros
// Exercícío 1
function corEstudantes(){
  return (Azul)
}

function quantidadeEstudantes(){
  return (nroPedras(corEstudantes()))
}

// Exercícío 2
function corLivros(){
  return (Preto)
}
  
function quantidadeLivros(){
  return(nroPedras(corLivros()))
 }

// Exercícío 3
procedure EntregarLivros(quantidadeLivros){

  ColocarN(quantidadeLivros, corLivros())
}

// Exercícío 4
procedure EntregaroQueDer(quantidadeLivros){
  if (quantidadeLivros <= 50){
    EntregarLivros(quantidadeLivros)
} if (quantidadeLivros > 50){
  EntregarLivros(50)
}
}

// Exercícío 5
function corSobrantes(){
  return (Verde)
}

function corFaltantes(){
  return (Vermelho)
}

procedure TransmitirSituacao(){
  if (quantidadeLivros() > quantidadeEstudantes()){
    ColocarN((quantidadeLivros() - quantidadeEstudantes()),  corSobrantes())
} if (quantidadeLivros() < quantidadeEstudantes()){
    ColocarN((quantidadeEstudantes() - quantidadeLivros()), corFaltantes())
}  
}

// Exercícío 6
procedure FazerTrabalhoNaEscola (){
  if (quantidadeLivros() > quantidadeEstudantes()){
     TransmitirSituacao()
} if ((quantidadeEstudantes() - quantidadeLivros())<= 50){
     EntregaroQueDer(quantidadeEstudantes() - quantidadeLivros())
} if ((quantidadeEstudantes() - quantidadeLivros())> 50){
     EntregaroQueDer(quantidadeEstudantes() - quantidadeLivros())
       TransmitirSituacao()
}
}

// Exercícío 7
function haEscolaPublica(){
  return (quantidadeEstudantes() > 0)
  }
  
// Exercícío 8
procedure TrabalharNaRua(comprimento){
  repeat(comprimento) {
    Mover(Leste)
    if (haEscolaPublica()){
      FazerTrabalhoNaEscola()
    }
  }MoverN(comprimento, Oeste)
}  

// Exercícío 9
procedure PercorrerCidade(){
  repeat(nroPedras(Vermelho)){
    Mover(Norte) 
    TrabalharNaRua(nroPedras(Verde))
}
}
