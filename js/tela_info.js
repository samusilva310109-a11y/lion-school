'use strict'

function validarBarLevel(desempenhoAluno, barLevel) {
    if (desempenhoAluno > 60) {
        barLevel.classList.add("nota-boa")
    } else if (desempenhoAluno < 50) {
        barLevel.classList.add("nota-ruim")
    } else {
        barLevel.classList.add("nota-media")
    }
}

function validarSpanDesempenho(desempenhoAluno, spanDesempenho) {
    if (desempenhoAluno > 60) {
        spanDesempenho.classList.add("number-boa")
    } else if (desempenhoAluno < 50) {
        spanDesempenho.classList.add("number-ruim")
    } else {
        spanDesempenho.classList.add("number-media")
    }
}

export function criarBars(desempenho) {

    const divBar = document.createElement('div')
    divBar.className = "div-bar"

    const spanDesempenho = document.createElement('span')
    spanDesempenho.textContent = desempenho.valor
    validarSpanDesempenho(desempenho.valor, spanDesempenho)

    const bar = document.createElement('div')
    bar.className = "bar"

    const barLevel = document.createElement('div')
    barLevel.classList = "bar-level"
    barLevel.style.height = `${desempenho.valor}%`
    validarBarLevel(desempenho.valor, barLevel)

    const spanMateria = document.createElement('span')
    spanMateria.textContent = desempenho.categoria

    bar.append(barLevel)
    divBar.append(spanDesempenho, bar, spanMateria)

    return divBar

}

export function criarGraphContainer(bars) {
    const graphContainer = document.createElement('div')
    graphContainer.className = "graph-container"

    graphContainer.append(...bars)
    return graphContainer
}

export function criarInfoContainer(graphContainer) {
    const infoContainer = document.createElement('div')
    infoContainer.className = "info-container"

    // const fotoAlunoContainer = criarFotoAlunoContainer()

    infoContainer.append(graphContainer)
    return infoContainer
}