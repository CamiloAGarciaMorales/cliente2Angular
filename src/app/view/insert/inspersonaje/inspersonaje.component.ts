import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { personajeI } from 'src/app/modelos/personaje.inteface';
import { ApiService } from 'src/app/servicios/api/api.service';
import { FormGroup, FormControl, Validator } from '@angular/forms';
import { ResponsiveI } from 'src/app/modelos/responsive.interface';
import { AlertasService } from 'src/app/servicios/alertas/alertas.service';
import { especieI } from 'src/app/modelos/especie.interface';
import { jugadorI } from 'src/app/modelos/jugador.interface';
import { Observable } from 'rxjs';
import { listjugadoresI } from 'src/app/modelos/listajugadores.interface';

@Component({
  selector: 'app-inspersonaje',
  templateUrl: './inspersonaje.component.html',
  styleUrls: ['./inspersonaje.component.scss']
})
export class InspersonajeComponent implements OnInit {

  especies:especieI[] = [];
  jugadores:listjugadoresI[]=[];
  especie!:especieI;
  jugador!:jugadorI;  
  nuevoPerForm = new FormGroup({
    id: new FormControl(''),
    nombre: new FormControl(''),
    fuerza:new FormControl(''),
    mana: new FormControl(''),
    energia: new FormControl(''),
    especie: new FormControl(''),
    jugador: new FormControl(''),
    estadoRegistro: new FormControl(''),
    fechaModificacion: new FormControl('')

  });

  constructor(private api:ApiService, private route:Router, private alerta:AlertasService) { }

  ngOnInit(): void {
    this.listarTodoPersonaje()
    this.listarTodoJugador()
  }

  getIdEspecie(string:especieI)
  {
    return this.api.getSingleEspecie(string);
  }

  getIdJugador(string:jugadorI)
  {
    return this.api.getSingleJugadorLista(string);
  }

  postForm(form:personajeI)
  { 
    console.log(form);
    try {
      
     
      this.api.postSinglePersonaje(form).subscribe(data => {
        this.route.navigate(['dashpersonaje']);
        this.alerta.showSuccess('Se creo el Personaje', 'Nice'); 
      })
    } catch (error) {
      this.alerta.showError('No se creo el Personaje',' No Nice');
    }
    
  }
  listarTodoPersonaje()
  {
    this.api.getAllEspecies().subscribe(data => {
      this.especies = data;
      console.log(data);
    })
  }
  listarTodoJugador()
  {
    this.api.getAllJugadores().subscribe(data => {
      this.jugadores = data;
      console.log(data);
    })
  }
}
