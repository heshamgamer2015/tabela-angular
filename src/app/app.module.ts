import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PessoasComponent } from './lista-pessoas/lista-pessoas.component';
import { IndexComponent } from './index/index.component';
import { MenuSuperiorComponent } from './menu-superior/menu-superior.component';
import { CarrosComponent } from './carros/carros.component';
import { LivrosComponent } from './livros/livros.component';


@NgModule({
  declarations: [
    AppComponent,
    PessoasComponent,
    IndexComponent,
    MenuSuperiorComponent,
    CarrosComponent,
    LivrosComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: IndexComponent },
      { path: 'pessoas', component: PessoasComponent },
      { path: 'carros', component: CarrosComponent },
      { path: 'livros', component: LivrosComponent },
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
