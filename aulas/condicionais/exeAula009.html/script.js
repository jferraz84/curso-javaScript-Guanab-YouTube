function carregar() {
    var msg = document.getElementById('msg');
    var img = document.getElementById('imagem');
    var data = new Date();
    var hora = data.getHours();
    var minuto = data.getMinutes();
    var datahj = data.data;
    
    
    msg.innerHTML = `Agora são <strong>${hora}:${minuto}</strong> minutos...` ;

    if (hora >= 0 && hora < 12) {
        // BOM DIA
        img.src = 'imagens/fotomanha.jpg';
        document.body.style.background = '#e2cd9f';

    } else if (hora >= 12 && hora < 18 ) {
        // BOA TARDE
        img.src = 'imagens/fototarde.jpg';
        document.body.style.background = '#b9846f'

    } else {
        // BOA NOITE
        img.src = 'imagens/fotonoite.jpg';
        document.body.style.background = '#515049'

    }
}