import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  anio: number  = new Date().getFullYear();
  // tslint:disable-next-line:no-inferrable-types
  nameAutor: string = 'Jassiel´s';

  constructor() { }

  ngOnInit() {
  }

}
