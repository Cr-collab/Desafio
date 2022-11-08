const { describe } = require("@jest/globals");
const { exercicio1 } = require("./exercicio_1");

describe("exercicio 1", () => {
  test("should be able to perform word sorting", () => {
    let input = [
      "Aline zenon",
      "walter Azevedo",
      "lucas suzuki",
      "tatiana",
      "Aline zenon"
    ];

    let output = [
      "Azevedo , Walter",
      "Suzuki , Lucas",
      "Tatiana",
      "Zenon , Aline",
      "Zenon , Aline"
    ];
    let response = exercicio1(input);
    expect(response).toEqual(output);
  });
});
