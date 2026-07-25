'use strict'


export function criarBotoesCursos(cursos) {

    const buttonCurso = document.createElement('button')
    buttonCurso.className = "curso"
    buttonCurso.dataset.id = cursos.id

    const imgCurso = document.createElement('img')
    imgCurso.src = cursos.icon

    const siglaCurso = document.createElement('span')
    siglaCurso.textContent = cursos.sigla

    buttonCurso.append(imgCurso, siglaCurso)

    return buttonCurso
}

export  function criarCursoContainer(botoes){
    const cursoContainer = document.createElement('div')
    cursoContainer.className = "cursos-container"

    cursoContainer.append(...botoes)

    return cursoContainer
}

function criarDevicesContainer(){
    const deviceContainer = document.createElement('div')
    deviceContainer.className = "devices-container"

    const titulo = document.createElement('h1')
    
    titulo.innerHTML = 'Escolha um <span>curso</span> <br>para gerenciar'

    const imageDevices = document.createElement('img')
    imageDevices.src = "./img/devices.svg"
    imageDevices.alt = "devices-image"
    
    deviceContainer.append(titulo, imageDevices)

    return deviceContainer
}

function criarStudantContainer(){
    const studantContainer = document.createElement('div')
    studantContainer.className = "studant-container"

    const imageStudant = document.createElement('img')
    imageStudant.src = "./img/studant.svg"
    imageStudant.alt = "studant-image"

    studantContainer.append(imageStudant)
    return studantContainer
}

export function criarContainer(){
    const container = document.createElement('div')
    container.className = "container"

    const deviceContainer = criarDevicesContainer()
    const studantContainer = criarStudantContainer()

    container.append(deviceContainer, studantContainer)
    return container
}