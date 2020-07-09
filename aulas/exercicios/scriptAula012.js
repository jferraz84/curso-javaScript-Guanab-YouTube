function contar() {

    let ini = document.getElementById('txtini');
    let fim = document.getElementById('txtfim');
    let pas = document.getElementById('txtpass');
    let res = document.getElementById('res');

    if (ini.value.length == 0 || fim.value.length == 0 || pas.value.length == 0) {
        window.alert('[ERRO] Verifique os dados e tente novamente');
        res.innerHTML = 'Impossivel contar';
    } else {
        res.innerHTML = 'Contando: <br>'
        let i = Number(ini.value);
        let f = Number(fim.value);
        let p = Number(pas.value);

        if (p <= 0) {
            window.alert('Passo invalido, considerando passo = 1');
            p = 1;
        }
        if (i < f) {
            // Contagem Crescente
            for (let c = i; c <= f; c += p) {
                res.innerHTML += `${c} \u{1F44D} `;

            }
           
        } else {
             // Contagem Decrescente
            for(let c = i; c >= f; c -= p){
                res.innerHTML += `${c} \u{1F44D} `

            }
        }
        res.innerHTML += ` \u{1F3C1}`
    }
}
