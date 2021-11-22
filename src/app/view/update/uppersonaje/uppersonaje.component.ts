import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { personajeI } from 'src/app/modelos/personaje.inteface';
import { ApiService } from 'src/app/servicios/api/api.service';
import { FormGroup, FormControl, Validator } from '@angular/forms';
import { ResponsiveI } from 'src/app/modelos/responsive.interface';
import { AlertasService } from 'src/app/servicios/alertas/alertas.service';

@Component({
  selector: 'app-uppersonaje',
  templateUrl: './uppersonaje.component.html',
  styleUrls: ['./uppersonaje.component.scss']
})
export class UppersonajeComponent implements OnInit {

  constructor(private activerouter:ActivatedRoute,private router:Router, private api:ApiService, private alertas:AlertasService) { }

  personajeData!:personajeI;
  editarPerForm = new FormGroup({
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




  ngOnInit(): void {
    let personajeid = this.activerouter.snapshot.paramMap.get('id');
    this.api.getSinglePersonaje(personajeid).subscribe(data =>{
      this.personajeData = data;
      this.editarPerForm.setValue({
        'id':this.personajeData.id,
        'nombre': this.personajeData.nombre,
        'fuerza': this.personajeData.fuerza,
        'mana': this.personajeData.mana,
        'energia': this.personajeData.energia,
        'especie': this.personajeData.especie.nombre,
        'jugador': this.personajeData.jugador.apodo,
        'estadoRegistro': this.personajeData.estadoRegistro,
        'fechaModificacion': this.personajeData.fechaModificacion
      });
    })

    this.editarPerForm.get('especie')?.disable();
    this.editarPerForm.get('jugador')?.disable();
    this.editarPerForm.get('estadoRegistro')?.disable();
    this.editarPerForm.get('fechaModificacion')?.disable();
  }

  postForm(form:personajeI){ try {
    this.api.putSinglePersonaje(form).subscribe(data =>{
      let respuesta : ResponsiveI = data;
      this.router.navigate(['dashpersonaje'])
      this.alertas.showSuccess('Se modifico el personaje', 'Nice');   
      console.log(data);
    })
    
  } catch (error) { 
    this.alertas.showError('No se modifico el personaje',' No Nice');
  } 
    
  }

  eliminarpersonaje()
  {
    try {
      let datos:personajeI = this.editarPerForm.value;
      this.api.deleteSinglePersonaje(datos).subscribe(data =>{
        let respuesta : ResponsiveI = data; })
        this.router.navigate(['dashpersonaje'])
        this.alertas.showSuccess('Se Elimino el personaje', 'Nice');
    } catch (error) {
      this.alertas.showError('No se Elimino el personaje',' No Nice'); 
    }
  }

}
