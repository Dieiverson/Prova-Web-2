import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CadastrarComponent } from './views/medico/cadastrar/cadastrar.component';
import { ListarComponent } from './views/medico/listar/listar.component';

const routes: Routes = [
  {
    path:'',
    component:CadastrarComponent
  }, 
  {
    path:'Obter',
    component:ListarComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
