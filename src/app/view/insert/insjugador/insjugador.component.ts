import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { jugadorI } from 'src/app/modelos/jugador.interface';
import { ApiService } from 'src/app/servicios/api/api.service';
import { FormGroup, FormControl, Validator } from '@angular/forms';
import { ResponsiveI } from 'src/app/modelos/responsive.interface';
import { AlertasService } from 'src/app/servicios/alertas/alertas.service';

@Component({
  selector: 'app-insjugador',
  templateUrl: './insjugador.component.html',
  styleUrls: ['./insjugador.component.scss']
})
export class InsjugadorComponent implements OnInit {


  nuevoJugForm = new FormGroup({
    id: new FormControl(''),
    cuenta: new FormControl(''),
    contrasena:new FormControl(''),
    apodo: new FormControl(''),
    email: new FormControl(''),
    estadoRegistro: new FormControl(''),
    fechaModificacion: new FormControl('')

  });


  constructor(private api:ApiService, private route:Router, private alerta:AlertasService) { }

  ngOnInit(): void {
  }


  postForm(form:jugadorI)
  {
    try {
      this.api.postSingleJugador(form).subscribe(data => {
        console.log(data)
        this.route.navigate(['dashpersonaje']);
        this.alerta.showSuccess('Se creo el jugador', 'Nice'); 
      })
    } catch (error) {
      this.alerta.showError('No se creo el jugador',' No Nice');
    }
    
  }


}
