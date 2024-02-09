import { Component, OnInit } from '@angular/core';
import { CrearCineComponent } from 'src/app/cines/crear-cine/crear-cine.component';
import { credencialesUsuario } from '../seguridad';
import { SeguridadLoginComponent } from 'src/app/seguridad-login/seguridad-login.component';
import { SeguridadService } from '../seguridad.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  constructor(private seguridadService:SeguridadService,
    private router:Router
    ){

  }

  ngOnInit(): void {
    
  }


  registrar(credencialesUsuario:credencialesUsuario){
    this.seguridadService.registrar(credencialesUsuario).subscribe({
      next: (v) =>{console.info(v) ;this.seguridadService.guardarToken(v); this.router.navigate(['/'])},
      error: (e) => console.info(e)  ,
      complete: () => console.info('complete') 
  })
  }
}
