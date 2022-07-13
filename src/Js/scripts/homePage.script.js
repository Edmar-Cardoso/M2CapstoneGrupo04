
import { MontandoModalCriarTarefa } from "../controllers/montandoModalCriarTarefa.controller.js";
import dadosUsuario from "../controllers/dadosUsuario.controller.js";
import editarHabitoModal from "../controllers/modalEditarHabito.controller.js";
import Requisicao from "../controllers/habitosAPI.controller.js";
import HabitosApi from "../controllers/listarHabitos.controller.js";
import FiltrarTodos from "../controllers/filtros.controller.js";


await FiltrarTodos.listagemDeTodos()
await dadosUsuario.pegarDadosUsuario()
await HabitosApi.listarHabitos()
MontandoModalCriarTarefa.montandoDomModal()
editarHabitoModal.editarModal()
editarHabitoModal.editarHabito()
editarHabitoModal.deletarHabito()
