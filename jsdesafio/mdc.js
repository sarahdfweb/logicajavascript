const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function calcularMDC() {
    rl.question("Digite o primeiro número: ", (numero1) => {
        rl.question("Digite o segundo número: ", (numero2) => {
            // Verificar se os valores inseridos são números válidos
            numero1 = parseInt(numero1);
            numero2 = parseInt(numero2);

            if (isNaN(numero1) || isNaN(numero2)) {
                console.log("Por favor, insira números válidos.");
                rl.close();
                return;
            }

          
            let mdc = Math.min(numero1, numero2);

            
            while (numero1 % mdc !== 0 || numero2 % mdc !== 0) {
                mdc--;
            }

            console.log(`O MDC entre os números digitados é: ${mdc}`);
            rl.close();
        });
    });
}

calcularMDC();
