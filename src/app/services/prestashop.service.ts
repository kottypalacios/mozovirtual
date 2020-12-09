import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PrestashopService {

  urlBase:string = 'http://vqinfohy.lucusvirtual.es/api/';
  elementos: string;
  key: string = '?ws_key=59Y3SC9VQ5SY83G8IUAEN4Q3FTPEPWDT';
  tipo: string = '&output_format=JSON&display=full';


  constructor(
    private _http: HttpClient
  ) { }

  getDatos( elementos: string){
    var url =this.urlBase + elementos + this.key + this.tipo;
    
    return this._http.get(url);
    }
}