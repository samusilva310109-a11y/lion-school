'use strict'


function criarFiltro() {
    const filtroDiv = document.createElement('div')
    filtroDiv.className = "filtro"

    const buttonFilter = document.createElement('button')
    buttonFilter.textContent = "Status"

    const filterOptionsDiv = document.createElement('div')
    filterOptionsDiv.className = "filter-options"


    const opcoesFiltro = ['Status', 'Cursando', 'Finalizado']

    opcoesFiltro.forEach(opcaoText => {

        const itemOpcao = document.createElement('div')
        itemOpcao.className = "opcao-item"
        itemOpcao.textContent = opcaoText

        itemOpcao.dataset.value = textContent.toLowerCase()

        itemOpcao.addEventListener('click', (evento) => {
            buttonFilter.textContent = evento.currentTarget.textContent

            filterOptionsDiv.classList.remove('aberto')
        })

        filterOptionsDiv.append(itemOpcao)
    })

    buttonFilter.addEventListener('click', () => {
        filterOptionsDiv.classList.toggle('aberto')
    })

    filtroDiv.append(buttonFilter, filterOptionsDiv)

    return filtroDiv
}

function criarLegenda() {
    const divLegenda = document.createElement('div')
    divLegenda.className = "legenda"
}

export function criarFiltrosContainer() {
    const filtrosContainer = document.createElement('div')
    filtrosContainer.className = "filtros-container"

    const filtro = criarFiltro()
    const legenda = criarLegenda()

    filtrosContainer.append(filtro, legenda)
}