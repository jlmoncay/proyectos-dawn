import { Component } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Pelicula } from '../interfaz/pelicula';

import { RecursosService } from '../servicios/recursos.service';

@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html',
  styleUrls: ['./pelicula.component.css']
})
export class PeliculaComponent {
  data:any[] = [];
  pageSize = 30;
  desde:number=0;
  hasta:number=30;
  nombrePeliculas:any[] = []
  cantidadDatos = 0;


peliculas:Pelicula[]= [];

  constructor(private recursosService: RecursosService) {
     recursosService.cargarDatos().subscribe(respuesta => {
      this.peliculas = respuesta as Array<Pelicula>
    })
   }
  
  
  cambiarPagina(e: PageEvent){
    this.desde = e.pageIndex * e.pageSize;
    this.hasta = this.desde + e.pageSize;
  }


 

  ngOnInit(): void {
   
    
  }


}
