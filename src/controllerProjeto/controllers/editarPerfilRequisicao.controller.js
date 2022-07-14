export class EditarPerfilRequisicao {
    static chamandoFuncao = false

    static editandoPerfil() {
        const botaoEditar = document.querySelector(".buttonEditarPerfil")

        if(this.chamandoFuncao === false) {
            botaoEditar.addEventListener("click", async (event) => {
                event.preventDefault()

                const novoNome = document.querySelector(".nomeDoUsuario").value
                const novaFoto = document.querySelector(".novaFoto").value

                const dadosUsuario = this.montandoDadosFetch()

                if(novoNome !== "" && novaFoto !== "") {
                    const fetch = await this.realizandoFetch(dadosUsuario)
                    console.log(fetch)
                    if(fetch.message === "favor inserir um link de imagem válido no campo usr_image") {
                        const inputFoto = document.querySelector(".novaFoto")
                        inputFoto.style.border = "red 1px solid"
                    }
                    else {
                        const inputFoto = document.querySelector(".novaFoto")
                        inputFoto.style.border = "none"

                        localStorage.removeItem("@kenzie-habit:usuario")
                        localStorage.setItem("@kenzie-habit:usuario", JSON.stringify(fetch))

                    
                        document.location.reload()
                    }
                    
                    
                }  
            })
        }
        this.chamandoFuncao = true
    }
    static montandoDadosFetch() {
        const novoNome = document.querySelector(".nomeDoUsuario").value
        const novaFoto = document.querySelector(".novaFoto").value

        return {
            usr_image: novaFoto,
            usr_name: novoNome
        }
    }

    static async realizandoFetch(dados) {
        const url = "https://habits-kenzie.herokuapp.com/api/user/profile"
        const  token   = JSON.parse(localStorage.getItem("@kenzie-habit:token")) 

        return await fetch(url, {
            method: "PATCH",
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

}