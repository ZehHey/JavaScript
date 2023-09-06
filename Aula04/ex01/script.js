function contar (){
    var inicio = document.getElementById('txtinicio')
    var fim = document.getElementById('txtfim')
    var passo = document.getElementById('txtpasso')
    var res = document.getElementById('res')
    

    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        res.innerHTML = `Impossível calcular`
    } else if (passo==0 && passo.value>fim.value) {
        window.alert('Valor de passo incorreto,considerando o valor 1')
        var passo = 1
    } else {
        res.innerHTML = 'Contando: <br>'
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if (p<=0){
            window.alert('Passo inválido! Considerando o valor 1.')
            p = 1
        }
        if (i<f){
            for(let c=i; c<=f; c+=p){
                res.innerHTML += `${c}  \&#8658; `
                }
            
        }else {
            for(let c=i; c>=f; c-=p){
                res.innerHTML += `${c} \&#8658; `
            }   
        }res.innerHTML += `\u{1F3C1} `
    }
}

/*var inicio = 0
var fim = 10
var passo = 2
var cont = inicio + passo
console.log(inicio)
console.log(passo)
while(cont<=fim){
    console.log(cont)
    cont += passo
}*/