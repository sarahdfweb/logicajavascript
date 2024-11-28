const somaMultiplosDe5ou7AbaixoDe1000 = require('./multiplos');

describe('Testando somaMultiplosDe5ou7AbaixoDe1000', () => {
    test('deve retornar a soma correta de múltiplos de 5 ou 7 abaixo de 1000', () => {
        const resultado = somaMultiplosDe5ou7AbaixoDe1000();

        // Soma esperada calculada manualmente
        const somaEsperada = 156361;
        expect(resultado).toBe(somaEsperada);
    });
});
