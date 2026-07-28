'use strict'

export function filtrarAlunos(statusSelecionado){
    
}

function criarFiltro() {
    const filtroDiv = document.createElement('div')
    filtroDiv.className = "filtro"

    const buttonFilter = document.createElement('button')
    buttonFilter.textContent = "Status"
    buttonFilter.id = "button-filter"

    const filterOptionsDiv = document.createElement('div')
    filterOptionsDiv.className = "filter-options"


    const opcoesFiltro = ['Status', 'Cursando', 'Finalizado']

    opcoesFiltro.forEach(opcaoText => {

        const itemOpcao = document.createElement('div')
        itemOpcao.className = "opcao-item"
        itemOpcao.textContent = opcaoText

        itemOpcao.dataset.value = opcaoText.toLowerCase()

        itemOpcao.addEventListener('click', (evento) => {
            const statusSelecionado = evento.currentTarget.value
            buttonFilter.textContent = evento.currentTarget.textContent


            filterOptionsDiv.classList.remove('aberto')

        })

        filterOptionsDiv.append(itemOpcao)
    })

    buttonFilter.addEventListener('click', () => {
        filterOptionsDiv.classList.toggle('aberto')
    })

    console.log(buttonFilter.textContent);
    

    filtroDiv.append(buttonFilter, filterOptionsDiv)

    return filtroDiv
}

function criarLegenda() {
    const divLegenda = document.createElement('div')
    divLegenda.className = "legenda"

    const spanLegenda = document.createElement('span')
    spanLegenda.textContent = "LEGENDA"

    const quadradoCursando = document.createElement('div')
    quadradoCursando.classList = "quadrado cursando"

    const cursandoSpan = document.createElement('span')
    cursandoSpan.textContent = "Cursando"


    const quadradoFinalizado = document.createElement('div')
    quadradoFinalizado.classList = "quadrado finalizado"

    const finalizadoSpan = document.createElement('span')
    finalizadoSpan.textContent = "Finalizado"

    divLegenda.append(spanLegenda, quadradoCursando, cursandoSpan, quadradoFinalizado, finalizadoSpan)
    
    return divLegenda
}

export function criarFiltrosContainer() {
    const filtrosContainer = document.createElement('div')
    filtrosContainer.className = "filtros-container"

    const filtro = criarFiltro()
    const legenda = criarLegenda()

    filtrosContainer.append(filtro, legenda)
    return filtrosContainer
}

export function criarCard(aluno) {
    const card = document.createElement('div')
    card.classList = "card"

    const imgAluno = document.createElement('img')
    imgAluno.src = aluno.foto

    const alunoName = document.createElement('span')
    alunoName.textContent = aluno.nome

    card.append(imgAluno, alunoName)

    if (aluno.status.toLowerCase() == "cursando") 
        card.classList.add('cursando')
    else
        card.classList.add('finalizado')

    return card
}

export function criarCardsContainer(cards){
    const cardsContainer = document.createElement('div')
    cardsContainer.className = "cards-container"

    cardsContainer.append(...cards)
    return cardsContainer
}

export function criarContainerPrincipal(curso, cardsContainer) {
    const divPrincipal = document.createElement('div')
    divPrincipal.className = "principal"

    const titulo = document.createElement('h1')
    titulo.className = ""
    titulo.textContent = curso.nome

    divPrincipal.append(titulo, cardsContainer)

    return divPrincipal
}