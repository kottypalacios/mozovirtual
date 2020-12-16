import { Component, OnInit } from '@angular/core';
import { PrestashopService } from 'src/app/services/prestashop.service';
import { SoapService } from 'src/app/services/soap.service';

declare var $:any;

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  productos;
  total: any;
  cantidad: any;
  cotizacion: number;
  precioDolar: any;

  respuesta;
  constructor(
    public _presta: PrestashopService,
    private _soap: SoapService
  ) { }

  ngOnInit(): void {
    this.cantidad = 0;
    this.total = 0;
    this.cotizacion = 151;
    this.precioDolar = 0;
    this._presta.getDatos('products').subscribe(
      resp => {
        console.log(resp);
        
        this.productos = resp['products'];
        this.productos.forEach(item=>{
          item.imagen = "http://vqinfohy.lucusvirtual.es/" + item.id_default_image + "-large_default/" + item.name[0].value.replace(/ /g,'_') + ".jpg";
        })
        
      }, error => console.log(error)
      
    );
  }

  pedir(precio){
    this.cantidad++;
  
    this.total += parseFloat(precio);
   

    this._soap.obtenerTotal(this.cotizacion, this.total).subscribe(

      resp => {
        console.log('respuesta soap', resp);
        this.precioDolar = resp
        
      }, error => console.log(error)
      
    )
  }



}
