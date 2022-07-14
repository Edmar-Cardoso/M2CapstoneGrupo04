import { EditarPerfilRequisicao } from "./editarPerfilRequisicao.controller.js"

export class MontandoModalEditarPerfil {
    static usuario = JSON.parse(localStorage.getItem("@kenzie-habit:usuario")) 

    static montandoDomModal() {
        const body = document.querySelector("body")

        const divBackground = document.createElement("div")
        divBackground.classList.add("backgroundModalEditarPerfil")
        divBackground.classList.add("offModalEditarPerfil")

        const divContainer = document.createElement("div")
        divContainer.classList.add("containerModalEditarPerfil")

        const divHeader = document.createElement("div")
        divHeader.classList.add("headerModalEditarPerfil")

        const h2 = document.createElement("h2")
        h2.innerText = "Editar perfil"

        const buttonFechar = document.createElement("button")
        buttonFechar.classList.add("buttonFecharModalEditarPerfil")
        buttonFechar.innerText = "x"

        const divBody = document.createElement("div")
        divBody.classList.add("bodyModalEditarPerfil")

        const form = document.createElement("form")

        const labelNome = document.createElement("label")
        labelNome.setAttribute("for", "nomeDoUsuario")
        labelNome.innerText = "Nome"

        const inputNome = document.createElement("input")
        inputNome.id = "nomeDoUsuario"
        inputNome.classList.add("nomeDoUsuario")
        inputNome.type = "text"
        inputNome.value = this.usuario.usr_name
        inputNome.required = "true"

        const labelFoto = document.createElement("label")
        labelFoto.setAttribute("for", "novaFoto")
        labelFoto.innerText = "URL da imagem do perfil"

        const inputFoto = document.createElement("input")
        inputFoto.id = "novaFoto"
        inputFoto.classList.add("novaFoto")
        inputFoto.type = "text"
        inputFoto.value = this.usuario.usr_image
        inputFoto.required = "true"


        const buttonCriarTarefa = document.createElement("button")
        buttonCriarTarefa.classList.add("buttonEditarPerfil")
        buttonCriarTarefa.innerText = "Salvar alterações"

        divHeader.append(h2, buttonFechar)
        form.append(labelNome, inputNome, labelFoto, inputFoto, buttonCriarTarefa)
        divBody.append(form)
        divContainer.append(divHeader, divBody)
        divBackground.append(divContainer)
        body.append(divBackground)

        this.abrindoModalEditarPerfil()
    }

    static abrindoModalEditarPerfil() {
        const button = document.querySelector(".editarPerfilBotao")

        button.addEventListener("click", () => {
            const modal = document.querySelector(".backgroundModalEditarPerfil")
            modal.classList.remove("offModalEditarPerfil")

            this.fechandoModalEditarPerfil()
            EditarPerfilRequisicao.editandoPerfil()
        })
    }

    static fechandoModalEditarPerfil() {
        const buttonFechar = document.querySelector(".buttonFecharModalEditarPerfil")

        buttonFechar.addEventListener("click", () => {
            const modal = document.querySelector(".backgroundModalEditarPerfil")
            modal.classList.add("offModalEditarPerfil")
        })
    }
}