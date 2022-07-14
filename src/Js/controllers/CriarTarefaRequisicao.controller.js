import HabitosApi from "./listarHabitos.controller.js"
import { MontandoModalCriarTarefa } from "./montandoModalCriarTarefa.controller.js"

export class CriarTarefaRequisicao {
    static funcaoChamada = false

    static realizandoCadastro() {
        const buttonCriarTarefa = document.querySelector(".buttonCriarTarefa")
        

        
        if(this.funcaoChamada === false) {
            buttonCriarTarefa.addEventListener("click", async (event) => {
                event.preventDefault()
                const dadosDoUsuario = this.montandoDadosFetch()
                const fetch = await this.realizandoFetch(dadosDoUsuario)
                this.montandoModalSucess()
                if(fetch.habit_id) {
                    const modal = document.querySelector(".backgroundModalCriar")
                    modal.classList.remove("offModalCriar")
                    
                    const modalSucesso = document.querySelector(".backgroundModalCriarSucesso")
                    modalSucesso.classList.add("offModalCriarSucess")
    
                    const tituloTarefa    = document.querySelector(".backgroundModalCriar .tituloCriadoDaTarefa")
                    const descricaoTarefa = document.querySelector(".backgroundModalCriar .descricaoCriadaDaTarefa")
                    const categoriaTarefa = document.querySelector(".backgroundModalCriar .categoriaSelecionadaDaTarefa")

                    tituloTarefa.value = ""
                    descricaoTarefa.value = ""
                    categoriaTarefa.value = ""

                    tituloTarefa.removeAttribute("required")
                    descricaoTarefa.removeAttribute("required")
                    categoriaTarefa.style.border = "none"

                    HabitosApi.listarHabitos()
                    this.removendoModalSucesso()
                }
                else {  
                    const tituloTarefa    = document.querySelector(".backgroundModalCriar .tituloCriadoDaTarefa")
                    const descricaoTarefa = document.querySelector(".backgroundModalCriar .descricaoCriadaDaTarefa")
                    const categoriaTarefa = document.querySelector(".backgroundModalCriar .categoriaSelecionadaDaTarefa")

                    tituloTarefa.required = "true"
                    descricaoTarefa.required = "true"
                    if(fetch.message === "habit_category obrigatório") {
                        categoriaTarefa.style.border = "red 1px solid"
                    }
                }
            })
        }
        this.funcaoChamada = true
    }

    static montandoDadosFetch() {

        const tituloTarefa    = document.querySelector(".backgroundModalCriar .tituloCriadoDaTarefa").value
        const descricaoTarefa = document.querySelector(".backgroundModalCriar .descricaoCriadaDaTarefa").value
        const categoriaTarefa = document.querySelector(".backgroundModalCriar .categoriaSelecionadaDaTarefa").value

        return {
            habit_title: tituloTarefa,
            habit_description: descricaoTarefa,
            habit_category: categoriaTarefa
        }
    }

    static async realizandoFetch(dados) {
        const url = "https://habits-kenzie.herokuapp.com/api/habits"
        const token = JSON.parse(localStorage.getItem("@kenzie-habit:token")) 

        return await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`
            },
            body: JSON.stringify(dados)
        }).then(response => response.json())
            .catch((err) => {
                console.log(err)
            })
    }

    static montandoModalSucess() {
        const body = document.querySelector("body")

        const divBackground = document.createElement("div")
        divBackground.classList.add("backgroundModalCriarSucesso")
        //divBackground.classList.add("offModalCriarSucess")

        const divContainer = document.createElement("div")
        divContainer.classList.add("containerModalCriarSucesso")

        const divImg = document.createElement("div")
        divImg.classList.add("imgSucessoModal")

        const icone = document.createElement("i")
        icone.classList.add("fa-solid")
        icone.classList.add("fa-check")

        const divMensagem = document.createElement("div")
        divMensagem.classList.add("mensagemModalSucesso")

        const h4 = document.createElement("h4")
        h4.classList.add("TituloMensagemModalSucesso")
        h4.innerText = "Sucesso!"

        const p = document.createElement("p")
        p.innerText = "Seu hábito foi criado"

        divImg.append(icone)
        divMensagem.append(h4, p)
        divContainer.append(divImg, divMensagem)
        divBackground.append(divContainer)
        body.append(divBackground)
    }

    static removendoModalSucesso() {
        const body = document.querySelector("body")

        body.addEventListener("click", () => {
            const modalSucesso = document.querySelector(".backgroundModalCriarSucesso")
            modalSucesso.classList.remove("offModalCriarSucess")
        })
    }
}
