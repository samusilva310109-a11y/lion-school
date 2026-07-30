'use strict'

function validarBarLevel(desempenhoAluno, barLevel) {
    if (desempenhoAluno >= 80) {
        barLevel.classList.add("nota-boa")
    } else if (desempenhoAluno < 50) {
        barLevel.classList.add("nota-ruim")
    } else {
        barLevel.classList.add("nota-media")
    }
}

function validarSpanDesempenho(desempenhoAluno, spanDesempenho) {
    if (desempenhoAluno >= 80) {
        spanDesempenho.classList.add("number-boa")
    } else if (desempenhoAluno < 50) {
        spanDesempenho.classList.add("number-ruim")
    } else {
        spanDesempenho.classList.add("number-media")
    }
}

function criarBars(desempenho) {

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

function criarGraphContainer(aluno) {
    const graphContainer = document.createElement('div')
    graphContainer.className = "graph-container"

    const bars = aluno.desempenho.map(itemDesempenho => {
        const bar = criarBars(itemDesempenho)
        return bar
    })


    graphContainer.append(...bars)
    return graphContainer
}

function criarFotoAlunoContainer(aluno) {
    const fotoAlunoContainer = document.createElement('div')
    fotoAlunoContainer.className = "foto-aluno-container"

    const fotoAluno = document.createElement('img')
    fotoAluno.src = aluno.foto

    const nomeAluno = document.createElement('span')
    nomeAluno.textContent = aluno.nome

    fotoAlunoContainer.append(fotoAluno, nomeAluno)
    return fotoAlunoContainer
}

export function criarInfoContainer(aluno) {
    const infoContainer = document.createElement('div')
    infoContainer.className = "info-container"

    const fotoAlunoContainer = criarFotoAlunoContainer(aluno)
    const graphContainer = criarGraphContainer(aluno)

    infoContainer.append(fotoAlunoContainer, graphContainer)
    return infoContainer
}