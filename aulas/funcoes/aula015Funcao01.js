function parimpar(n) {

    if (n % 2 == 0) {
        return 'Par !';
    } else {
        return 'Impar !';
    }
}

let res = parimpar(1255);
console.log(`O numero é ${res}`);
console.log('------------------------')
function soma(n1, n2) {
    return n1 + n2;
}
console.log(soma(2, 4));
console.log('------------------------');

let v = function (x) {
    return x * 2;
}

console.log(v(5));
console.log('------------------------'); 

function fatorial(n) {
    let  fat = 1;
    for(let c = n; c > 1; c--){
        fat *= c;
    }
    return fat;
}
console.log(fatorial(5));
console.log('------------------------');

// Fatorial com RECURSIVIDADE
function fatorial(n){
    if (n == 1) {
        return 1;
    } else {
        return n * fatorial(n - 1);
    }
}
console.log(fatorial(6));
