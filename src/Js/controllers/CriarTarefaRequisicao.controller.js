export class CriarTarefaRequisicao {
    static realizandoCadastro() {
        const buttonCriarTarefa = document.querySelector(".buttonCriarTarefa")

        buttonCriarTarefa.addEventListener("click", async () => {
            const dadosDoUsuario = this.montandoDadosFetch()
            console.log(await this.realizandoFetch(dadosDoUsuario))
            console.log("Cheguei até aqui!")
        })
    }

    static montandoDadosFetch() {
        const tituloTarefa = document.querySelector(".tituloCriadoDaTarefa").value
        const descricaoTarefa = document.querySelector(".descricaoCriadaDaTarefa").value
        const categoriaTarefa = document.querySelector(".categoriaSelecionadaDaTarefa").value

        return {
            habit_title: tituloTarefa,
            habit_description: descricaoTarefa,
            habit_category: categoriaTarefa
        }
    }

    static async realizandoFetch(dados) {
        const url = "https://habits-kenzie.herokuapp.com/api/habits"
        const token = 0

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
}
