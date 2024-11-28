const calcularMDC = require('./mdc');

describe('Testando a função calcularMDC', () => {
    test('Deve retornar o MDC de 6 e 2 como 2', () => {
        expect(calcularMDC(6, 2)).toBe(2);
    });

    test('Deve retornar o MDC de 15 e 5 como 5', () => {
        expect(calcularMDC(15, 5)).toBe(5);
    });

    test('Deve retornar o MDC de 7 e 3 como 1 (números primos entre si)', () => {
        expect(calcularMDC(7, 3)).toBe(1);
    });

    test('Deve lançar um erro ao receber valores não numéricos', () => {
        expect(() => calcularMDC("a", 5)).toThrow("Os valores fornecidos não são números válidos.");
    });
});
