import { Injectable } from '@angular/core';
import { generoCreacionDTO, generoDTO } from './genero';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GenerosService {

  private apiURL=environment.apiURL+'generos';

  constructor(private http:HttpClient) { }

  public obtenerTodos():Observable<generoDTO[]>{

    //return [{id:1,nombre:'Drama'}]
    return this.http.get<generoDTO[]>(this.apiURL);
  }

  public crear(genero:generoCreacionDTO){
    return this.http.post(this.apiURL,genero)
  }

  public obtenerPorId(id:number):Observable<generoDTO>{
    return this.http.get<generoDTO>(this.apiURL+'/'+id);
  }
  public editar(id:number,genero:generoCreacionDTO){
    return this.http.put(this.apiURL+'/'+id,genero);
  }

  public borrar(id:number){
    return this.http.delete(this.apiURL+'/'+id);
  }

}
