function calcularMDC(a, b) {
    while (b !== 0) {
        let resto = a % b;
        a = b;
        b = resto;
    }
    return a;
}

console.log("Digite o primeiro número: ")
    process.stdin.once("data", function(data) {
        let n1 = parseFloat(data);
            console.log("Digite o segundo número: ")
                process.stdin.once("data", function(data) {
                    let n2 = parseFloat(data);
                    let mdc = calcularMDC(n1, n2);
        console.log("O MDC de " + n1 + " e " + n2 + " é " + mdc + "!");
        process.exit();
        });
 });

 