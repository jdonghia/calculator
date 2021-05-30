class Calculator {
    constructor() {
        this.firstNumber = [];
        this.operator = "";
        this.secondNumber = [];
    }

    getFirstNumber() {
        return this.firstNumber;
    }

    getSecondNumber() {
        return this.secondNumber;
    }
    
    getOperator() {
        return this.operator;
    }

    pushOperator(operator) {
        if (this.firstNumber.length > 0) this.operator = operator;
    }

    pushNumber(number) {
        if(this.operator === "" && this.firstNumber.length < 5) {
            this.firstNumber.push(number);
        }

        if(this.secondNumber.length < 5 && this.operator !== "") {
            this.secondNumber.push(number);
        }
    }

    getValuesToString() {
        return CalculatorHelper.operationToString(this.firstNumber,this.operator,this.secondNumber);
    }
    
    calculate() {
        let result = 0;
        let first = parseInt(this.firstNumber.join(""));
        let second = parseInt(this.secondNumber.join(""));
        switch (this.operator) {
            case "+":
                result = first + second;
                break;
            case "-":
                result = first - second;
                break;
            case "/":
                result = first / second;
                break;
            case "*":
                result = first * second;
                break;
        }

        if (Number(result) === result && result % 1 !== 0) {
            return result.toFixed(8);
        } else {
            return result;
        }

    }

    clear() {
        this.firstNumber = [];
        this.operator = "";
        this.secondNumber = [];
    }
}