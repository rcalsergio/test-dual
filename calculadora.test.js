const Calculadora = require('./calculadora');

describe('Pruebas de la clase Calculadora', () => {
    let calculadora;

    beforeEach(() => {
        calculadora = new Calculadora();
    });

    test('suma', () => {
        expect(calculadora.sumar(2, 3)).toBe(5);
    });

    test('resta', () => {
        expect(calculadora.restar(10, 4)).toBe(6);
    });

    test('multiplicación', () => {
        expect(calculadora.multiplicar(3, 4)).toBe(12);
    });

    test('división', () => {
        expect(calculadora.dividir(10, 2)).toBe(5);
        expect(() => calculadora.dividir(10, 0)).toThrow('No se puede dividir por cero.');
    });

    test('potencia', () => {
        expect(calculadora.potencia(2, 3)).toBe(8);
    });

    test('raíz cuadrada', () => {
        expect(calculadora.raizCuadrada(16)).toBe(4);
        expect(() => calculadora.raizCuadrada(-1)).toThrow('No se puede calcular la raíz cuadrada de un número negativo.');
    });
});
