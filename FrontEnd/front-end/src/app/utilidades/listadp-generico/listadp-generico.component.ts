import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-listadp-generico',
  templateUrl: './listadp-generico.component.html',
  styleUrls: ['./listadp-generico.component.css']
})
export class ListadpGenericoComponent {

  @Input()
  listado;



}
