
function verificar() {
    var tano = window.document.getElementById("textano")
    var anonum = Number(tano.value)
    var mensagem = window.document.getElementById("msg")

    var masc = window.document.getElementById('masculino')
    var fem = window.document.getElementById('feminino')

    var ano = 2025 - anonum

    var img = window.document.createElement('img')
    img.setAttribute('id','foto')

    mensagem.innerHTML = `a sua idade é ${ano} anos! <br>`


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
} else if (tano.value.length == 0 || anonum > 2025) {
    window.alert('erro! verifique os dados e tente novamente')
}

if (ano <= 10 && masc.checked) {
    img.setAttribute('src','fotos/menino4.jpg')
} else if (ano > 10 && ano < 20 && masc.checked) {
    img.setAttribute('src','fotos/menino15.jpg')
} else if (ano >= 20 && ano < 30 && masc.checked) {
    img.setAttribute('src','fotos/menino20.jpg')
} else if (ano >= 30 && ano < 80 && masc.checked) {
    img.setAttribute('src','fotos/homem45.jpg')
} else if (ano >= 80 && masc.checked) {
    img.setAttribute('src','fotos/homem80.jpg')
} else if (tano.value.length == 0 || anonum > 2025) {
    window.alert('erro! verifique os dados e tente novamente') 
}

    
   
    mensagem.appendChild(img)

}


