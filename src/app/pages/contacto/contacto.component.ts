import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.scss']
})
export class ContactoComponent implements OnInit {

  constructor(private router: Router) { }

  

  ngOnInit(): void {
  }

  redireccionar(){
    this.router.navigate(['caracteristica']);
  }
}
