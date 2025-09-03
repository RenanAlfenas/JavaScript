function gerar() {

    var ntext = window.document.getElementById('ntext')
    var resp = window.document.getElementById('res')

    if (ntext.value.length == 0) {
        window.alert('erro! digite um número')
    } else {
        
        var n = Number(ntext.value)
        var c = 1

        resp.innerText = ``
        do {
            var item = window.document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            
            resp.appendChild(item)
            c++
        } while (c <=10)

        
    }
}

