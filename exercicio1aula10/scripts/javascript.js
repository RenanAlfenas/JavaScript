var num = window.document.getElementById('ntext')
var res = window.document.getElementById('res')
var lis = window.document.getElementById('lista')

var vari = []

function lista(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function verificar(n) {
    if(Number(n) >=1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}


function adicionar() {
    if (verificar(num.value) ==  false) {
        window.alert('o valor digitado é maior que 100 ou menor 1. tente novamente')
    } else if (lista(num.value , vari) ==  false) {
       vari.push(Number(num.value))

        var op = window.document.createElement('option')
        op.text = `o valor ${num.value} foi adicionado`
        op.value = `valor ${num.value}`

        lis.appendChild(op)
        res.innerHTML = ``
        
    } else if (vari.push(Number(num.value)) !== -1) {
     
        window.alert('o valor ja esta na lista!')
    }

    num.value = ''
    num.focus()    
}

function finalizar() {
    if(vari.length == 0) {
        window.alert('insira valores antes de finalizar')
    } else {
        var total = vari.length
        var maior = vari[0]
        var menor = vari[0]

        var soma = 0
        var med = 0

        for (var pos in vari ) {

            soma += vari[pos]

            if (vari[pos] > maior) {
                maior = vari[pos]
            } if (vari[pos] < menor) {
                menor = vari[pos]
            }
        }

        med = soma/total

        res.innerHTML += `<p>a lista tem um total de ${total} valores.</p>`
        res.innerHTML += `<p>o maior valor é ${maior}</p>`
        res.innerHTML += `<p> o menor valor é ${menor} </p>`
        res.innerHTML += `<p> a soma dos valores é ${soma}. </p>`
        res.innerHTML += `<p> a média dos valores é ${med} </p>`
    }
}








