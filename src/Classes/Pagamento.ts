import { Usuario } from "./Usuario";

export class Pagamento{

    depositarSaldo(valor: number, usuario: Usuario){

        const novoSaldo = usuario.getSaldo() + valor;
        usuario.atualizarSaldo(novoSaldo);

        return true;

    }

    sacarSaldo(valor: number, usuario: Usuario){

        const saldoUsuario = usuario.getSaldo();

        if(saldoUsuario == 0 || saldoUsuario < valor){

            return false;

        }

        const novoSaldo = usuario.getSaldo() - valor;
        usuario.atualizarSaldo(novoSaldo);

        return true;
    }

}