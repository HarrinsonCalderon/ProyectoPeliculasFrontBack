import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { actorCreacionDTO, actorDTO } from '../actor';

@Component({
  selector: 'app-editar-actor',
  templateUrl: './editar-actor.component.html',
  styleUrls: ['./editar-actor.component.css']
})
export class EditarActorComponent implements OnInit{


  modelo:actorDTO={nombre:'Felipe',fechaNacimiento:new Date(),foto:'https://c8.alamy.com/comp/2JJFK4M/archive-photo-arnold-schwarzenegger-celebrates-his-75th-birthday-on-july-30-2022-sn14109724vmjpg-arnold-schwarzenegger-usa-actor-portrait-landscape-format-sven-simon-huyssenallee-40-42-45128-essen-tel0201234556-fax-0201234539-account-2039154-deutsche-bank-munich-blz-700-700-10-image-can-be-transmitted-digitally-via-leonardo-pro-2JJFK4M.jpg'};

  constructor(private activetedRoute:ActivatedRoute){


  }
  
  ngOnInit(): void {
     this.activetedRoute.params.subscribe(parametro=>{
      //alert(parametro.id)
     })
  }
  guardarCambios(actor:actorCreacionDTO){
    console.log(actor)
  }
}
