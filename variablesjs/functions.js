function calcular(valor1, valor2, operacion){
    switch(operacion) {
        case "+":
        return valor1+valor2;
        break;

        case "-":
        return valor1-valor2;
        break;

        case "*":
        return valor1*valor2;
        break;

        case "/":
        return valor1/valor2;
        break;

        default:
            return 0;
    }
}