import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PrestashopService {

  urlBase:string = 'http://localhost/mozovirtual/api/';
  elementos: string;
  key: string = '?ws_key=CB9CYQS79ZK18XNMS31VZE5U3TGAWNSJ';
  tipo: string = '&output_format=JSON&display=full';


  constructor(
    private _http: HttpClient
  ) { }

  getDatos( elementos: string){
    var url =this.urlBase + elementos + this.key + this.tipo;

    console.log(url);
    
    return this._http.get(url);
  }
}
