import { ApostaService } from "../Services/ApostaService"

const apostaService = new ApostaService();

export interface ApostaSchema{
    id_aposta: number | null
    valor: number
    id_usuario: number
    id_evento: number
    finalizada: boolean
}

export class Aposta{
    
    private id_aposta: number | null
    private valor: number
    private id_usuario: number
    private id_evento: number
    private finalizada: boolean

    setFinalizada = () => this.finalizada = true;

    constructor(a: ApostaSchema){
        this.id_aposta = null
        this.valor = a.valor;
        this.id_usuario = a.id_usuario;
        this.id_evento = a.id_evento;
        this.finalizada = a.finalizada;
    }

    async realizarAposta(){

        await apostaService.realizarAposta(this.valor, this.id_usuario, this.id_evento);
        
    }

}