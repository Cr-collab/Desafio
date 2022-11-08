const { describe } = require("@jest/globals");
const { exercicio2 } = require("./exercicio_2");

describe("exercicio 2", () => {
  test("should be able to perform word sorting", () => {
    let input = `This is a dancing sentence
    This   is         a  dancing   sentence  
    aaaaaaaaaaa
    z`;

    let output = `ThIs Is A dAnCiNg SeNtEnCe
    ThIs   Is         A  dAnCiNg   SeNtEnCe  
    AaAaAaAaAaA
    Z`;
    let response = exercicio2(input);
    expect(response).toEqual(output);
  });
});
