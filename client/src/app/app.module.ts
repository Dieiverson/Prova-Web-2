import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input'; 
import { CadastrarComponent } from './views/medico/cadastrar/cadastrar.component';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule }   from '@angular/forms';
import {HttpClientModule } from'@angular/common/http';
import { ListarComponent } from './views/medico/listar/listar.component';

@NgModule({
  declarations: [
    AppComponent,
    CadastrarComponent,
    ListarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
