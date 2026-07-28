import { getCursos, getAlunosPorCurso, filtrarAlunosPorStatus } from './rotas.js'
import { criarBotoesCursos, criarCursoContainer, criarContainer } from './principal.js'
import { criarFiltrosContainer, criarCard, criarContainerPrincipal, criarCardsContainer } from './tela_turma.js'

const main = document.getElementById("main")

const buttonVoltar = document.getElementById("button-header")

let mudandoDeTela = false

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
    }finally{
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
    

    const alunos = await getAlunosPorCurso(curso.id)

    const filtroContainer = criarFiltrosContainer()

    const cards = alunos.map(aluno => {
        
        const card = criarCard(aluno)


        card.addEventListener('click', () => carregarInfoAluno(aluno.id))

        return card
    })

    const cardContainer = criarCardsContainer(cards)
    const containerPrincipal = criarContainerPrincipal(curso, cardContainer)

    main.append(filtroContainer, containerPrincipal)
}

async function carregarInfoAluno(alunoId) {
    
}

carregarTelaHome()
