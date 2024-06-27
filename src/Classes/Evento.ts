import { EventoService } from "../Services/EventoService";

const eventoService = new EventoService();

export class Evento{

    async listarEventos(){

        return await eventoService.listarEventos();

    }

}