import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InfoPage } from '../interface/info-page.interface';


@Injectable({
  providedIn: 'root'
})
export class InfoPageService {

  info: InfoPage = {};
  cargada = false;
  equipo: any = [];


  constructor( private http: HttpClient ) {

    this.CargarInfo();
    this.CargarItem();
  }

  private CargarInfo() {

    // Leer archivo Json
    this.http.get('assets/data/data-pagina.json')
      .subscribe( (resp: InfoPage) => {
        this.cargada = true;
        this.info = resp;
    });
  }

  private CargarItem() {
    this.http.get('https://angular-html-5bbc3.firebaseio.com/equipo.json')
      .subscribe( (resp: any[]) => {
        this.equipo = resp;
        console.log(resp);
    });
  }
}
