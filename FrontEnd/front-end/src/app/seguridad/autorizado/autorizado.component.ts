import { Component, OnInit } from '@angular/core';
import { SeguridadService } from '../seguridad.service';

@Component({
  selector: 'app-autorizado',
  templateUrl: './autorizado.component.html',
  styleUrls: ['./autorizado.component.css']
})
export class AutorizadoComponent implements OnInit {
  constructor(private SeguridadService:SeguridadService) { }
  ngOnInit(): void {
    
  }

  estaAutorizado():boolean{
    return this.SeguridadService.estaLogueado();
  }
}
