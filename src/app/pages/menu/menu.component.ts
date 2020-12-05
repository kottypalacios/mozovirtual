import { Component, OnInit } from '@angular/core';
import { PrestashopService } from 'src/app/services/prestashop.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  productos = 'hola';

  constructor(
    private _presta: PrestashopService
  ) { }

  ngOnInit(): void {
    this._presta.getDatos('products').subscribe(
      resp => {
        console.log(resp);
        
        this.productos = resp['products'];
        
      }, error => console.log(error)
      
    );
  }

}
