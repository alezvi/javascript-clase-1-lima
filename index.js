window.onload = function () {
    let user = {
        id: 1, 
        firstName: 'alejandro',
        lastName: 'villafañe',
        fullName: function () {
            return this.firstName + ' ' + this.lastName
        }
    }

    /**
    Crear un archivo index.html, en la misma ubicación un directorio / carpeta js y dentro de dicho directorio un archivo app.js.

    Vincular el archivo app.js con el archivo index.html.

    Dentro del archivo app.js generar:
        una variable que contenga un string.
        una variable que contenga un array.
        una variable que contenga un boolean.
        
    Hacer un console.log() de cada una de las variables anteriormente creadas.

    Abrir el archivo con el navegador y verificar que en la consola de las dev tools se impriman las variables correspondientes.

    Crear una variable que contenga un Array con los números impares desde el 1 hasta el 137. Para lo anterior, no se permite generar el Array manualmente, el mismo deberá generarse con sentencias de JS.
    */

    let nav = document.querySelector('nav')
    let burger = nav.querySelector('#burger')
    let list = nav.querySelector('ul')

    function showMenu() {
        list.classList.toggle('hidden')
    }

    let fontSizes = []

    for(let i = 4; i < 73; i++) {
        if (i % 2 == 0) {
            fontSizes.push(i)
        }
    }


    let editor = document.querySelector('#editor')

    let fontSizeSelect = document.querySelector('#font-size')

    function changeFontSize(element) {
        console.log(element)
        editor
            .querySelector('p#content')
            .style.fontSize = element.value + 'px'
    }

    fontSizes.forEach(function (size) {
        fontSizeSelect.innerHTML += `
            <option value="${size}">
                ${size}
            </option>
        `
    })

    function alignText(element) {
        editor
            .querySelector('p#content')
            .style.textAlign = element.value
    }

    let suggestions = [
        {texto: 'PHP', link: 'php.net'},
        {texto: 'Node JS', link: 'nodejs.org'},
        {texto: 'Javascript', link: 'javascript.info'},
    ]

    let search = document.querySelector('form#search')
    let matchesList = search.querySelector('#matches')

    search.texto.onkeyup = function (evento) {
        matchesList.innerHTML = ''
        
        if (evento.target.value.length == 0) {
            return
        }

        let matches = [] 

        suggestions.forEach(function (s) {
            if (s.texto.toLocaleLowerCase().includes(evento.target.value)) {
                matches.push(s)
            }
        })

        matches.forEach(function (m) {
            matchesList.innerHTML += `
                <li><a href="${m.link}">${m.texto}</a></li>
            `
        })
    }
}
