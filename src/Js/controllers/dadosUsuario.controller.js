export default class dadosUsuario {
    static usuario = JSON.parse(localStorage.getItem("@kenzie-habit:usuario"))
    static token = JSON.parse(localStorage.getItem("@kenzie-habit:token"))

     static async pegarDadosUsuario() {
        const imagemUsuario = document.querySelector(".imagemUsuario")
        const nomeUsuario = document.querySelector(".nomeUsuario")
        const imagemUsuarioEdit = document.querySelector(".imagemDaSecaoDoUsuario")

        nomeUsuario.innerText = this.usuario.usr_name
        imagemUsuario.src = this.usuario.usr_image
        imagemUsuarioEdit.src = this.usuario.usr_image
    } 
}

const dropDown = () => {
    const dropDown = document.querySelector(".dropDown2")
    dropDown.style.display = ""
    const divTarefas = document.querySelector(".divTarefas")
    const message = document.querySelector(".message")
    message.style.display = ""
    
    message.classList.add("message2")
    dropDown.classList.add("dropDownDisplay")
    divTarefas.classList.add("divTarefas2")
}

const fechaDropDown = (e) => {
    const dropDown = document.querySelector(".dropDown2")
    const message = document.querySelector(".message")

    message.style.display = "none"
    dropDown.style.display = "none"
}
const x = document.querySelector(".x")

x.addEventListener("click", fechaDropDown)

const imagemUsuario = document.querySelector(".imagemUsuario")
imagemUsuario.addEventListener("click", dropDown)