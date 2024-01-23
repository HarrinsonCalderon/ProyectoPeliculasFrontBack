import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { cineCreacionDTO, cineDTO } from './cine';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CinesService {

  private apiURL=environment.apiURL+'cines';

  constructor(private http:HttpClient) { }

  public obtenerTodos():Observable<cineDTO[]>{

    //return [{id:1,nombre:'Drama'}]
    return this.http.get<cineDTO[]>(this.apiURL);
  }

  public crear(cine:cineCreacionDTO){
    return this.http.post(this.apiURL,cine)
  }

  public obtenerPorId(id:number):Observable<cineDTO>{
    return this.http.get<cineDTO>(this.apiURL+'/'+id);
  }
  public editar(id:number,cine:cineCreacionDTO){
    return this.http.put(this.apiURL+'/'+id,cine);
  }

  public borrar(id:number){
    return this.http.delete(this.apiURL+'/'+id);
  }
}
