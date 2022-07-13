import HabitosApi from "./listarHabitos.controller.js";
import editarHabitoModal from "./modalEditarHabito.controller.js";

const botao = document.querySelector(".botaoTodos")

class FiltrarTodos {

    static async listagemDeTodos() {
        HabitosApi.listarHabitos()
    }
}

botao.addEventListener("click", FiltrarTodos.listagemDeTodos)

export default FiltrarTodos;