function transformarEmBinario(numero) {
    let binario = '';
    while (numero > 0) {
        binario = (numero % 2) + binario;
        numero = Math.floor(numero / 2);
    }
    return binario;
}

function transformarEmDecimal(binario) {
    let decimal = 0;
    let potencia = 0;
    for (let i = binario.length - 1; i >= 0; i--) {
        if (binario[i] == 1) {
            decimal += Math.pow(2, potencia);
        }
        potencia++;
    }
    return decimal;
}

const numberBinary = document.querySelector('#numberBinary');
const convert = document.querySelector('#convert');
const resultBinary = document.querySelector('#resultBinary');
const resultDecimal = document.querySelector('#resultDecimal');

convert.addEventListener('click', () => {
    resultBinary.innerHTML = `O numero em binário é: ${transformarEmBinario(numberBinary.value)}`;
    resultDecimal.innerHTML = `O numero em decimal é: ${transformarEmDecimal(numberBinary.value)}`;
} );
