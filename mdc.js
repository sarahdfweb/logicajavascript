//Calcule o MDC (máximo divisor comum) entre dois números

const readline = require('readline');


function calcularMDC(numero1, numero2) {
    numero1 = parseInt(numero1);
    numero2 = parseInt(numero2);

    if (isNaN(numero1) || isNaN(numero2)) {
        throw new Error("Os valores fornecidos não são números válidos.");
    }

    let mdc = Math.min(numero1, numero2);

    while (numero1 % mdc !== 0 || numero2 % mdc !== 0) {
        mdc--;
    }

    return mdc;
}

// Execução interativa apenas se o script for rodado diretamente
if (require.main === module) {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    rl.question("Digite o primeiro número: ", (numero1) => {
        rl.question("Digite o segundo número: ", (numero2) => {
            try {
                const mdc = calcularMDC(numero1, numero2);
                console.log(`O MDC entre os números digitados é: ${mdc}`);
            } catch (error) {
                console.error(error.message);
            } finally {
                rl.close();
            }
        });
    });
}

module.exports = calcularMDC;


