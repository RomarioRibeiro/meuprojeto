import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';


class Cliente {
  nome: string = '';
  email: string = '';
  profissao: string ='';
}


@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {

  cliente = new Cliente();
  profissoes  = ['Programador', 'Empresario', 'Outros'];

  constructor() { }

  ngOnInit(): void {
  }

  salvar(form: NgForm) {
    console.log(form.value);


    form.reset({profissao: ''});
  }

}
