function encontrarIndicesMenorEMaior(array) {
    let menorValor = array[0];
    let maiorValor = array[0];
    let indiceMenorValor = 0;
    let indiceMaiorValor = 0;

    for (let i = 1; i < array.length; i++) {
        if (array[i] < menorValor) {
            menorValor = array[i];
            indiceMenorValor = i;
        }

        if (array[i] > maiorValor) {
            maiorValor = array[i];
            indiceMaiorValor = i;
        }
    }

    return { menor: indiceMenorValor, maior: indiceMaiorValor };
}

const array = [3, 5, 6, 9];
const indices = encontrarIndicesMenorEMaior(array);

console.log("O índice do menor valor é:", indices.menor);
console.log("O índice do maior valor é:", indices.maior);
