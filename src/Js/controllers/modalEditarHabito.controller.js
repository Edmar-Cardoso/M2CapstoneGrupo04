import editarDeletarHabitoRequisicao from "./editarDeletarHabitoRequisicao.controller.js";

export default class editarHabitoModal{
    static body = document.querySelector('body');

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

        editarBackground.className      = "backgroundModalEditar offModalEditar"
        // Adicionar o editarModalCriar des
        editarContainer.className       = "containerModalCriar containerModalEditar"
        editarTopoDiv.className         = "headerModalCriar"
        editarTopoFechar.className      = "fecharModalEditar fecharModalCriar"
        editarFormDiv.className         = "bodyModalCriar"
        editarTituloInput.className     = "tituloCriadoDaTarefa"
        editarDescricaoInput.className  = "descricaoCriadaDaTarefa"
        editarCategoriaSelect.className = "categoriaSelecionadaDaTarefa"
        editarBotoesSalvar.className    = "editarBotoesSalvar"

        editarTopoTitulo.innerText          = "Editar hábito"
        editarTopoFechar.innerText          = "X"
        editarTitulo.innerText              = "Título"
        editarTituloInput.placeholder       = "Digitar título"
        editarTituloInput.type              = "text"
        editarTituloInput.name              = "habit_title"
        editarDescricao.innerText           = "Descrição"
        editarDescricaoInput.placeholder    = "Digitar descrição"
        editarDescricaoInput.type           = "text"
        editarDescricaoInput.name           = "habit_description"
        editarCategoriaSelect.name          = "habit_category"
        editarCategoriaSelecionar.innerText = "Selecionar categoria"
        editarCategoriaSelecionar.value     = ""
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
        const editarBotao = document.querySelector('.editarBotao');
        
        editarBotao.addEventListener('click', () => {
            const modalEditar = document.querySelector('.backgroundModalEditar');
            modalEditar.classList.remove("offModalEditar")
        })
        
        this.fecharModal()
    }

    static fecharModal(){
        const fecharModal = document.querySelector('.fecharModalEditar');

        fecharModal.addEventListener('click', () => {
            const modalEditar = document.querySelector('.backgroundModalEditar')
            modalEditar.classList.add('offModalEditar')
        })
    }

    static editarHabito(){
        const editarBotoesSalvar = document.querySelector('.editarBotoesSalvar');

        editarBotoesSalvar.addEventListener('click', async e => {
            e.preventDefault()
            const dados = {}
            const valoresForm = [...e.target.form]
            // const habitos_id = e.target.closest("li").id
            const habitos_id = 409
            console.log(valoresForm)
            valoresForm.forEach(valor => {
                if(valor.value !== ""){
                    dados[valor.name] = valor.value
                    console.log(dados)
                }
            })
            await editarDeletarHabitoRequisicao.editar(habitos_id, dados)
        })
    }
}