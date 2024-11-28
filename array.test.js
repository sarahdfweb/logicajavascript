const encontrarIndicesMenorEMaior = require('./array');  // Importando a função

describe('Testando a função encontrarIndicesMenorEMaior', () => {
    test('deve retornar o índice do menor valor do array', () => {
        const array = [10, 20, 5, 15];
        const resultado = encontrarIndicesMenorEMaior(array);

        // O índice do menor valor (5) deve ser 2
        expect(resultado.menor).toBe(2);
    });
    test('deve retornar o índice de maior valor do array', () => {
        const array = [10, 20, 5, 15];
        const resultado = encontrarIndicesMenorEMaior(array);

        // O índice do menor valor (5) deve ser 2
        expect(resultado.maior).toBe(1);
    });
});
