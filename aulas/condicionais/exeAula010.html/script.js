function verificar() {
    var data = new Date();
    var ano = data.getFullYear();
    var formAno = document.getElementById('txtano');
    var res = document.querySelector('div#res');

    if (formAno.value.length == 0 || formAno.value > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente');
    } else {
        var fsex = document.getElementsByName('radsex');
        var idade = ano - Number(formAno.value);
        var genero = '';
        var img = document.createElement('img');
        img.setAttribute('id', 'foto');

        if (fsex[0].checked) {
            genero = 'Homem';
            if (idade >= 0 && idade <= 10) {
                img.setAttribute('src', 'imagens/criancahomem.jpg');

            } else if (idade >= 11 && idade <= 18) {
                img.setAttribute('src', 'imagens/adolescentehomem.jpg');

            } else if (idade >= 19 && idade <= 25) {
                img.setAttribute('src', 'imagens/jovemhomem.jpg');

            } else if (idade >= 26 && idade <= 60) {
                img.setAttribute('src', 'imagens/adultohomem.jpg');

            } else {
                img.setAttribute('src', 'imagens/idosohomem.jpg');

            }

        } else if (fsex[1].checked) {
            genero = 'Mulher';
            if (idade >= 0 && idade <= 10) {
                img.setAttribute('src', 'imagens/criancamulher.jpg');

            } else if (idade >= 11 && idade <= 18) {
                img.setAttribute('src', 'imagens/adolescentemulher.jpg');

            } else if (idade >= 19 && idade <= 25) {
                img.setAttribute('src', 'imagens/jovemmulher.jpg');

            } else if (idade >= 26 && idade <= 60) {
                img.setAttribute('src', 'imagens/adultomulher.jpg');

            } else {
                img.setAttribute('src', 'imagens/idosamulher.jpg');
                
            }
        }
        res.innerHTML = `Detectamos <strong>${genero}</strong> com <strong>${idade}</strong> anos`;
        res.appendChild(img);
    }
}