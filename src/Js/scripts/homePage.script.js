
import { MontandoModalCriarTarefa } from "../controllers/montandoModalCriarTarefa.controller.js";
import dadosUsuario from "../controllers/dadosUsuario.controller.js";
import editarHabitoModal from "../controllers/modalEditarHabito.controller.js";
import Requisicao from "../controllers/habitosAPI.controller.js";
import HabitosApi from "../controllers/listarHabitos.controller.js";

await dadosUsuario.pegarDadosUsuario()
editarHabitoModal.editarModal()
editarHabitoModal.editarHabito()
await HabitosApi.listarHabitos()
MontandoModalCriarTarefa.montandoDomModal()


