import { FuncionarioService } from './../funcionario.service';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-funcionario-form',
  templateUrl: './funcionario-form.component.html',
  styleUrls: ['./funcionario-form.component.css']
})
export class FuncionarioFormComponent  {

  // ultimoId = 0;
  // nome = 'Romário';
  // adicionado = false;
  // @Output() funcionarioAdicionado = new EventEmitter();



  constructor(
    private funcionarioService: FuncionarioService,

    ) {

  }

  adicionar(nome: string) {

    this.funcionarioService.adicionar(nome);

    // console.log(`Adiconar ${this.nome}`)
    // this.adicionado = true;


    // const funcionario = {
    //   id: ++this.ultimoId,
    //   nome: this.nome};
      // const numero = Math.round(Math.random() * 100);
      // this.nome = 'João ' + numero;

      // this.funcionarioAdicionado.emit(funcionario);
  }



//  adicionar(nome: string) {
//   this.nome = nome;

//   }


  // alterarNome(event: any) {
  //   this.nome = event.target.value;


  // }


}
interface Funcionario {
  id: number
  nome: string
}
