import Habitos from "../models/habitos.model.js";
import Requisicao from "./habitosAPI.controller.js";
import HabitosApi from "./listarHabitos.controller.js";
import editarHabitoModal from "./modalEditarHabito.controller.js";

const botao = document.querySelector(".botaoTodos")
const botaoConcluidos = document.querySelector('.botaoConcluidos')


class FiltrarTodos {

    static habitos = document.querySelector(".ulHabitos");

    static async listagemDeTodos() {
        HabitosApi.listarHabitos()
    }

    static async listagemDeConcluidos(){
        this.habitos.innerHTML = ""

        const teste = await Requisicao.puxarDados()
        const teste2 = []

        teste.forEach(habito => {
            if(habito.habit_status === true){
                teste2.push(habito)
            }
        })
        teste2.sort((a,b) => b.habit_id - a.habit_id)
        
        teste2.forEach(habito => {
          const teste3 = new Habitos(habito.habit_id, habito.habit_title, habito.habit_description, habito.habit_category, habito.habit_status)
            
          const listagemHabitos = teste3.listagemHabitos()
          this.habitos.append(listagemHabitos)
        })
        editarHabitoModal.abrirEditarModal()
    }
}

botao.addEventListener("click", FiltrarTodos.listagemDeTodos)
botaoConcluidos.addEventListener('click', () => {
    FiltrarTodos.listagemDeConcluidos()
})


export default FiltrarTodos;