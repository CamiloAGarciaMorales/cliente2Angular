import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { jugadorI } from 'src/app/modelos/jugador.interface';
import { ApiService } from 'src/app/servicios/api/api.service';
import { FormGroup, FormControl, Validator } from '@angular/forms';
import { ResponsiveI } from 'src/app/modelos/responsive.interface';
import { AlertasService } from 'src/app/servicios/alertas/alertas.service';

@Component({
  selector: 'app-upjugador',
  templateUrl: './upjugador.component.html',
  styleUrls: ['./upjugador.component.scss']
})
export class UpjugadorComponent implements OnInit {

  constructor(private activerouter:ActivatedRoute,private router:Router, private api:ApiService, private alertas:AlertasService) { }

  jugadorData!:jugadorI;
  editarJugForm = new FormGroup({
    id: new FormControl(''),
    cuenta: new FormControl(''),
    contrasena:new FormControl(''),
    apodo: new FormControl(''),
    email: new FormControl(''),
    estadoRegistro: new FormControl(''),
    fechaModificacion: new FormControl('')

  });

  ngOnInit(): void {
    let jugadorid = this.activerouter.snapshot.paramMap.get('id');
    this.api.getSingleJugador(jugadorid).subscribe(data =>{
      this.jugadorData = data;
      this.editarJugForm.setValue({
        'id':this.jugadorData.id,
        'apodo': this.jugadorData.apodo,
        'cuenta': this.jugadorData.cuenta,
        'contrasena': this.jugadorData.contrasena,
        'email': this.jugadorData.email,
        'estadoRegistro': this.jugadorData.estadoRegistro,
        'fechaModificacion': this.jugadorData.fechaModificacion

      });
    })
  }

  postForm(form:jugadorI){ try {
    this.api.putSingleJugador(form).subscribe(data =>{
      let respuesta : ResponsiveI = data;
      this.alertas.showSuccess('Se modifico el jugador', 'Nice');   
      console.log(data);
    })
    
  } catch (error) { 
    this.alertas.showError('No se modifico el jugador',' No Nice');
  } 
    
  }

  eliminarJugador()
  {
    try {
      let datos:jugadorI = this.editarJugForm.value;
      this.api.deleteSingleJugador(datos).subscribe(data =>{
        let respuesta : ResponsiveI = data; })
        this.router.navigate(['dashjugador'])
        this.alertas.showSuccess('Se Elimino el jugador', 'Nice');
    } catch (error) {
      this.alertas.showError('No se Elimino el jugador',' No Nice'); 
    }
  }

}
