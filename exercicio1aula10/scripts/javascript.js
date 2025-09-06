var num = window.document.getElementById('ntext')
var res = window.document.getElementById('res')
var lis = window.document.getElementById('lista')

var vari = []



function adicionar() {
    if (num.value.length == 0 || num.value < 1 || num.value > 100) {
        window.alert('erro! digite um número maior que 1 e menor que 100!')
    } else if (vari.indexOf(c) != -1) {
        window.alert('o valor já está na lista!')
    }
    else  {
        var n = Number(num.value)
        var c = c + 1
        vari[c] = n

        var op = window.document.createElement('option')
        op.text = ` o valor inserido é: ${vari[c]}`
        op.value = ` valor${c}`

        lis.appendChild(op)
   
    }
}

