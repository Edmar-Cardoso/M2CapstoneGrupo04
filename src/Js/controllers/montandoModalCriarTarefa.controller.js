import { CriarTarefaRequisicao } from "./CriarTarefaRequisicao.controller.js"

export class MontandoModalCriarTarefa {
    static montandoDomModal() {
        const body = document.querySelector("body")

        const divBackground = document.createElement("div")
        divBackground.classList.add("backgroundModalCriar")
        //divBackground.classList.add("offModalCriar")

        const divContainer = document.createElement("div")
        divContainer.classList.add("containerModalCriar")

        const divHeader = document.createElement("div")
        divHeader.classList.add("headerModalCriar")

        const h2 = document.createElement("h2")
        h2.innerText = "Criar hábito"

        const buttonFechar = document.createElement("button")
        buttonFechar.classList.add("buttonFecharModalCriar")
        buttonFechar.innerText = "x"

        const divBody = document.createElement("div")
        divBody.classList.add("bodyModalCriar")

        const form = document.createElement("form")

        const labelTitulo = document.createElement("label")
        labelTitulo.setAttribute("for", "tituloCriadoDaTarefa")
        labelTitulo.innerText = "Título"

        const inputTitulo = document.createElement("input")
        inputTitulo.id = "tituloCriadoDaTarefa"
        inputTitulo.classList.add("tituloCriadoDaTarefa")
        inputTitulo.type = "text"
        inputTitulo.placeholder = "Digitar título"

        const labelDescricao = document.createElement("label")
        labelDescricao.setAttribute("for", "descricaoCriadaDaTarefa")
        labelDescricao.innerText = "Descrição"

        const inputDescricao = document.createElement("input")
        inputDescricao.id = "descricaoCriadaDaTarefa"
        inputDescricao.classList.add("descricaoCriadaDaTarefa")
        inputDescricao.type = "text"
        inputDescricao.placeholder = "Digitar descrição"

        const labelCategoria = document.createElement("label")
        labelCategoria.setAttribute("for", "categoriaSelecionadaDaTarefa")
        labelCategoria.innerText = "Categoria"

        const selectCategoria = document.createElement("select")
        selectCategoria.id = "categoriaSelecionadaDaTarefa"
        selectCategoria.classList.add("categoriaSelecionadaDaTarefa")

        const optionDefault = document.createElement("option")
        optionDefault.value = ""
        optionDefault.innerText = "Selecionar Categoria"

        const optionCasa = document.createElement("option")
        optionCasa.value = "casa"
        optionCasa.innerText = "Casa"

        const optionEstudo = document.createElement("option")
        optionEstudo.value = "estudos"
        optionEstudo.innerText = "Estudos"

        const optionLazer = document.createElement("option")
        optionLazer.value = "lazer"
        optionLazer.innerText = "Lazer"

        const optionTrabalho = document.createElement("option")
        optionTrabalho.value = "trabalho"
        optionTrabalho.innerText = "Trabalho"

        const optionSaude = document.createElement("option")
        optionSaude.value = "saude"
        optionSaude.innerText = "Saude"

        const buttonCriarTarefa = document.createElement("button")
        buttonCriarTarefa.classList.add("buttonCriarTarefa")
        buttonCriarTarefa.innerText = "Inserir"

        divHeader.append(h2, buttonFechar)
        selectCategoria.append(optionDefault, optionCasa, optionEstudo, optionLazer, optionTrabalho, optionSaude)
        form.append(labelTitulo, inputTitulo, labelDescricao, inputDescricao, labelCategoria, selectCategoria, buttonCriarTarefa)
        divBody.append(form)
        divContainer.append(divHeader, divBody)
        divBackground.append(divContainer)
        body.append(divBackground)

        this.abrindoModalCriarTarefa()
    }

    static abrindoModalCriarTarefa() {
        const button = document.querySelector(".botaoCriar")

        button.addEventListener("click", () => {
            const modal = document.querySelector(".backgroundModalCriar")
            modal.classList.add("offModalCriar")

            this.fechandoModalCriarTarefa()
            CriarTarefaRequisicao.realizandoCadastro()
            console.log("oi")
        })
    }

    static fechandoModalCriarTarefa() {
        const buttonFechar = document.querySelector(".buttonFecharModalCriar")

        buttonFechar.addEventListener("click", () => {
            const modal = document.querySelector(".backgroundModalCriar")
            modal.classList.remove("offModalCriar")
        })
    }

}