import { CidadeService } from './cidade/cidade.service';

import { FuncionarioService} from './funcionario.service';
import { NavegacaoModule } from './navegacao/navegacao.module';
import { BotoesModule } from './botoes/botoes.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BemVindoComponent } from './hello/bem-vindo/bem-vindo.component';
import { EventoComponent } from './event/evento/evento.component';
import { FormsModule } from '@angular/forms';
import { FuncionarioCardComponent } from './funcionario-card/funcionario-card.component';
import { FuncionarioFormComponent } from './funcionario-form/funcionario-form.component';
import { CampoColoridoDirective } from './campo-colorido.directive';
import { FormsComponent } from './forms/forms.component';
import { LogService } from './log.service';
import { CidadeComponent } from './cidade/cidade.component';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    AppComponent,
    BemVindoComponent,
    EventoComponent,
    FuncionarioCardComponent,
    FuncionarioFormComponent,
    CampoColoridoDirective,
    FormsComponent,
    CidadeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NavegacaoModule,
    HttpClientModule
  ],
  providers: [
    FuncionarioService,
    LogService,
    CidadeService

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
