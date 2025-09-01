
function verificar() {
    var tano = window.document.getElementById("textano")
    var anonum = Number(tano.value)
    var mensagem = window.document.getElementById("msg")

    var masc = window.document.getElementById('masculino')
    var fem = window.document.getElementById('feminino')

    var ano = 2025 - anonum

    var img = window.document.getElementById('foto')

    mensagem.innerText = `a sua idade é ${ano} anos!`
   

if (ano <= 10 && fem.checked) {
    img.src = 'fotos/menina4.jpg'
} else if (ano > 10 && ano < 20 && fem.checked) {
    img.src = 'fotos/menina15.jpg'
} else if (ano >= 20 && ano < 30 && fem.checked) {
    img.src = 'fotos/menina20.jpg'
} else if (ano >= 30 && ano < 80 && fem.checked) {
    img.src = 'fotos/mulher45.jpg'
} else if (ano >=80  && fem.checked){
    img.src = 'fotos/mulher80.jpg'
}

if (ano <= 10 && masc.checked) {
    img.src = 'fotos/menino4.jpg'
} else if (ano > 10 && ano < 20 && masc.checked) {
    img.src = 'fotos/menino15.jpg'
} else if (ano >= 20 && ano < 30 && masc.checked) {
    img.src = 'fotos/menino20.jpg'
} else if (ano >= 30 && ano < 80 && masc.checked) {
    img.src = 'fotos/homem45.jpg'
} else if (ano >= 80 && masc.checked) {
    img.src = 'fotos/homem80.jpg'
}



}


