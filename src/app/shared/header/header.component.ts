import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  // tslint:disable-next-line: ban-types
  nameAutor: String = 'Jassiel´s Header';
  constructor( private router: Router ) { }

  ngOnInit() {
  }

  buscarProducto( termino: string ) {
      if (termino.length < 1) {
        return;
      }

      this.router.navigate(['/search', termino]);
      console.log(termino);

  }

}
