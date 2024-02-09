import { Component, OnInit } from '@angular/core';
import { credencialesUsuario } from '../seguridad';
import { SeguridadService } from '../seguridad.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  constructor(private seguridadService:SeguridadService,private router:Router){

  }

  ngOnInit(): void {
    
  }
   
  login(credencialesUsuario:credencialesUsuario){
    this.seguridadService.login(credencialesUsuario).subscribe({
      next: (v) =>{console.info('toke',v) ;this.seguridadService.guardarToken(v); this.router.navigate(['/'])},
      error: (e) => console.info(e)  ,
      complete: () => console.info('complete') 
  })
  }
}
