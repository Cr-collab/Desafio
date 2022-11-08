function exercicio4(string) {
  let expressao;
  let result;

  function calcula(element) {
    let array = element;
    if (array.length === 1) {
      console.log(array)
      return array.join("");
    }

    const precedenciaCalc = (index, oper) => {
      switch (oper) {
        case "*":
          let calcM = Number(array[index - 1]) * Number(array[index + 1]);
          array[index] = calcM;
          array.splice(index + 1, 1);
          array.splice(index - 1, 1);
          return calcula(array);
        case "/":
          let calcD = Number(array[index - 1]) / Number(array[index + 1]);
          array[index] = calcD;
          array.splice(index + 1, 1);
          array.splice(index - 1, 1);

          return calcula(array);
        case "+":
          let calcMais = Number(array[index - 1]) + Number(array[index + 1]);
          array[index] = calcMais;
          array.splice(index + 1, 1);
          array.splice(index - 1, 1);
          return calcula(array);

        case "-":
          let calcMenos = Number(array[index - 1]) - Number(array[index + 1]);
          array[index] = calcMenos;
          array.splice(index + 1, 1);
          array.splice(index - 1, 1);
          return calcula(array);
      }
    };

    for (let index = 0; index < array.length; index++) {
      const value = array[index];
      if (value === "*" || value === "/") {
        return precedenciaCalc(index, value);
      }
    }

    for (let index = 0; index < array.length; index++) {
      const value = array[index];
      if (value === "-" || value == "+") {
        return precedenciaCalc(index, value);
      }
    }
  }

  // aquii estou pegando a string e tornando um array
  // example [ '(', '(1-2)', '+', '(2+200)', '*', '100', ')' ]

  // caso calculo sem parenteses
  if (string.includes("(") || string.includes(")")) {
    expressao = coverter(string);
    result = calcula(expressao);
  } else {
    // caso sem precendecia semm parenteses
    expressao = string.split(" ");
    result = calcula(expressao);
  }
  return result;
}

function coverter(string) {
  let a = [];
  let indexA = 0;
  // converter de "((1-2)+(2+200)*100)"
  // convertendo para [ [ '1', '-', '2' ], '+', [ '2', '+', '200' ], '*', '100' ]
  for (let index = 0; index < string.length + 1; index++) {
    let number = Number(string[index]);
    if (isNaN(number)) {
      if (string[index] === "(" && index === 0) {
        continue;
      }
      if (string[index] === "(") {
        a.push([]);
      } else if (string[index] === ")") {
        indexA++;
      } else if (string[index] === ")" && index === string.length) {
        continue;
      } else if (
        string[index] === "+" ||
        string[index] === "-" ||
        string[index] === "*" ||
        string[index] === "/"
      ) {
        if (typeof a[indexA] === "object") {
          a[indexA].push(string[index]);
        } else {
          a.push(string[index]);
          indexA++;
        }
      }
    } else {
      if (typeof a[indexA] === "object") {
        let ultimoValue = a[indexA][a[indexA].length - 1];
        if (typeof Number(ultimoValue) === "number") {
          if (ultimoValue === undefined) {
            a[indexA].push(string[index]);
          } else if (isNaN(Number(ultimoValue))) {
            a[indexA].push(string[index]);
          } else if (!isNaN(Number(ultimoValue))) {
            a[indexA].splice(
              a[indexA].length - 1,
              1,
              ultimoValue + string[index]
            );
          }
        }
      } else {
        if (!isNaN(Number(a[indexA - 1]))) {
          a[indexA - 1] = a[indexA - 1] + string[index];
        } else {
          a.push(string[index]);
          indexA++;
        }
      }
    }
  }

  // convertendo para [ [ '1', '-', '2' ], '+', [ '2', '+', '200' ], '*', '100' ]
  for (let index = 0; index < a.length; index++) {
    const element = a[index];
    let result = 0;
    if (
      typeof element === "object" &&
      (element.includes("*") || element.includes("/"))
    ) {
      for (let j = 0; j < element.length; j++) {
        const value = element[j];
        if (result === 0) {
          result = Number(value);
        } else if (value === "*") {
          result = result * Number(element[j + 1]);
        } else if (value === "/") {
          result = result / Number(element[j + 1]);
        }
        console.log(result);
      }
      a[index] = result;
    }
  }

  for (let index = 0; index < a.length; index++) {
    const element = a[index];
    let result = 0;
    if (
      typeof element === "object" &&
      (element.includes("+") || element.includes("-"))
    ) {
      for (let j = 0; j < element.length; j++) {
        const value = element[j];
        if (result === 0) {
          result = Number(value);
        } else if (value === "+") {
          result = result + Number(element[j + 1]);
        } else if (value === "_") {
          result = result + Number(element[j + 1]);
        }
      }
      a[index] = result;
    }
  }

  return a;
}

module.exports = { exercicio4 };
