import { getCursos, getAlunosPorCurso, filtrarAlunosPorStatus } from './rotas.js'
import { criarBotoesCursos, criarCursoContainer, criarContainer } from './principal.js'
import { criarFiltrosContainer, criarCard, criarContainerPrincipal, criarCardsContainer } from './tela_turma.js'

const main = document.getElementById("main")

const buttonVoltar = document.getElementById("button-header")

let mudandoDeTela = false

async function filtrarAlunos(statusSelecionado, idCurso) {
    let alunos;

    console.log(statusSelecionado);
    

    if (statusSelecionado == "todos") {
        alunos = await getAlunosPorCurso(idCurso)
    }else{
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

    try {

        main.replaceChildren()

        main.className = "main-principal"

        const cursos = await getCursos()

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

    let alunos = await getAlunosPorCurso(curso.id)

    const cards = alunos.map(aluno => {
        const card = criarCard(aluno)
        card.addEventListener('click', () => carregarInfoAluno(aluno.id))
        return card
    })

    const cardsContainer = criarCardsContainer(cards)
    const filtroContainer = criarFiltrosContainer(filtrarAlunos, curso.id)
    const containerPrincipal = criarContainerPrincipal(curso, cardsContainer)

    main.append(filtroContainer, containerPrincipal)
}

async function carregarInfoAluno(alunoId) {

}



carregarTelaHome()
