// Converte o número em string e completa com zeros a esquerda

function pad(num, size) {
    let s = String(num);
    while (s.length < (size || 1) ) s = "0" + s;
    return s;
}

console.log(pad(5, 3)); // 005
console.log(pad(658, 9)); // 000000658
console.log(pad(78561, 3)); // 78561