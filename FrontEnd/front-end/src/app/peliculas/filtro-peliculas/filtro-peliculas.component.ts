import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import {Location} from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-filtro-peliculas',
  templateUrl: './filtro-peliculas.component.html',
  styleUrls: ['./filtro-peliculas.component.css']
})
export class FiltroPeliculasComponent implements OnInit{

  form:FormGroup;

  generos=[
    {id:1,nombre:'Drama'},
    {id:2,nombre:'Accion'},
    {id:3,nombre:'Comedia'}
    ]
  
   peliculas=[
    {titulo:'Spider man',enCines:false,proximosEstrenos:true,generos:[1,2],poster:'https://i.pinimg.com/originals/76/46/a9/7646a94792eeb2b072335e16dd7c9f11.png'},
    {titulo:'Moana',enCines:true,proximosEstrenos:false,generos:[3],poster:'https://i.pinimg.com/736x/a6/b1/82/a6b1822d1a964387d93dbe005436a46a.jpg'},
    {titulo:'Inception',enCines:false,proximosEstrenos:false,generos:[1,3],poster:'https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_.jpg'},
   ] 
   peliculasOriginal=this.peliculas

   formularioOriginal={
    titulo:'',
    generoId:0,
    proximosEstrenos:false,
    enCines:false
  }
constructor(private formBuilder:FormBuilder,private location:Location, private activatedRoute:ActivatedRoute){}

ngOnInit(): void {
  this.form=this.formBuilder.group(this.formularioOriginal);
  this.leerValoresUrl();
  this.buscarPeliculas(this.form.value);
  /**Captura los cambios realizados en el formulario */
  this.form.valueChanges.subscribe(valores=>{
    //console.log(valores)
    this.peliculas=this.peliculasOriginal;
    this.buscarPeliculas(valores);
    this.escribirParametroBusquedaUrl();
  })
}

private escribirParametroBusquedaUrl(){
  var queryString =[];
  var valoresFormulario=this.form.value;
  if(valoresFormulario.titulo){
    queryString.push('titulo='+valoresFormulario.titulo);
  }
  if(valoresFormulario.generoId){
    queryString.push('generoId='+valoresFormulario.generoId);
  }
  if(valoresFormulario.proximosEstrenos){
    queryString.push('proximosEstrenos='+valoresFormulario.proximosEstrenos);
  }
  if(valoresFormulario.enCines){
    queryString.push('enCines='+valoresFormulario.enCines);
  }
  //sirve para poner lo que yo quiera en la url de la pagina
  this.location.replaceState('peliculas/buscar',queryString.join('&'));
}

buscarPeliculas(valores:any){
  if(valores.titulo){
    this.peliculas=this.peliculas.filter(pelicula=>pelicula.titulo.indexOf(valores.titulo)!==-1);
  }
  if(valores.generoId){
    this.peliculas=this.peliculas.filter(pelicula=>pelicula.generos.indexOf(valores.generoId)!==-1);
  }
  if(valores.proximosEstrenos){
    this.peliculas=this.peliculas.filter(pelicula=>pelicula.proximosEstrenos);
  }
  if(valores.enCines){
    this.peliculas=this.peliculas.filter(pelicula=>pelicula.enCines);
  }
}
private leerValoresUrl(){

 

  var objeto:any={}
  objeto.titulo=this.activatedRoute.snapshot.queryParams.titulo;
  objeto.generoId=this.activatedRoute.snapshot.queryParams.generoId;
  objeto.proximosExtrenos=this.activatedRoute.snapshot.queryParams.proximosExtrenos;
  objeto.enCines=this.activatedRoute.snapshot.queryParams.enCines;  
   
  this.form.patchValue(objeto);
}
 
limpiar(){
  this.form.patchValue(this.formularioOriginal);
}

}
