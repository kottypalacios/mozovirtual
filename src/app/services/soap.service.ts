import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SoapService {

  constructor(
    private _http: HttpClient
  ) { }

  obtenerTotal(cantidad:number, precio:number) {
    return this._http.get('http://localhost/SOAP/index.php?c='+cantidad+'&p='+precio, {headers:{'Content-Type':"application/json"}});
  }

  obtenerCotizaDolar(){
    return this._http.get('https://api.estadisticasbcra.com/usd', {headers: {'Authorization': 'BEARER eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2Mzk2MjM2OTQsInR5cGUiOiJleHRlcm5hbCIsInVzZXIiOiJkYXJpby5zZW1lbnphdG9AZXN0LmZpLnVuY29tYS5lZHUuYXIifQ.9GIBw0GOQiPFPbU4qe2L9RtwBC3OXARdcvLyE0JwqDHcwDPAYjgckqAmERywMrJgL2otMbkDs6MWr_CrBbsjXw'}})
  }
}
