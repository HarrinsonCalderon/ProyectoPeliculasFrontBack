import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { actorCreacionDTO, actorDTO } from './actor';
import { Observable } from 'rxjs';
 


@Injectable({
  providedIn: 'root'
})
export class ActoresService {

  private apiURL=environment.apiURL+"actores";

  constructor(private http:HttpClient) { 
  }

  public crear (actor:actorCreacionDTO){
   const formData=this.construirFormData(actor);
   return  this.http.post(this.apiURL,formData);
  }
  
  public obtenerTodos():Observable<actorDTO[]>{

    //return [{id:1,nombre:'Drama'}]
    return this.http.get<actorDTO[]>(this.apiURL);
  }

   

  public obtenerPorId(id:number):Observable<actorDTO>{
    return this.http.get<actorDTO>(this.apiURL+'/'+id);
  }
  public editar(id:number,actor:actorCreacionDTO){
    const formData=new FormData();
    formData.append('biografia',actor.biografia);
    return this.http.put(this.apiURL+'/'+id,actor);
  }

  public borrar(id:number){
    return this.http.delete(this.apiURL+'/'+id);
  }



  private construirFormData(actor:actorCreacionDTO):FormData{
    const formData=new FormData();
    formData.append('nombre',actor.nombre);
    
    if(actor.biografia){
      formData.append('biografia',actor.biografia)
    }
    if(actor.fechaNacimiento){
      formData.append('fechaNacimiento',actor.fechaNacimiento.toDateString())
    }
    if(actor.foto){
      formData.append('foto',actor.foto)
    }
      return formData;
  }

}
