import {getCursos, getAlunosPorCurso} from './rotas.js'
import { criarBotoesCursos, criarCursoContainer, criarContainer } from './principal.js'
import { criarFiltrosContainer, criarCards, criarContainerPrincipal, criarCardsContainer } from './tela_turma.js'

const main = document.getElementById("main")

const buttonVoltar = document.getElementById("button-header")

async function carregarTelaHome() {
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
    main.append(container,cursoContainer)
}

async function carregarTelaTurma(curso) {
    main.replaceChildren()
    main.classList.remove("main-principal")

    const buttonVoltar = document.getElementById("button-header")
    buttonVoltar.children[1].textContent = "Voltar"

    buttonVoltar.addEventListener('click', () => {
        carregarTelaHome()
        buttonVoltar.children[1].textContent = "Sair"
        buttonVoltar.removeEventListener()
    })
    
    const alunos = await getAlunosPorCurso(curso.id)    

    const filtroContainer = criarFiltrosContainer()
    
    const cards = alunos.map(aluno => {
        const card = await criarCards(aluno)
        

        card.addEventListener('click', () => carregarInfoAluno(aluno.id))

        return card
    })

    const cardContainer = criarCardsContainer(cards)
    const containerPrincipal = criarContainerPrincipal(curso, cardContainer)

    main.append(filtroContainer, containerPrincipal)
}

carregarTelaHome()
