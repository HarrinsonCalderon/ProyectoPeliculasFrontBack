import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { cineCreacionDTO, cineDTO } from '../cine';

@Component({
  selector: 'app-editar-cine',
  templateUrl: './editar-cine.component.html',
  styleUrls: ['./editar-cine.component.css']
})
export class EditarCineComponent implements OnInit {

  modelo:cineDTO={nombre:"Sambil"}

  constructor(private activetedRoute:ActivatedRoute){


  }
  
  ngOnInit(): void {
     this.activetedRoute.params.subscribe(parametro=>{
      //alert(parametro.id)
     })
  }




  guardarCambios(cine:cineCreacionDTO){
    console.log(cine);
   }

}
