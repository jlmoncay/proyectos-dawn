import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './inicio/inicio.component';
import { CategoriaComponent } from './categoria/categoria.component';
import { PeliculaComponent } from './pelicula/pelicula.component';
import { DirectoresComponent } from './directores/directores.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    CategoriaComponent,
    PeliculaComponent,
    DirectoresComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
