// 3.Variáveis e Procedimentos
// Exercícío 1
=> "woww!"

// Exercícío 2
sou uma função que imprime por tela
e estou por devolver o valor 5
=> 5

// Exercícío 3
function linhasAquarelaDoBrasil (){
  imprimir ("Brasil, meu Brasil Brasileiro,")
  imprimir("Meu mulato inzoneiro,")
  imprimir("Vou cantar-te nos meus versos:")
  imprimir("O Brasil, samba que dá")
  imprimir("Bamboleio, que faz gingar;")
  imprimir("O Brasil do meu amor,")
  imprimir("Terra de Nosso Senhor.")
  return 0
}

// Exercícío 4
function linhasAquarelaDoBrasil() {
    imprimir("Brasil, meu Brasil Brasileiro,");
    imprimir("Meu mulato inzoneiro,");
    imprimir("Vou cantar-te nos meus versos:");
    imprimir("O Brasil, samba que dá");
    imprimir("Bamboleio, que faz gingar;");
    imprimir("O Brasil do meu amor,");
    imprimir("Terra de Nosso Senhor.");
}

// Exercícío 5
imprimir("Jogando dados");

let primeiraJogada = jogarDado();
let segundaJogada = jogarDado();
let terceiraJogada = jogarDado();

imprimir("A primeira jogada deu " + primeiraJogada);
imprimir("A segunda jogada deu " + segundaJogada); 
imprimir("A terceira jogada deu " + terceiraJogada);

// Exercícío 6
function elefantesEquilibristas(elefantes, x){
let verso = " elefantes se balançavam"
return elefantes + verso
}

// Exercícío 7
let reaisNaMinhaCarteira = 100

function carteira(){
  return reaisNaMinhaCarteira
}

// Exercícío 8
function elevadorSobrecarregado(pessoas){
  if ((pessoas * pesoMedioPesoaEmQilogramas) > 300){
    return true
  }
}

// Exercícío 9
function aumentarFortuna (){
  reaisNaMinhaCarteira *= 2
}

// Exercícío 10
for(let numero of faixa(1, 4)) {
   imprimir("****")
}
