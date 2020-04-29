import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Producto } from '../interfaces/productos-interface';
import { TimeoutError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  productos: Producto[] = [] ;
  cargada = true;

  constructor(private http: HttpClient ) {
    this.CargarPagina();
  }

  private CargarPagina(){
    this.http.get('https://angular-html-fec8a.firebaseio.com/Productos_idx.json')
    .subscribe( (resp: Producto[]) => {
      this.productos = resp;
      setTimeout(() => {
        this.cargada = false;
      }, 500);
    });
  }

  getProducto(id: string)
  {
    return this.http.get(`https:angular-html-fec8a.firebaseio.com/Productos/${ id }.json`);
  }
}
