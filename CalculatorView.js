class CalculatorView {
    
    constructor() {
        const $ = document.querySelector.bind(document);
        this.$screen = $(".screen__numbers");
    }

    render(operationView) {
        this.$screen.innerHTML = operationView;
    }
}