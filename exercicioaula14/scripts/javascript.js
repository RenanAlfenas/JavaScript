

function contar() {
    var ini = window.document.getElementById('textinicio')
    var fim = window.document.getElementById('textfim')
    var pass = window.document.getElementById('textpasso')

    var ininum =  Number( ini.value )
    var fimnum = Number(fim.value)
    var passo = Number(pass.value)
    var resultado = window.document.getElementById('res')

        if (ini.value.length == 0 || fim.value.length == 0 || pass.value.length == 0 ) {
            window.alert('erro! faltam dados.')
        }   else if (ininum < fimnum) {
            for (var c = ininum ; c <= fimnum ; c = c + passo) {
                resultado.innerText += ` ${c}`
            }
        }
        
        if (ininum > fimnum ) {
            for (var c = ininum; c >= fimnum; c = c - passo) {
                resultado.innerText += ` ${c}`
            }

        } else if (passo <= 0) {
            window.alert('Passo inválido. considerarei passo = 1')
            for (var c = ininum; c <= fimnum; c = c + passo) {
                resultado.innerText += ` ${c}`
            }
        }
            

  

}

