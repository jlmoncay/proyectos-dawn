import { Component } from '@angular/core';
import { Pelicula } from '../interfaz/pelicula';
import { RecursosService } from '../servicios/recursos.service';

@Component({
  selector: 'app-directores',
  templateUrl: './directores.component.html',
  styleUrls: ['./directores.component.css']
})
export class DirectoresComponent {

  peliculas:Pelicula[]= [];

  constructor(private recursosService: RecursosService) {
     recursosService.cargarDatos().subscribe(respuesta => {
      this.peliculas = respuesta as Array<Pelicula>
    })
   }
}
