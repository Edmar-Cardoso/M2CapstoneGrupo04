import editarDeletarHabitoRequisicao from "./editarDeletarHabitoRequisicao.controller.js";
import HabitosApi from "./listarHabitos.controller.js";
import deletarHabitoModal from "./modalDeletarHabito.controller.js";

export default class editarHabitoModal{
    static body = document.querySelector('body');

    static funcaoChamada = false

    static editarModal(){
        const editarBackground          = document.createElement('div');
        const editarContainer           = document.createElement('div');
        const editarTopoDiv             = document.createElement('div');
        const editarTopoTitulo          = document.createElement('h2');
        const editarTopoFechar          = document.createElement('button');
        const editarFormDiv             = document.createElement('div')
        const editarForm                = document.createElement('form');
        const editarTituloLabel         = document.createElement('label');
        const editarTitulo              = document.createElement('p');
        const editarTituloInput         = document.createElement('input');
        const editarDescricaoLabel      = document.createElement('label');
        const editarDescricao           = document.createElement('p');
        const editarDescricaoInput      = document.createElement('Input');
        const editarCategoriaLabel      = document.createElement('label')
        const editarCategoriaSelect     = document.createElement('select');
        const editarCategoriaSelecionar = document.createElement('option');
        const editarCategoriaCasa       = document.createElement('option');
        const editarCategoriaTrabalho   = document.createElement('option');
        const editarCategoriaEstudos    = document.createElement('option');
        const editarCategoriaSaude      = document.createElement('option');
        const editarCategoriaLazer      = document.createElement('option');
        const editarStatusDiv           = document.createElement('div');
        const editarStatus              = document.createElement('p');
        // const editarStatusCheckbox      = document.createElement('');
        const editarBotoesDiv           = document.createElement('div');
        const editarBotoesExcluir       = document.createElement('button');
        const editarBotoesSalvar        = document.createElement('button');

        editarBackground.className      = "backgroundModalEditar"
        editarContainer.className       = "containerModalEditar"
        editarTopoDiv.className         = "headerModalEditar"
        editarTopoFechar.className      = "fecharModalEditar"
        editarFormDiv.className         = "bodyModalEditar"
        editarTituloInput.className     = "tituloEditadoDaTarefa"
        editarDescricaoInput.className  = "descricaoEditadoDaTarefa"
        editarCategoriaSelect.className = "categoriaEditadadaDaTarefa"
        editarBotoesDiv.className       = "editarBotoesDiv"
        editarBotoesExcluir.className   = "editarBotoesExcluir"
        editarBotoesSalvar.className    = "editarBotoesSalvar"

        editarTopoTitulo.innerText          = "Editar hábito"
        editarTopoFechar.innerText          = "X"
        editarTitulo.innerText              = "Título"
        editarTituloInput.placeholder       = "Digitar título"
        editarTituloInput.type              = "text"
        editarTituloInput.value             = " "
        editarTituloInput.name              = "habit_title"
        editarTituloInput.required          = "true"
        editarDescricao.innerText           = "Descrição"
        editarDescricaoInput.placeholder    = "Digitar descrição"
        editarDescricaoInput.type           = "text"
        editarDescricaoInput.name           = "habit_description"
        editarDescricaoInput.required       = "true"
        editarDescricaoInput.value          = " "
        editarCategoriaSelect.name          = "habit_category"
        editarCategoriaSelect.required      = "true"
        editarCategoriaSelecionar.innerText = "Selecionar categoria"
        editarCategoriaSelecionar.value     = " "
        editarCategoriaCasa.innerText       = "Casa"
        editarCategoriaCasa.value           = "casa"
        editarCategoriaEstudos.innerText    = "Estudos"
        editarCategoriaEstudos.value        = "estudos"
        editarCategoriaLazer.innerText      = "Lazer"
        editarCategoriaLazer.value          = "lazer"
        editarCategoriaTrabalho.innerText   = "Trabalho"
        editarCategoriaTrabalho.value       = "trabalho"
        editarCategoriaSaude.innerText      = "Saúde"
        editarCategoriaSaude.value          = "saude"
        editarStatus.innerText              = "Status"
        editarBotoesExcluir.innerText       = "Excluir"
        editarBotoesSalvar.innerText        = "Salvar alterações"

        editarTituloLabel.append(editarTitulo, editarTituloInput)
        editarDescricaoLabel.append(editarDescricao, editarDescricaoInput)
        editarCategoriaSelect.append(editarCategoriaSelecionar, editarCategoriaCasa, editarCategoriaEstudos, editarCategoriaLazer, editarCategoriaTrabalho, editarCategoriaSaude)
        editarCategoriaLabel.append(editarCategoriaSelect)
        editarStatusDiv.append(editarStatus)
        editarBotoesDiv.append(editarBotoesExcluir, editarBotoesSalvar)
        editarForm.append(editarTituloLabel, editarDescricaoLabel, editarCategoriaSelect, editarStatusDiv, editarBotoesDiv)
        editarFormDiv.append(editarForm)
        editarTopoDiv.append(editarTopoTitulo, editarTopoFechar)
        editarContainer.append(editarTopoDiv, editarFormDiv)
        editarBackground.append(editarContainer)

        this.body.append(editarBackground)

        this.abrirEditarModal()
    }
    
