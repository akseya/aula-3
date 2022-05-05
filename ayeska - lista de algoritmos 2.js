//Lista de algoritmos 2
//1:

function inverter(nome) {
    var nomeInvertido = "";
    var nomeSize = nome.length;
    for (index = nomeSize; index >= 0 ; index --) {
        const letra = nome.charAt(index);
        nomeInvertido += letra;
    }
    console.log (nomeInvertido);
}
 inverter ("Ayeska");

//2

const vogais = ["a","e", "i", "o","u"];

function contarNumeroVogais(str) {
  var contar = 0;
  console.log(str);
  for (letra of str.toLowerCase()) {
    if (vogais.includes(letra)) {
      contar++;
    }
  }
  return contar;
}
var numero = contarNumeroVogais("Ayeska");
console.log(numero + " vogais");

//3

