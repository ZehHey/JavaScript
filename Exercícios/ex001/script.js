function carregar(){
    var titulo = window.document.getElementById('titulo')
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas`
    if (hora >=0 && hora < 12) {
        // BOM DIA!
        titulo.innerHTML = 'Bom dia!'
        img.src = 'media/morning1.png'
        document.body.style.backgroundImage = 'linear-gradient(to bottom, #bdcde6, #40659a)'
    } else if (hora>=12 && hora<19) {
        // BOA TARDE!
        titulo.innerHTML = 'Boa Tarde!'
        img.src = 'media/evening1.png'
        document.body.style.backgroundImage = 'linear-gradient(to bottom, #f5a84e, #963019)'
    } else {
        // BOA NOITE!
        titulo.innerHTML = 'Boa Noite!'
        img.src = 'media/night1.png'
        document.body.style.backgroundImage = 'linear-gradient(to bottom, #7268ad, #101533)'
    }
}