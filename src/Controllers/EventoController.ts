import { Request, Response } from "express";
import { Evento } from "../Classes/Evento";

export class EventoController{

    async listarEventos(req: Request, res: Response){

        const evento = new Evento();
        const listaEventos = await evento.listarEventos();

        res.send(listaEventos);

    }

}