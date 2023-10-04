var lista = []
let num = document.getElementById('txtn')
let tab = document.getElementById('selnum')
let resp = document.getElementById('res')


function add(){
    
    
    if (num.value.length==0) {
        window.alert('Por favor, digite um número!')
    } else {
        n = Number(num.value)
        if (n<=0 || n>100 || lista.indexOf(n)!=-1) {
            window.alert('Número inválido ou já adicionado!')
        } else {
            lista.push(n)
            var item = document.createElement('option')
            item.text = `Valor ${n} adicionado.`
            tab.appendChild(item)
            resp.innerHTML =''
        }
    }
    num.value=''
    num.focus()
} 

function finalizar() {
    let soma = 0
    let maior = lista[0]
    let menor = lista[0]

    for (let pos in lista){
        soma += lista[pos]
        if(lista[pos]>maior){
            maior = lista[pos]
        }
        if(lista[pos]<menor){
            menor=lista[pos]
        }
    }
    if (lista.length == 0) {
        window.alert('Adicione pelo menos um valor')
    } else {
        resp.innerHTML = ''
        resp.innerHTML +=  `<p>Foram adicionados ${lista.length} valores.</p>`
        resp.innerHTML += `<p> A soma desses valores é ${soma}</p>`
        resp.innerHTML += `<p>A média entre esses valores é ${soma/lista.length}</p>`
        resp.innerHTML += `<p>O maior valor cadastrado é ${maior}</p>`
        resp.innerHTML += `<p>O menor valor cadastrado é ${menor}</p>`
    }
    
   
}