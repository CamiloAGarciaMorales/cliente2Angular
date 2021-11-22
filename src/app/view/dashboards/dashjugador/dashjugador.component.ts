import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { listjugadoresI } from '../../../modelos/listajugadores.interface';
import { ApiService } from 'src/app/servicios/api/api.service';

@Component({
  selector: 'app-dashjugador',
  templateUrl: './dashjugador.component.html',
  styleUrls: ['./dashjugador.component.scss']
})
export class DashjugadorComponent implements OnInit {

 jugadorestabla:listjugadoresI[] = [];

  constructor(private api:ApiService, private router:Router) { }

  ngOnInit(): void {

  
    
  }

  listarTodo()
  {
    this.api.getAllJugadores().subscribe(data => {
      this.jugadorestabla = data;
      console.log(data);
    })
  }

  irUpJugador(id:any){
    this.router.navigate(['upjugador', id ])
  }

  irNewJugador(){
    this.router.navigate(['insjugador'])
  }

  buscarUnJugador()
  {
  var inputValue = (<HTMLInputElement>document.getElementById("idInput")).value;
  document.getElementById("title")!.innerHTML= "<h3> Jugador buscado: </h3>";
    this.api.getSingleJugadorLista(inputValue).subscribe(data => {
      document.getElementById("labelid")!.innerHTML= "<h3> ID = "+ data.id +"</h3>";
      document.getElementById("labelcuenta")!.innerHTML= "<h3> cuenta = "+data.cuenta+"</h3>";
      document.getElementById("labelcontra")!.innerHTML= "<h3> contrasena = "+data.contrasena+"</h3>";
      document.getElementById("labelapodo")!.innerHTML= "<h3> apodo = "+data.apodo+"</h3>";
      document.getElementById("labelemail")!.innerHTML="<h3> email = "+data.email+"</h3>";
      document.getElementById("labelest")!.innerHTML= "<h3>Estado = "+data.estadoRegistro.toString()+"</h3>";
      document.getElementById("labelfecha")!.innerHTML= "<h3>Fecha = "+data.fechaModificacion+"</h3>";
   })
  }

}

