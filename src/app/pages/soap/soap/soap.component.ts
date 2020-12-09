import { Component, OnInit } from '@angular/core';

import { NgxSoapService, Client, ISoapMethodResponse } from 'ngx-soap';


@Component({
  selector: 'app-soap',
  templateUrl: './soap.component.html',
  styleUrls: ['./soap.component.scss']
})
export class SoapComponent implements OnInit {

  url = "http://localhost/mozovirtual/SOAP/miWsdl.wsdl";



  constructor(private soap: NgxSoapService) {


  }



  ngOnInit(): void {
    console.log('aca');

    this.soap.createClient(this.url).then((client) => {
      console.log(client);

    })

    
  }
}
