import { Component, OnInit } from '@angular/core';
import { PrestashopService } from 'src/app/services/prestashop.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  productos;

  constructor(
    public _presta: PrestashopService
  ) { }

  ngOnInit(): void {
    this._presta.getDatos('products').subscribe(
      resp => {
        console.log(resp);
        
        this.productos = resp['products'];
        this.productos.forEach(item=>{
          item.imagen = "http://localhost/mozovirtual/" + item.id_default_image + "-large_default/" + item.name[0].value.replace(/ /g,'_') + ".jpg";
        })
        
      }, error => console.log(error)
      
    );
  }


  pedir(id_producto){
    alert('Producto ' + id_producto);
  }

}
