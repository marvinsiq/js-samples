

function gerarCNPJ(base, ordem) {

    const cnpjBaseOrdem = `${pad(base, 8)}${pad(ordem, 4)}`;
    const dv = calculaDV(cnpjBaseOrdem);

    return `${cnpjBaseOrdem}${dv}`;
}

/**
 * Calcula o dígito verificador de um cnpj.  
 * 
 * Ex.:  
 * > calculaDV("377436890001");  // 54
 * @param {string} numeros 
 */
function calculaDV(numeros) {

    let tamanho = 12;
    numeros = pad(numeros, tamanho);
    let dv = "";

    // Calcula o DV 1
    let soma = 0;
    let peso = 5; // 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2
    for (let i = tamanho; i >= 1; i--) {
        soma += numeros.charAt(tamanho - i) * peso--;
        if (peso < 2)
            peso = 9;
    }
    let resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
    dv += resultado;
    numeros += resultado;

    // Calcula o DV 2
    tamanho = 13;
    soma = 0;
    peso = 6; // 6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2
    for (let i = tamanho; i >= 1; i--) {
        soma += numeros.charAt(tamanho - i) * peso--;
        if (peso < 2)
            peso = 9;
    }
    resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
    dv += resultado;
    numeros += resultado;

    return dv;
}

/**
 * 
 * @param {string} cnpj 
 * @returns `true` se o CNPJ for válido, `false` caso contrário
 */
function validarCNPJ(cnpj) {

    // remove tudo que não é numero e completa com zeros a esqueda
    cnpj = pad(cnpj.replace(/[^\d]+/g, ''), 14);

    // Elimina CNPJs invalidos conhecidos
    if (cnpj == "00000000000000" ||
        cnpj == "11111111111111" ||
        cnpj == "22222222222222" ||
        cnpj == "33333333333333" ||
        cnpj == "44444444444444" ||
        cnpj == "55555555555555" ||
        cnpj == "66666666666666" ||
        cnpj == "77777777777777" ||
        cnpj == "88888888888888" ||
        cnpj == "99999999999999")
        return false;

    const digitos = cnpj.substring(0, 12);
    const dv = cnpj.substring(12);
    const dvCalculado = calculaDV(digitos);

    // Valida o DV    
    return dv == dvCalculado;
}

/**
 * Retorna o número em formato string com o tamanho especificado completado com zeros a esquerda
 * @param {number | string} num 
 * @param {number} size 
 */
function pad(num, size) {
    let s = String(num);
    while (s.length < (size || 1)) s = "0" + s;
    return s;
}


console.log(gerarCNPJ(1972801, 1));
