
import { MontandoModalCriarTarefa } from "../controllers/montandoModalCriarTarefa.controller.js";
import dadosUsuario from "../controllers/dadosUsuario.controller.js";
import editarHabitoModal from "../controllers/modalEditarHabito.controller.js";

MontandoModalCriarTarefa.montandoDomModal()
await dadosUsuario.pegarDadosUsuario()
editarHabitoModal.editarModal()
editarHabitoModal.editarHabito()