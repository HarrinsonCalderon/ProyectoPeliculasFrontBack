import { Injectable } from '@angular/core';
import { credencialesUsuario, respuestaAutenticacion } from './seguridad';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SeguridadService {

  baseUrl=environment.apiURL+"cuentas";

private readonly llaveToken="token";
private readonly llaveExpiracion='token-expiracion'

  constructor(private httpCliente:HttpClient){

   }


  estaLogueado():boolean{

    const token=localStorage.getItem(this.llaveToken);

    if(!token) return false;

    const expiracion=localStorage.getItem(this.llaveExpiracion);
    const expiracionFecha=new Date(expiracion);

    if(expiracionFecha<=new Date()){
       this.logaout();
       return false;
    }
    return true;
  }
  
  logaout(){
 
    console.log(localStorage.getItem(this.llaveToken));
    localStorage.removeItem(this.llaveToken);
    localStorage.removeItem(this.llaveExpiracion);
    localStorage.clear();
    console.log(localStorage.getItem(this.llaveToken));


  }
  
  obtenerRol():string{

    return 'admin';
  }

  obtenerCampoJWT(campo:string):string{
    const token=localStorage.getItem(this.llaveToken);
    if(!token){
      return '';
    }
    var dataToken=JSON.parse(atob(token.split('.')[1]));
    return dataToken[campo];
  }



  registrar(credencialesUsuario:credencialesUsuario):Observable<respuestaAutenticacion>{
    return this.httpCliente.post<respuestaAutenticacion>(this.baseUrl+"/crear",credencialesUsuario)
  }
  login(credencialesUsuario:credencialesUsuario):Observable<respuestaAutenticacion>{
    return this.httpCliente.post<respuestaAutenticacion>(this.baseUrl+"/login",credencialesUsuario)
  }
  guardarToken(respuestaAutenticacion:respuestaAutenticacion){
    localStorage.setItem(this.llaveToken,respuestaAutenticacion.token);
    localStorage.setItem(this.llaveExpiracion,respuestaAutenticacion.expiracion.toString());
  }
  obtenerToken(){
    
  }
}
