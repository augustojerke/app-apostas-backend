export class Autenticador{

   private token: string | null

   constructor(){
      this.token = "";
   }

   getToken = () => this.token
   
   validarToken(id: number | null, nome: string, senha: string){
      this.token = `${id}/${nome}/${senha}`;
   }

}