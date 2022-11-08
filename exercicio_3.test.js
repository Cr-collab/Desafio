const { describe } = require("@jest/globals");
const { exercicio3 } = require("./exercicio_3");

describe("exercicio 3", () => {
  it.each`
  input           | output
  ${'Texto #3'}   | ${'3# rvzgV'}
  ${ 'abcABC1'}   | ${'1FECedc'}
  ${ 'vv.xwfxo.fd'}| ${'gi.r{hyz-xx'}
  `("should be able to perform word sorting", ({input, output}) => {
    let response = exercicio3(input);
    expect(response).toEqual(output);
  });
});
