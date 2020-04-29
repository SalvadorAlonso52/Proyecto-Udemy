import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from '../../services/productos.service';
import { ProductoDescripcion } from '../../interfaces/producto-descripcion.interface';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  producto: ProductoDescripcion;
  id: string;

  constructor( private route: ActivatedRoute,
               // tslint:disable-next-line: no-shadowed-variable
               public ProductosService: ProductosService) { }

  ngOnInit(): void {
    this.route.params.subscribe( parametros => {
      this.ProductosService.getProducto(parametros.id).subscribe( (producto: ProductoDescripcion) => {
        this.producto = producto;
        this.id = parametros.id;
      });
    });
  }

}
