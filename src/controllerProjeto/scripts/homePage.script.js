
import { MontandoModalCriarTarefa } from "../controllers/montandoModalCriarTarefa.controller.js";
import dadosUsuario from "../controllers/dadosUsuario.controller.js";
import editarHabitoModal from "../controllers/modalEditarHabito.controller.js";
import Requisicao from "../controllers/habitosAPI.controller.js";
import HabitosApi from "../controllers/listarHabitos.controller.js";
import FiltrarTodos from "../controllers/filtros.controller.js";
import {MontandoModalEditarPerfil} from "../controllers/montandoModalEditarPerfil.controller.js"
import deletarHabitoModal from "../controllers/modalDeletarHabito.controller.js";


dadosUsuario.logoutUser()
await dadosUsuario.pegarDadosUsuario()
await HabitosApi.listarHabitos()
MontandoModalCriarTarefa.montandoDomModal()
MontandoModalEditarPerfil.montandoDomModal()
deletarHabitoModal.deletarModal()