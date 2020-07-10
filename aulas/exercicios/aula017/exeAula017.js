let amigo = {nome: 'Jorge', sexo: 'M' , idade: '20', peso: 86,
engordar(p=0) {
    console.log('Engordou');
    this.peso += p;
}};
amigo.engordar(5);
console.log(`${amigo.nome} pesa ${amigo.peso} KG`);