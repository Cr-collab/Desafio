/**
 *  1 - O intuito deste desafio é criar um projeto que receba uma lista de nomes e 
 *  sobrenomes e retorne os sobrenomes e nomes separados por vírgula , regras de 
 *  letras maiúsculas e minúsculas corrigidas e nomes ordenados por ordem alfabética.
 *
 *   Exemplo
 *
 *   Entrada: [“Aline zenon”, “walter Azevedo”, “lucas suzuki”, “tatiana” ]
 *   Saída:  [“Azevedo, Walter”, “Suzuki, Lucas”, “Tatiana”, “Zenon, Aline”]
 * 
 */
function exercicio1(input) {
  let firstAndLastNameMatrix = [];
  let output = [];

  for (var i = 0; i < input.length; i++) {
    let firstAndLastNameList = input[i]
      .split(" ")
      .map(nameOrlastName => {
        return nameOrlastName[0].toUpperCase() + nameOrlastName.substring(1);
      })
      .reverse();
    let wordSortCounter = [firstAndLastNameList.join(" , "), 0];
    firstAndLastNameMatrix.push(wordSortCounter);
  }

  for (var a = 0; a < firstAndLastNameMatrix.length; a++) {
    for (var b = 0; b < firstAndLastNameMatrix.length; b++) {
      if (firstAndLastNameMatrix[a][0] > firstAndLastNameMatrix[b][0]) {
        firstAndLastNameMatrix[a][1]++;
      }
    }
  }

  for (var d = 0; d < firstAndLastNameMatrix.length; d++) {
    if (output[firstAndLastNameMatrix[d][1]] === undefined) {
      output[firstAndLastNameMatrix[d][1]] = firstAndLastNameMatrix[d][0];
    } else {
      output.splice(
        firstAndLastNameMatrix[d][1],
        0,
        firstAndLastNameMatrix[d][0]
      );
    }
  }
  output = output.filter(e => e !== undefined);
  return output;
}


module.exports = {exercicio1}

