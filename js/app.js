import { getCursos, getAlunosPorCurso, filtrarAlunosPorStatus } from './rotas.js'
import { criarBotoesCursos, criarCursoContainer, criarContainer } from './principal.js'
import { criarFiltrosContainer, criarCard, criarContainerPrincipal, criarCardsContainer } from './tela_turma.js'

const main = document.getElementById("main")

const buttonVoltar = document.getElementById("button-header")

let mudandoDeTela = false

async function filtrarAlunos(statusSelecionado, idCurso) {
    let alunos;

    if (statusSelecionado == "todos") {
        alunos = await getAlunosPorCurso(idCurso)
    } else {
        alunos = await filtrarAlunosPorStatus(statusSelecionado, idCurso)
    }

    const cards = alunos.map(aluno => {
        const card = criarCard(aluno)
        card.addEventListener('click', () => carregarInfoAluno(aluno.id))

        return card
    })

    const novoCardsContainer = criarCardsContainer(cards)
    const cardsContainerAtual = document.querySelector('.cards-container')

    if (cardsContainerAtual) {
        cardsContainerAtual.replaceWith(novoCardsContainer)
    }
}

async function carregarTelaHome() {

    if (mudandoDeTela)
        return

    mudandoDeTela = true

    main.replaceChildren()
    main.append(telaCarregamento())

    try {
        const cursos = await getCursos()

        main.replaceChildren()
        main.className = "main-principal"


        const botoes = cursos.map(curso => {
            const btn = criarBotoesCursos(curso)

            btn.addEventListener('click', () => carregarTelaTurma(curso))

            return btn
        })

        const cursoContainer = criarCursoContainer(botoes)
        const container = criarContainer()
        main.append(container, cursoContainer)
    } catch (error) {
        console.error("Erro ao carregar tela: " + error)
    } finally {
        mudandoDeTela = false
    }

}

async function carregarTelaTurma(curso) {
    main.replaceChildren()
    main.classList.remove("main-principal")

    const buttonVoltar = document.querySelector(".voltar-sair")
    buttonVoltar.children[1].textContent = "Voltar"

    buttonVoltar.onclick = () => {
        carregarTelaHome()
        buttonVoltar.children[1].textContent = "Sair"
    }

    if (mudandoDeTela) {
        return
    }

    mudandoDeTela = true
    main.replaceChildren()
    main.append(telaCarregamento())

    try {
        let alunos = await getAlunosPorCurso(curso.id)
        main.replaceChildren()

        const cards = alunos.map(aluno => {
            const card = criarCard(aluno)
            card.addEventListener('click', () => carregarInfoAluno(aluno.id))
            return card
        })

        const cardsContainer = criarCardsContainer(cards)
        const filtroContainer = criarFiltrosContainer(filtrarAlunos, curso.id)
        const containerPrincipal = criarContainerPrincipal(curso, cardsContainer)

        main.append(filtroContainer, containerPrincipal)
    } catch (error) {
        console.error("Erro ao carregar tela: " + error)
    }finally{
        mudandoDeTela = false
    }
}

async function carregarInfoAluno(alunoId) {

}

function telaCarregamento() {
    let divLoadingContainer = document.createElement('div')
    divLoadingContainer.className = "loading-container"

    let imgLogoLoading = document.createElement('img')
    imgLogoLoading.src = "./img/scudo-logo-image.svg"

    let loading = document.createElement('div')
    loading.className = "loading"

    divLoadingContainer.append(imgLogoLoading, loading)
    return divLoadingContainer
}
