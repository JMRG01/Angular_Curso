import { Producto } from '../interface/producto.interface';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { resolve } from 'url';
import { reject } from 'q';

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

        // tslint:disable-next-line: no-shadowed-variable
        return new Promise( (resolve, reject) => {
          this.http.get('https://angular-html-5bbc3.firebaseio.com/productos_idx.json')
          .subscribe(( resp: Producto[]) => {
            // console.log(resp);
            this.productos = resp;
            this.cargando = false;
            resolve();

          });
        });


  }

  getProducto( id: string ) {
    return this.http.get(`https://angular-html-5bbc3.firebaseio.com/productos/${id}.json`);
  }

  buscarProducto( termino: string ) {

    // tslint:disable-next-line: triple-equals
    if (this.productos.length == 0) {
      this.cargarProductos( ).then( () => {

        this.filtrarProductos( termino );
      });
    } else {

      this.filtrarProductos( termino );
    }

  }

 private filtrarProductos( termino: string ) {

    this.productoFiltrado = [];
    termino = termino.toLocaleLowerCase();
    this.productos.forEach( prod => {

      const tituloLower = prod.titulo.toLocaleLowerCase();
      const prodLower = prod.categoria.toLocaleLowerCase();
      if (tituloLower.indexOf( termino ) >= 0 || prodLower.indexOf(termino) >= 0 ) {
            this.productoFiltrado.push( prod );
          }
    });
      }
}
