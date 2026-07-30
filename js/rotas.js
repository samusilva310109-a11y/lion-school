'use strict'

const url = "https://lion-school-phbo.onrender.com"

export async function getCursos() {
    const response = await fetch(`${url}/cursos`)

    if(!response.ok)
        throw new Error("Erro ao listar os cursos")

    return response.json()
}

export async function getCursoPorID(idCurso) {
    const response = await fetch(`${url}/cursos/${idCurso}`)

    if(!response.ok)
        throw new Error("Erro ao buscar o curso")

    return response.json()
}

export async function getAlunos() {
    const response = await fetch(`${url}/alunos`)

    if(!response.ok)
        throw new Error("Erro ao buscar alunos")

    return response.json()
}

export async function getAlunosPorCurso(idCurso) {
    const response = await fetch(`${url}/alunos?curso_id=${idCurso}`)

    if (!response.ok)
        throw new Error("Erro ao filtrar alunos por curso")
        
    return response.json()
}

export async function filtrarAlunosPorStatus(status, idCurso) {
    const response = await fetch(`${url}/alunos?status=${status}&curso_id=${idCurso}`)

    if(!response.ok)
        throw new Error("Erro ao filtrar alunos por status")
        
    return response.json()
}   

export async function getAlunoID(idAluno) {
    const response = await fetch(`${url}/alunos/${idAluno}`)

    if(!response.ok)
        throw new Error("Erro ao buscar aluno")

    
    return response.json()
}