    static abrirEditarModal(){
        const editarBotao = document.querySelectorAll('.editarBotao');

        for(let i=0; i<editarBotao.length; i++){
            editarBotao[i].addEventListener('click', (e) => {
                const modalEditar = document.querySelector('.backgroundModalEditar');
                modalEditar.classList.add("offModalEditar")
    
                const habitoId = e.target.closest('li').id
                const teste = document.getElementById(habitoId).innerHTML
                console.log(teste)
                // const test2 = [...teste]
                // console.log(test2)
                this.editarHabito(habitoId)
                this.deletarHabito(habitoId)
                
                deletarHabitoModal.deletarModal()
            })
        }
        
        
        this.fecharModal()
    }

    static fecharModal(){
        const fecharModal = document.querySelector('.fecharModalEditar');

        fecharModal.addEventListener('click', () => {
            const modalEditar = document.querySelector('.backgroundModalEditar')
            modalEditar.classList.remove('offModalEditar')
        })
    }

    static editarHabitoDados(){

        const editarTitulo = document.querySelector('.tituloEditadoDaTarefa').value
        const editarDescricao = document.querySelector('.descricaoEditadoDaTarefa').value
        const editarCategoria = document.querySelector('.categoriaEditadadaDaTarefa').value

        return {
            habit_title: editarTitulo,
            habit_description: editarDescricao,
            habit_category: editarCategoria
        }
    }

    static editarHabito(habitoId){
        const editarBotoesSalvar = document.querySelector('.editarBotoesSalvar');

        console.log(this.funcaoChamada)
        if(this.funcaoChamada === false){
            editarBotoesSalvar.addEventListener('click', async e => {
                e.preventDefault()
                const dados = this.editarHabitoDados()
                console.log(await editarDeletarHabitoRequisicao.editar(habitoId, dados))
                const fetch = await editarDeletarHabitoRequisicao.editar(habitoId, dados)
                this.montandoModalSucess()
                console.log(fetch.habit_id)
                if(fetch.habit_id){
                    console.log(fetch.habit_id)
                    const modalEditar = document.querySelector('.backgroundModalEditar')
                    modalEditar.classList.remove('offModalEditar')

                    const modalSucesso = document.querySelector(".backgroundModalCriarSucesso")
                    modalSucesso.classList.add('offModalCriarSucess')

                    const editarTitulo = document.querySelector('.tituloEditadoDaTarefa')
                    const editarDescricao = document.querySelector('.descricaoEditadoDaTarefa')
                    const editarCategoria = document.querySelector('.categoriaEditadadaDaTarefa')

                    editarTitulo.value = ""
                    editarDescricao.value = ""
                    editarCategoria.value = ""
                    
                    editarTitulo.removeAttribute("required")
                    editarDescricao.removeAttribute("required")
                    editarCategoria.style.border = "none"
                
                    HabitosApi.listarHabitos()
                    this.removendoModalSucesso()
                } else {
                    const editarTitulo = document.querySelector('.tituloEditadoDaTarefa')
                    const editarDescricao = document.querySelector('.descricaoEditadoDaTarefa')
                    const editarCategoria = document.querySelector('.categoriaEditadadaDaTarefa')

                    editarTitulo.required = "true"
                    editarDescricao.required = "true"
                    if(fetch.message === 'categorias aceitas: saude, estudos, casa, trabalho e lazer') {
                        editarCategoria.style.border = "red 1px solid"
                    }
                }
    
                HabitosApi.listarHabitos()
            })
        }

        this.funcaoChamada = true
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
        p.innerText = "Seu hábito foi editado"

        divImg.append(icone)
        divMensagem.append(h4, p)
        divContainer.append(divImg, divMensagem)
        divBackground.append(divContainer)
        body.append(divBackground)

        return body
    }

    static removendoModalSucesso() {
        const body = document.querySelector("body")

        body.addEventListener("click", () => {
            const modalSucesso = document.querySelector(".backgroundModalCriarSucesso")
            modalSucesso.classList.remove("offModalCriarSucess")
        })
    }

    static deletarHabito(habitoId){
        const editarBotoesExcluir = document.querySelector('.editarBotoesExcluir');

        editarBotoesExcluir.addEventListener('click', e =>{
            e.preventDefault();
            console.log('tste')
            const modalEditar = document.querySelector('.backgroundModalEditar')
            modalEditar.classList.remove('offModalEditar')

            const modalDeletar = document.querySelector('.backgroundModalDeletar');
            modalDeletar.classList.add("offModalDeletar")

            deletarHabitoModal.deletarHabito(habitoId)
        })
    }
}