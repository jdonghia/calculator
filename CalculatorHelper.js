class CalculatorHelper {

    static operationToString(x, y, z) {
        let arr = [x.join(""),y,z.join("")].join("");
        return arr;
    }

}