import { Component } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent {
  pelicula;
  ngOnInit(): void {
    setTimeout(() => {
     this.pelicula=[{
       titulo:'Hombre araña',
       fecha: '2020-12-12',
       precio: 122.121,
       poster:'https://images.pexels.com/photos/2854693/pexels-photo-2854693.jpeg'
     },
     {
       titulo:'Moana',
       fecha: '2020-12-12',
       precio: 122.121,
       poster:'https://w7.pngwing.com/pngs/699/464/png-transparent-moana-moana-disney-large-cartoons-cartoon-moana-thumbnail.png'
     } 
     
   ]
    } );
  }
  manejarRated(voto:number):void{
    alert(voto);
  }


  peliculaEstrenos=[ 
]
  
}
