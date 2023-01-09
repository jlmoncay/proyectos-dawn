import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { CategoriaComponent } from './categoria/categoria.component';
import { PeliculaComponent } from './pelicula/pelicula.component';
import { DirectoresComponent } from './directores/directores.component';

const routes: Routes = [
  {path: "directores", component: DirectoresComponent},
  { path: "pelicula", component: PeliculaComponent},
  { path: "categoria", component: CategoriaComponent },
  { path: "inicio", component: InicioComponent },
  { path: "**", redirectTo: "inicio" }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
