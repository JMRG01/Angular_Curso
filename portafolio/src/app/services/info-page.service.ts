import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InfoPage } from '../interface/info-page.interface';


@Injectable({
  providedIn: 'root'
})
export class InfoPageService {

  info: InfoPage = {};
  cargada = false;


  constructor( private http: HttpClient ) {
    console.log('servicio de info pagina cargada');

    // Leer archivo Json
    this.http.get('assets/data/data-pagina.json')
      .subscribe( (resp: InfoPage) => {
        this.cargada = true;
        this.info = resp;

    });
  }
}
