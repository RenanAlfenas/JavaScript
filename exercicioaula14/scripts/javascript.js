

function contar() {
    var ini = window.document.getElementById('textinicio')
    var fim = window.document.getElementById('textfim')
    var pass = window.document.getElementById('textpasso')
    var res = window.document.getElementById('res')

    if (ini.value.length == 0 || fim.value.length == 0 || pass.value.length == 0) {
        window.alert('erro! verifique se os valores foram todos preenchidos!')
    } else {
        var i = Number(ini.value)
        var f = Number(fim.value)
        var p = Number(pass.value)
        
    

    if (p <= 0) {
        window.alert('erro! o valor do passo não é aceito. usaremos p = 1')
        p = 1
            for( var c = i ; c <= f ; c = c + 1) {
                res.innerText += ` ${c}`
            }
    }else if (i < f ) {
            for(var c = i ; c <= f ; c = c + p) {
                res.innerText += ` ${c}`
        }
    } else if ( i > f) {
            for(var c = i ; c >= f ; c = c - p) {
                res.innerText += ` ${c}`
        }
    }

    }
}

