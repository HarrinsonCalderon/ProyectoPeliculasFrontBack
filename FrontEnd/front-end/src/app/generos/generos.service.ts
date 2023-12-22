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

}
