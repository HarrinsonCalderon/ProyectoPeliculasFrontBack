import { Component, OnInit ,Input} from '@angular/core';

@Component({
  selector: 'app-listado-peliculas',
  templateUrl: './listado-peliculas.component.html',
  styleUrls: ['./listado-peliculas.component.css']
})
export class ListadoPeliculasComponent implements OnInit {
  
  @Input()
  peliculas;

  ngOnInit(): void {
    
  }

  remover(indicePelicula:number){
    this.peliculas.splice(indicePelicula,1);
  }
}
