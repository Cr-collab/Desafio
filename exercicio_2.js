/**
 *  Uma sentença é chamada de dançante se sua primeira letra for maiúscula
 *  e cada letra subsequente for o oposto da letra anterior. Espaços devem 
 *   ser ignorados ao determinar o case (minúsculo/maiúsculo) de uma letra. 
 * Por exemplo, "A b Cd" é uma sentença dançante porque a primeira letra 
 * ('A') é maiúscula, a próxima letra ('b') é minúscula, 
 *   a próxima letra ('C') é maiúscula, e a próxima letra ('d') é minúscula.
 * 
 */
function exercicio2(input) {
  let output = "";
  let value = input.split("\n");
  let matriz = [];
  let matriz2 = [];
  for (let i = 0; i < value.length; i++) {
    matriz.push(value[i].split("").filter(e => e !== " "));
    matriz2.push(value[i].split(""));
  }

  for (let a = 0; a < matriz.length; a++) {
    let total = matriz[a].length;
    for (let c = 0; c < total; c++) {
      let divisão = c % 2;
      if (divisão > 0) {
        continue;
      }

      matriz[a][c] = matriz[a][c].toUpperCase();
    }
    let array = [];
    matriz2[a].forEach((element, index) => {
      if (matriz2[a][index] === " ") {
        matriz[a].splice(index, 0, element);
      }
    });
    matriz[a] = matriz[a].join("");
  }
  return matriz.join("\n");
}

let string = `This is a dancing sentence
This   is         a  dancing   sentence  
aaaaaaaaaaa
z`;

console.log(exercicio2(string));

module.exports = { exercicio2 };
