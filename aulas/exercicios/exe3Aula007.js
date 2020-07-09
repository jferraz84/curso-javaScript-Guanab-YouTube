var agora = new Date();
var diaSem = agora.getDay();
var diaMes = agora.getMonth();
var ano = agora.getFullYear()
/*
    0 = Domingo
    1 = Segunda
    2 = Terça
    3 = Quarta
    4 = Quinta
    5 = Sexta
    6 = sabado
*/
console.log(diaSem);

switch (diaSem) {
    case 0:
        console.log(`Hoje é Domingo dia ${diaMes} do ano ${ano}`);
        break;

    case 1:
        console.log(`Hoje é Segunda-Feira dia ${diaMes} de Julho de ${ano}`);
        break;

    case 2:
        console.log(`Hoje é Terça-Feira dia ${diaMes} de Julho de ${ano}`);
        break;

    case 3:
        console.log(`Hoje é Quarta-Feira dia ${diaMes} de Julho de ${ano}`);
        break;

    case 4:
        console.log(`Hoje é Quinta-Feira dia ${diaMes} de Julho de ${ano}`);
        break;

    case 5:
        console.log(`Hoje é Sexta-Feira dia ${diaMes} de Julho de ${ano}`);
        break;

    case 6:
        console.log(`Hoje é Sábado dia ${diaMes} de Julho de ${ano}`);
        break;

    default:
        break;
}