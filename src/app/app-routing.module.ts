import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CadastroPessoasComponent } from './cadastro-pessoas/cadastro-pessoas.component';
import { ProcurarPessoasComponent } from './procurar-pessoas/procurar-pessoas.component';
import { AtualizarPessoaComponent } from './atualizar-pessoa/atualizar-pessoa.component';

const routes: Routes = [
  { path: 'cadastro-pessoas', component: CadastroPessoasComponent },
  { path: 'procurar-pessoas', component: ProcurarPessoasComponent },
  { path: 'atualizar-pessoa/:p1' ,component: AtualizarPessoaComponent }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
