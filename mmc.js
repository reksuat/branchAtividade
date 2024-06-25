
console.log("Digite um número");
process.stdin.once("data",function(data){
    let num1=parseInt(data.toString().trim())

    console.log("Digite outro número");
process.stdin.once("data",function(data){
    let num2=parseInt(data.toString().trim());

    let resultado = calculaMmc(num1, num2);
        console.log("O MMC é:", resultado);

        process.exit();

    function calculaMmc(n1, n2) {
        var resto, x, y;
        x = n1;
        y = n2;
        while(resto!=0){
          resto = x % y;
          x = y;
          y = resto;
        }
        return (n1*n2)/x;
      };
})
})

// function mmc(a, b) {
//     let maior = a > b ? a : b;
//     let menor = a < b ? a : b;
//     let mmc = maior;

//     while (mmc % menor !== 0) {
//         mmc += maior;
//     }

//     return mmc;
// }
// let num1 = 12;
// let num2 = 18;
// let resultadoMMC = mmc(num1, num2);
// console.log(`O MMC de ${num1} e ${num2} é: ${resultadoMMC}`);