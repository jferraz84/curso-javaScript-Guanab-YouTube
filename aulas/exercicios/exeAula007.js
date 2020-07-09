var idade = 12;
console.log(`Com a idade de ${idade} anos, `)
if (idade < 16) {
    console.log('Você NÃO vota');
} else if (idade < 18 || idade > 65) {
    console.log('O Voto é OPCIONAL');
} else {
    console.log('O Voto OBRIGÀTORIO');
}
