import editarDeletarHabitoRequisicao from "./editarDeletarHabitoRequisicao.controller.js";

export default class deletarHabitoModal{
    static body = document.querySelector('body')

    static deletarModal(){
        const deletarBackground         = document.createElement('div');
        const deletarContainer          = document.createElement('div');
        const deletarTopoDiv            = document.createElement('div');
        const deletarTopoTitulo         = document.createElement('h2');
        const deletarTopoFechar         = document.createElement('button');
        const deletarConfirmarDiv       = document.createElement('div');
        const deletarConfirmarTitulo    = document.createElement('h3');
        const deletarConfirmarDescricao = document.createElement('p');
        const deletarBotoesDiv          = document.createElement('div')
        const deletarBotoesCancelar     = document.createElement('button');
        const deletarBotoesExcluir      = document.createElement('button');

        deletarBackground.className     = "backgroundModalDeletar"
        deletarContainer.className      = "containerModalDeletar"
        deletarTopoDiv.className        = "headerModalDeletar"
        deletarTopoFechar.className     = "fecharDeletarModal"
        deletarConfirmarDiv.className   = "bodyModalDeletar"
        deletarBotoesDiv.className      = "botoesDeletar"
        deletarBotoesCancelar.className = "botaoCancelar"
        deletarBotoesExcluir.className  = "botaoExcluir"

        deletarTopoTitulo.innerText         = "Excluir hábito"
        deletarTopoFechar.innerText         = "X"
        deletarConfirmarTitulo.innerText    = "Certeza que deseja excluir este hábito?"
        deletarConfirmarDescricao.innerText = "Após executar essa ação não será possível desfazer"
        deletarBotoesCancelar.innerText     = "Cancelar"
        deletarBotoesExcluir.innerText      = "Sim, excluir este hábito"

        deletarTopoDiv.append(deletarTopoTitulo, deletarTopoFechar)
        deletarConfirmarDiv.append(deletarConfirmarTitulo, deletarConfirmarDescricao)
        deletarBotoesDiv.append(deletarBotoesCancelar, deletarBotoesExcluir)
        deletarContainer.append(deletarTopoDiv, deletarConfirmarDiv, deletarBotoesDiv)
        deletarBackground.append(deletarContainer)

        this.body.append(deletarBackground)

        this.abrirModalDeletar()
    }

    static abrirModalDeletar() {
        const buttonAbrirModalDeletar = document.querySelector(".editarBotoesExcluir")

        buttonAbrirModalDeletar.addEventListener("click", () => {
            const modalDeletar = document.querySelector('.backgroundModalDeletar')
            modalDeletar.classList.add('offModalDeletar')

            this.fecharModal()
        })
    }

    static fecharModal(){
        const fecharModal = document.querySelector('.fecharDeletarModal');

        fecharModal.addEventListener('click', () => {
            const modalDeletar = document.querySelector('.backgroundModalDeletar')
            modalDeletar.classList.remove('offModalDeletar')
        })
    }

    static deletarHabito(habitos_id){
        const botaoDeletar = document.querySelector('.botaoExcluir');

        botaoDeletar.addEventListener('click', async e => {
            e.preventDefault()
            // console.log(habitos_id)
            await editarDeletarHabitoRequisicao.deletar(habitos_id)
            const modalDeletar = document.querySelector('.backgroundModalDeletar')
            modalDeletar.classList.add('offModalDeletar')
            window.location.reload()
        })
    }
}