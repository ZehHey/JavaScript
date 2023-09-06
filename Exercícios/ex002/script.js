function verificar (){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('[Erro] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img') //criando elemento com js
        img.setAttribute('id', 'foto')// atribuindo id
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade <= 3) {
                //bebe
                img.setAttribute('src', 'media/bebem.png')
            } else if (idade <= 12) {
                //crianca
                img.setAttribute('src', 'media/criancam.png')
            } else if (idade <=35) {
                //jovem
                img.setAttribute('src', 'media/jovemm.png')
            } else if (idade <=50) {
                //adulto
                img.setAttribute('src', 'media/adultom.png')
            } else if (idade>= 51) {
                //idoso
                img.setAttribute('src', 'media/idosom.png')
            }
        }else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade <= 3) {
                //bebe
                img.setAttribute('src', 'media/bebef.png')
            } else if (idade <= 12) {
                //crianca
                img.setAttribute('src', 'media/criancaf.png')
            } else if (idade <=35) {
                //jovem
                img.setAttribute('src', 'media/jovemf.png')
            } else if (idade <=50) {
                //adulto
                img.setAttribute('src', 'media/adultof.png')
            } else {
                //idoso
                img.setAttribute('src', 'media/idosof.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img) // inserindo o elemento na tela
    }
}