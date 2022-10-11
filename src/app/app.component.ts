import { Component, Input, OnInit } from '@angular/core';
import { FuncionarioService } from './funcionario.service';
import { LogService } from './log.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
 name = 'òla Mundo!'

// @Input() label: string ='';

  funcionarios: any[] = [];
  constructor(
    private funcionarioService: FuncionarioService,
   ) {

  }

  ngOnInit(): void {
    this.funcionarios = this.funcionarioService.consultar();
  }

}
