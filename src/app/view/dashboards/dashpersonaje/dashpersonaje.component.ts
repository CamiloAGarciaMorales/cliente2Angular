import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/servicios/api/api.service';
import { listpersonajesI } from '../../../modelos/listapersonajes.interface';
import { personajeI } from 'src/app/modelos/personaje.inteface';
@Component({
  selector: 'app-dashpersonaje',
  templateUrl: './dashpersonaje.component.html',
  styleUrls: ['./dashpersonaje.component.scss']
})
export class DashpersonajeComponent implements OnInit {

  personajestabla:listpersonajesI[] = [];

  constructor(private api:ApiService, private router:Router) { }

  ngOnInit(): void {
  }

  irNewPersonaje(){

    this.router.navigate(['inspersonaje'])
  }

  listarTodoPersonaje()
  {
    this.api.getAllPersonajes().subscribe(data => {
      this.personajestabla = data;
      console.log(data);
    })
  }

  buscarUnPersonaje()
  {
  var inputValue = (<HTMLInputElement>document.getElementById("idInput")).value;
  document.getElementById("title")!.innerHTML= "<h3> Personaje buscado: </h3>";
    this.api.getSinglePersonajeLista(inputValue).subscribe(data => {
      document.getElementById("labelid")!.innerHTML= "<h3> ID = "+ data.id +"</h3>";
      document.getElementById("labelnombre")!.innerHTML= "<h3> Nombre = "+data.nombre+"</h3>";
      document.getElementById("labelfuer")!.innerHTML= "<h3> Fuerza = "+data.fuerza.toString()+"</h3>";
      document.getElementById("labelmana")!.innerHTML= "<h3> Mana = "+data.mana.toString()+"</h3>";
      document.getElementById("labelener")!.innerHTML="<h3> Energia = "+data.energia.toString()+"</h3>";
      document.getElementById("labelesp")!.innerHTML= "<h3>Especie = "+data.especie.nombre+"</h3>";
      document.getElementById("labeljug")!.innerHTML= "<h3>Jugador = "+data.jugador.apodo+"</h3>";
      document.getElementById("labelest")!.innerHTML= "<h3>Estado = "+data.estadoRegistro.toString()+"</h3>";
      document.getElementById("labelfecha")!.innerHTML= "<h3>Fecha = "+data.fechaModificacion+"</h3>";
   })
  }
  

  irUppersonaje(id:any){
    this.router.navigate(['uppersonaje', id]);
    console.log(id)
  }
}
