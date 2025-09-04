function gerar() {
    var num = window.document.getElementById('ntext')
    var tab = window.document.getElementById('sel')

    if (ntext.value.length == 0) {
        window.alert('ERRO! Digite um número para gerar a tabuada')
    } else {
        var n = Number(num.value)
        var c = 1
        tab.innerText = ``
        for (var c = 1; c <= 10; c++) {
            var op = window.document.createElement('option')
            op.text = `${n} x ${c} = ${n*c}`
            op.value = `mult${c}`
            tab.appendChild(op)

        }

    }
}

