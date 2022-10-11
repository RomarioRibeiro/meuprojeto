import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-evento',
  templateUrl: './evento.component.html',
  styleUrls: ['./evento.component.css']
})
export class EventoComponent  {
  funcionarios: Funcionario[] = [];

  aoAdicionar(funcionarios: Funcionario) {
    this.funcionarios.push(funcionarios);
  }

}
interface Funcionario {
  id: number
  nome: string
}
