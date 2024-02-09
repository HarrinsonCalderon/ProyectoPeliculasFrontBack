import { Component, OnInit } from '@angular/core';
import { SeguridadService } from '../seguridad/seguridad.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit{

 email:string;

  constructor(public seguridadService:SeguridadService){

  }

  ngOnInit(): void {
    this.email=this.seguridadService.obtenerCampoJWT('email');
    console.log('email<-',this.email)
  }
  logaout():void{
    this.seguridadService.logaout();
  }

}
