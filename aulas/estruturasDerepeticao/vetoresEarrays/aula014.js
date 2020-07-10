let num = [3,5,8,6,7];
num.push(4);
num.sort();

/*for (let i = 0; i < num.length; i++) {
    console.log(`Valor ${num[i]} na posição ${i}`)
    
}*/

for ( let i in num ) {
    console.log(`A posição ${i} tem o valor ${num[i]}`);
}

let pos = num.indexOf(8); // Busca a posição que o numero 8 está dentro do array;
console.log(num);

console.log(`o valor 8 esta na posição ${pos}`);
console.log(`O vetor tem ${num.length} posições`);
console.log(`O valor na posição 2 do vetor é ${num[2]}`);
