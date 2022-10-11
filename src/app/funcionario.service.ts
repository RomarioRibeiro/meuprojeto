import { LogService } from './log.service';
import { Injectable } from "@angular/core";

@Injectable()
export class FuncionarioService {


  constructor(private logService: LogService) {

  }

ultimoId = 1;
funcionarios =[{id: 1, nome: 'João'}];

adicionar (nome: string) {
this.logService.log(`Adicionando nome ${nome}`)
const funcionario = {
  id: ++this.ultimoId,
  nome: nome

};

this.funcionarios.push(funcionario);
console.log(JSON.stringify( this.funcionarios));

}


consultar() {
return this.funcionarios;
}

}



