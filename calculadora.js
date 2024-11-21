class Calculadora {
    sumar(a, b) {
        return a + b;
    }

    restar(a, b) {
        return a - b;
    }

    multiplicar(a, b) {
        return a * b;
    }

    dividir(a, b) {
        if (b === 0) {
            throw new Error("No se puede dividir por cero.");
        }
        return a / b;
    }

    potencia(base, exponente) {
        return Math.pow(base, exponente);
    }

    raizCuadrada(a) {
        if (a < 0) {
            throw new Error("No se puede calcular la raíz cuadrada de un número negativo.");
        }
        return Math.sqrt(a);

    }
}

module.exports = Calculadora;

