function adicionar() {
    const txt = window.document.getElementById('txt')
    const lista = window.document.getElementById('lista')

    if (txt.value == "") {
        window.alert('Insira uma tarefa!')
    
    } else {
        const li = window.document.createElement('li')
        
        const check = window.document.createElement('input')
        check.type = 'checkbox'
        check.id = 'checkbox'
        check.classList.add('checkbox')
        check.onclick = function() {
            clicar(this);
        };

        const span = window.document.createElement('span')
        span.textContent = txt.value

        li.appendChild(check)
        li.appendChild(span)
        lista.appendChild(li)

        txt.value = ""
    }
}


function clicar(checkbox) {
    const task = checkbox.nextElementSibling;
    task.classList.toggle('completo', checkbox.checked)
}


function entrou() {
    const enter = window.document.getElementById('menu')

    enter.style.width = '200px'
    enter.style.transition = '0.5s'
}

function saiu() {
    const leave = window.document.getElementById('menu')

    leave.style.width = '100px'
    leave.style.transition = '0.5s'
}