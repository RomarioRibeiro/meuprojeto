import { CidadeService } from './cidade.service';
import { Component, OnInit } from '@angular/core';

interface Cidade {
  id: number,
  nome: string
}

@Component({
  selector: 'app-cidade',
  templateUrl: './cidade.component.html',
  styleUrls: ['./cidade.component.css']
})
export class CidadeComponent implements OnInit {

  cidades: Cidade[] = [];

  constructor(private cidadeService: CidadeService) {

  }


  ngOnInit(): void {
    this.consultar();
  }

  consultar() {
    this.cidadeService.consultar()
    .then(dados => this.cidades = dados);
  }

  adicionar(nome: string) {
    this.cidadeService.adicionar({ nome })
    .then(cidade => {
      alert(`Cidade "${cidade.nome}" adicionada com o código ${cidade.id}! `);
      this.consultar();
    });

  }

  excluir(id: number) {
    this.cidadeService.excluir(id)
    .then(() => {
      alert('Cidade excluida com sucesso!');
      this.consultar();
    })
  }

  atualizar(cidade: any) {
    this.cidadeService.atualizar(cidade)
    .then(() => {
      alert('Cidade alterada com sucesso!');
    })
    .catch(erro => {
      alert(erro)
    })
  }

}
