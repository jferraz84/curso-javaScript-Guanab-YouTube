function tabuada() {
    var num = document.getElementById('txtini');
    let res = document.getElementById('seltab');

    if (num.value.length == 0) {
        window.alert('[ERRO] Digite um numero');
        res.innerHTML = 'Impossivel calcular';
    } else {
        let i = Number(num.value);
        res.innerHTML = '';

        for (let c = 1; c <= 10; c++) {
            let mult = c * i;
            let item = document.createElement('option');
            item.text = `${i} X  ${c} = ${mult} `;
            item.value = `tab${c}`;
            res.appendChild(item);

        }
    }
}



