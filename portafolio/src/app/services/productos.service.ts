import { Producto } from './../interface/producto.interface';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  cargando = true;
  productos: Producto[] = [];
  productoFiltrado: Producto[] = [];

  constructor(private http: HttpClient) {
    this.cargarProductos();
   }

      private cargarProductos() {
      this.http.get('https://angular-html-5bbc3.firebaseio.com/productos_idx.json')
      .subscribe(( resp: Producto[]) => {
        // console.log(resp);
        this.productos = resp;

        // setTimeout(() => {
        this.cargando = false;

        // }, 2000);
      });
  }

  getProducto( id: string ) {
    return this.http.get(`https://angular-html-5bbc3.firebaseio.com/productos/${id}.json`);
  }

  buscarProducto( termino: string ) {
  this.productoFiltrado =  this.productos.filter( producto => {
        return true;
    });

  console.log( this.productoFiltrado );
  }
}
