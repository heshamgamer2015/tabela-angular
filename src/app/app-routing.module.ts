import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { PessoasComponent } from './lista-pessoas/lista-pessoas.component';
import { CarrosComponent } from './carros/carros.component';
import { LivrosComponent } from './livros/livros.component';


const routes: Routes = [
  {path: "", component:IndexComponent,children:[
    {path: "pessoas", component: PessoasComponent},
    {path: "carros", component:CarrosComponent},
    {path: "livros", component:LivrosComponent}
  ]}
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
