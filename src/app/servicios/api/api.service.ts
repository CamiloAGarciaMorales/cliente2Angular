import { Injectable } from '@angular/core';
import { listjugadoresI} from '../../modelos/listajugadores.interface';
import { listpersonajesI } from 'src/app/modelos/listapersonajes.interface';
import { HttpClient, HttpHeaders} from '@angular/common/http'
import { Observable, observable } from 'rxjs';
import { jugadorI } from 'src/app/modelos/jugador.interface';
import { ResponsiveI } from 'src/app/modelos/responsive.interface';
import { personajeI } from 'src/app/modelos/personaje.inteface';
import { especieI } from 'src/app/modelos/especie.interface';
import { DirectiveResolver } from '@angular/compiler';



@Injectable({
  providedIn: 'root'
})
export class ApiService {

  url:string = "https://bi-app-postgress.herokuapp.com/app/api/";

  constructor(private http:HttpClient) { }


  getAllJugadores():Observable<listjugadoresI[]>
  {
    let direccion = this.url + "jugadores"
    return this.http.get<listjugadoresI[]>(direccion);
  }

  getAllPersonajes():Observable<listpersonajesI[]>
  {
    let direccion = this.url + "personajes"
    return this.http.get<listpersonajesI[]>(direccion);
  }

  getSingleJugador(id:any):Observable<jugadorI>{
    let direccion = this.url + "jugador/" + id;
    return this.http.get<jugadorI>(direccion);

  }

  putSingleJugador(form:jugadorI):Observable<ResponsiveI>{
    let direccion = this.url + "jugador/update/" + form.id;
    return this.http.put<ResponsiveI>(direccion, form);
  }

  deleteSingleJugador(form:jugadorI):Observable<ResponsiveI>{
    let direccion = this.url + "jugador/delete/" + form.id;
    let Options = {
      headers: new HttpHeaders({
        'Content-type' : 'application/json'
      }), body:form
    }
    return this.http.delete<ResponsiveI>(direccion, Options);
  }

  postSingleJugador(form:jugadorI):Observable<ResponsiveI>{
    let direccion = this.url + "/jugador";
    return this.http.post<ResponsiveI>(direccion, form)

  }

  getSinglePersonaje(id:any):Observable<personajeI>{
    let direccion = this.url + "personaje/" + id;
    return this.http.get<personajeI>(direccion);

  }

  postSinglePersonaje(form:personajeI):Observable<ResponsiveI>{
    let direccion = this.url + "personaje/";
    return this.http.post<ResponsiveI>(direccion, form)

  }

  putSinglePersonaje(form:personajeI):Observable<ResponsiveI>{
    let direccion = this.url + "personaje/update/" + form.id;
    return this.http.put<ResponsiveI>(direccion, form);
  }


  deleteSinglePersonaje(form:personajeI):Observable<ResponsiveI>{
    let direccion = this.url + "personaje/delete/" + form.id;
    let Options = {
      headers: new HttpHeaders({
        'Content-type' : 'application/json'
      }), body:form
    }
    return this.http.delete<ResponsiveI>(direccion, Options);
  }

  getSinglePersonajeLista(id:any):Observable<personajeI>{
    let direccion = this.url + "personaje/" + id;
    return this.http.get<personajeI>(direccion);

  }

  getSingleJugadorLista(id:any):Observable<jugadorI>{
    let direccion = this.url + "jugador/" + id;
    return this.http.get<jugadorI>(direccion);

  }
  
  getSingleEspecie(id:any):Observable<especieI>
  {
    let direccion = this.url + "especie/" + id;
    return this.http.get<especieI>(direccion)
  }


  getAllEspecies():Observable<especieI[]>
  {
    let direccion = this.url + "especies"
    return this.http.get<especieI[]>(direccion);
  }
}



