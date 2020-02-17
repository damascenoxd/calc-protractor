const Calculadora = require("../page-objects/calculadora.po.js");

describe('calculator', () => {
    const calculator = new Calculadora();

    fit('somar com dois valores', () => {
        calculator.visit();
        calculator.fillFirst(1);
        calculator.fillSecond(2);
        calculator.add();
        calculator.calc();

        expect(calculator.getResult()).toContain(3);
        expect(calculator.getFirstResultTable()).toContain(3);
    })

    it('somar com primeiro valor válido e segundo vazio', () => {
        calculator.visit();
        calculator.fillFirst(1);
        calculator.fillSecond('');
        calculator.add();
        calculator.calc();

        expect(calculator.getResult()).toContain('NaN');
    })

    it('somar com primeiro valor vazio e segundo válido', () => {
        calculator.visit();
        calculator.fillFirst('');
        calculator.fillSecond(3);
        calculator.add();
        calculator.calc();

        expect(calculator.getResult()).toContain('NaN');
    })

    it('somar com primeiro e segundo valor vazio', () => {
        calculator.visit();
        calculator.fillFirst('');
        calculator.fillSecond('');
        calculator.add();
        calculator.calc();

        expect(calculator.getResult()).toContain('NaN');
    })
})