import { Component } from '@angular/core';
import { InfopaginaService } from './services/infopagina.service';
import { InfoPagina } from './interfaces/info-pagina.interface';
import { ProductosService } from './services/productos.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(public infopaginaServices: InfopaginaService,
              // tslint:disable-next-line: no-shadowed-variable
              public ProductosService: ProductosService){}
}
