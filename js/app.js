import {getCursos, getAlunosPorCurso} from './rotas.js'
import { criarBotoesCursos, criarCursoContainer, criarContainer } from './principal.js'

const main = document.getElementById("main")



async function carregarTelaHome() {
    main.replaceChildren()
    main.className = "main-principal"

    const cursos = await getCursos()

    const botoes = cursos.map(curso => {
        const btn = criarBotoesCursos(curso)

        btn.addEventListener('click', () => carregarTelaTurma(curso.id))

        return btn
    })

    const cursoContainer = criarCursoContainer(botoes)
    const container = criarContainer()
    main.append(container,cursoContainer)
}

async function carregarTelaTurma(idCurso) {
    
}