class CalculatorController {

    constructor() {
    
        this.calculatorView = new CalculatorView();
        this.calculator = new Calculator();
    }


    recoverValue(value) {

        isNaN(value) ? this.calculator.pushOperator(value) : this.calculator.pushNumber(value);

        this.calculatorView.render(this.calculator.getValuesToString());
    }

    recoverResult() {
        if(this.calculator.getFirstNumber().length > 0 && this.calculator.getOperator() !== "" && this.calculator.getSecondNumber().length > 0) {
            this.calculatorView.render(this.calculator.calculate());
            this.calculator.clear();
        }
    }

}