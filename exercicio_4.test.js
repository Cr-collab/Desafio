const { describe } = require("@jest/globals");
const { exercicio4 } = require("./exercicio_4");

describe("exercicio 4", () => {
  it("should be able calculate expression passed", () => {
    let input = "((1-2)+(2+200)*100)";
    let output = '20201'
    let response = exercicio4(input);
    expect(response).toEqual(output);
  });
});
