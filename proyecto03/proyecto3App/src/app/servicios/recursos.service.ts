import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class RecursosService {

  constructor(private http: HttpClient) { }

  cargarDatos(){
    return this.http.get('http://localhost:3000/Result')
  }

}
