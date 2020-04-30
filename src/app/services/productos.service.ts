import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Producto } from '../interfaces/productos-interface';
import { TimeoutError } from 'rxjs';
import { promise } from 'protractor';
import { rejects } from 'assert';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  productos: Producto[] = [];
  cargada = true;
  productoFiltrado: Producto[] = [];

  constructor(private http: HttpClient ) {
    this.CargarProductos();
  }

  private CargarProductos(){

    return new Promise( ( resolve, reject ) => {
        this.http.get('https://angular-html-fec8a.firebaseio.com/Productos_idx.json')
      .subscribe( (resp: Producto[]) => {
        this.productos = resp;
        this.cargada = false;
        resolve();
      });
    });
  }

  getProducto(id: string)
  {
    return this.http.get(`https:angular-html-fec8a.firebaseio.com/Productos/${ id }.json`);
  }

  buscarProducto(termino: string)
  {
    if (termino === '')
    {
      this.CargarProductos();
    }
    else
    {
      if ( this.productos.length === 0)
      {
        this.CargarProductos().then ( () => {
          this.filtrarProductos( termino );
        } );
      }
      else
      {
        this.filtrarProductos( termino );
      }
    }
  }

  private filtrarProductos( termino: string)
  {
    this.productoFiltrado = [];
    termino = termino.toLocaleLowerCase();
    this.productos.forEach( prod => {
      const tituloLower = prod.titulo.toLocaleLowerCase();
      if ( prod.categoria.indexOf( termino ) >= 0 || tituloLower.indexOf( termino ) >= 0  ) {
        this.productoFiltrado.push( prod );
      }
    });
  }
}
