function exercicio3(string) {
  let index = 3;
  let arrayStrings = string.split("");
  let array = [];
  let metade = arrayStrings.length / 2;

  for (let i = 0; i < index; i++) {
    for (let j = 0; j < arrayStrings.length; j++) {
      if (i === 0) {
        let indexASQII = arrayStrings[j].charCodeAt(0);
        if (
          (indexASQII > 64 && indexASQII < 91) ||
          (indexASQII > 96 && indexASQII < 123)
        ) {
          arrayStrings.splice(j, 1, String.fromCodePoint(indexASQII + 3));
        }
      } else if (i === 1) {
        arrayStrings.reverse();
        break;
      } else if (i === 2) {
        if (j + 1 > metade) {
          let indexASQII = arrayStrings[j].charCodeAt(0);
          arrayStrings.splice(j, 1, String.fromCodePoint(indexASQII - 1));
        }
      }
    }
    

  }

  return arrayStrings.join("");
}


module.exports = { exercicio3 };
