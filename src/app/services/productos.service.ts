import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  equipo: any[] = [] ;
  cargada = true;

  constructor(private http: HttpClient ) {
    this.CargarPagina();
  }

  private CargarPagina(){
    this.http.get('https://angular-html-fec8a.firebaseio.com/Productos_idx.json')
    .subscribe( (resp: any[]) => {
      console.log(resp);
      this.cargada = false;
    });
  }
}
