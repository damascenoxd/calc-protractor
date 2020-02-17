//calculadora.po.js
class Calculadora {
    constructor() {
        this.firstValue = element(by.model('first'));
        this.secondValue = element(by.model('second'));
        this.operator = element(by.model('operator'));
        this.execute = element(by.id('gobutton'));
        this.result = element(by.className('ng-binding'));
    }
    fillFirst(valor) {
        this.firstValue.sendKeys(valor);
    }
    fillSecond(valor) {
        this.secondValue.sendKeys(valor);
    }
    selectOperator(operator) {
        this.operator.all(by.css('option[value="' + operator + '"]')).click();
    }
    calc() {
        this.execute.click();
    }
    add() {
        this.selectOperator('ADDITION');
    }
    div() {
        this.selectOperator('DIVISION');
    }
    mod() {
        this.selectOperator('MODULO');
    }
    sub() {
        this.selectOperator('SUBTRACTION');
    }
    mult() {
        this.selectOperator('MULTIPLICATION');
    }
    visit() {
        browser.get('protractor-demo/');
    }
    getResult() {
        return this.result.getText();
    }
    getFirstResultTable() {
        let row = element.all(by.xpath("//*[@ng-repeat='result in memory']"));
        let cells = row.all(by.tagName('td'));

        return cells.get(2).getText();
    }
}

module.exports = Calculadora;