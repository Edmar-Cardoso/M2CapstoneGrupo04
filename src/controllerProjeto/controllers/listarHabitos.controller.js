import Requisicao from "./habitosAPI.controller.js";
import Habitos from "../models/habitos.model.js"; 
import editarHabitoModal from "./modalEditarHabito.controller.js";


class HabitosApi{

    static async listarHabitos(){
        const habitos = document.querySelector(".ulHabitos")

        habitos.innerHTML = ""

        const habitosDoApi = await Requisicao.puxarDados();
        habitosDoApi.sort((a,b) => b.habit_id - a.habit_id)

        habitosDoApi.forEach((habito) => {
            const habitosFinal  = new Habitos(habito.habit_id, habito.habit_title, habito.habit_description, habito.habit_category, habito.habit_status)

            const listarHabitosHtml = habitosFinal.listagemHabitos();

            habitos.append(listarHabitosHtml)
        });

    editarHabitoModal.editarModal()
}

}
export default HabitosApi;