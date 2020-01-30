const Calculadora = require("../page-objects/calculadora.po.js");
const EC = protractor.ExpectedConditions;

describe('calculator', () => {
    const calculator = new Calculadora();

    it('somar com dois valores', () => {
        calculator.visit();
        calculator.fillFirst(1);
        calculator.fillSecond(2);
        calculator.add();
        calculator.calc();
      
        expect(calculator.getResult()).toContain(3);    
    })
})