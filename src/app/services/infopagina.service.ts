import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InfoPagina } from '../interfaces/info-pagina.interface';

@Injectable({
  providedIn: 'root'
})
export class InfopaginaService {

  info: InfoPagina = {};
  equipo: any[] = [] ;
  cargada = false;

  constructor(private http: HttpClient ){
    // console.log('Servicio de pagina listo');
    // leer archivo .json;
    this.CargarPagina();
    this.CargarEquipo();
  }

  private CargarPagina(){
    this.http.get('assets/data/data-pagina.json')
    .subscribe( (resp: InfoPagina) => {
      this.cargada = true;
      this.info = resp;
    });
  }

  private CargarEquipo(){
    this.http.get('https://angular-html-fec8a.firebaseio.com/Equipo.json')
    .subscribe( (resp: any[]) => {
      this.cargada = true;
      this.equipo = resp;
    });
  }


}
