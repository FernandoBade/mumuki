// 2.Prática Funções e Tipos de Dados
// Exercícío 1
function quantoCusta (polegadas, memoria){
  return (polegadas * 60) + (memoria * 200) + 1000
}

// Exercícío 2
function meConvem (polegadas, memoria){
  return polegadas >= 32 && memoria >= 8 && quantoCusta(polegadas, memoria) < 6000
}

// Exercícío 3
function perimetroTriangulo(x, y, z){
  return x + y + z
}

function areaTriangulo (x, y){
  return x * y /2
}

// Exercícío 4
function perimetroQuadrado (lado){
  return lado * 4
}

function areaQuadrado (lado){
  return lado * lado
}

// Exercícío 5
function estaAfinado(frequencia){
  return frequencia === 440
}

// Exercícío 6
function estaPerto(frequencia){
  return frequencia <= 443 && frequencia >= 437 && frequencia !== 440
}

// Exercícío 7
function escreverCartao(pronome, nome, sobrenome){
  return pronome + " " + nome + " " + sobrenome
}

// Exercícío 8
function escreverCartao(pronome, nome, sobrenome, tipo){
  if (tipo){
    return pronome + " " + sobrenome 
  } else {
    return pronome + " " + nome + " " + sobrenome 
  }
}

// Exercícío 9
function escreverCartao(pronome, nome, sobrenome, tipo){
  if (tipo){
    return pronome + " " + sobrenome 
  } else {
    return pronome + " " + nome + " " + sobrenome 
  }
}

function escreverCartaoOptimo (pronome, nome, sobrenome){
return escreverCartao(pronome, nome, sobrenome,(longitude(nome + sobrenome)>=15))
}

// Exercícío 10
function decisaoComMoeda(moeda, comida1, comida2){
let cara = "cara"
let coroa = "coroa"
  
  return moeda === cara && comida1 || moeda === coroa && comida2
}
