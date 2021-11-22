import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/servicios/api/api.service';
import { chartI } from 'src/app/modelos/chart.interface';
import { listjugadoresI } from 'src/app/modelos/listajugadores.interface';
import { listaespeciesI } from 'src/app/modelos/listaespecies.interface';
import { listpersonajesI } from 'src/app/modelos/listapersonajes.interface';
import { Observable, observable } from 'rxjs';
@Component({
  selector: 'app-grafica',
  templateUrl: './grafica.component.html',
  styleUrls: ['./grafica.component.scss']
})
export class GraficaComponent implements OnInit {

    jugadores:listjugadoresI[]=[];
    especies:listaespeciesI[]=[];
    personajes:listpersonajesI[]=[];
  cantJugadores: number=0;
  cantPersonajes: number = 0;
  cantEspecies: number = 0;
    titleChart:string = "Grafica";
  chartP:any[]=[];
  view: [number, number] = [700, 400];

  // options
  gradient: boolean = true;
  showLegend: boolean = true;
  showLabels: boolean = true;
  isDoughnut: boolean = false;
  legendPosition: string = 'below';

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };



  constructor(private api: ApiService, private router: Router) {
    //Object.assign(this, { this.chartP });
    
  }

  ngOnInit(): void {
    this.getJugadores();
    this.getEspecies();
    this.getPersonajes();  
    this.setValores();
    console.log(this.cantJugadores);
  }

  onSelect(data: any): void {
    console.log('Item clicked', JSON.parse(JSON.stringify(data)));
  }

  onActivate(data: any): void {
    console.log('Activate', JSON.parse(JSON.stringify(data)));
  }

  onDeactivate(data: any): void {
    console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  }


  

  async getJugadores(){
      let jugadores1:listjugadoresI[] =[];
       await this.api.getAllJugadores()
      .toPromise().then
                ((data:listjugadoresI[]) => {this.jugadores= data;
                    this.cantJugadores=this.jugadores.length;
                    this.chartP.push({ "name":"Jugadores","value":this.cantJugadores});
                    
                    return this.jugadores;});
                    this.chartP = [...this.chartP];
               console.log(this.cantJugadores); 
               
  }
  async getEspecies(){
    let especies1:listaespeciesI[] =[];
   await this.api.getAllEspecies()
    .toPromise().then
              ((data:listaespeciesI[]) => {this.especies= data;
                this.cantEspecies = this.especies.length;
                this.chartP.push({ "name":"Especies","value":this.cantEspecies});
                  });
                  this.chartP = [...this.chartP];
}
async getPersonajes(){
    let personajes1:listpersonajesI[] =[];
     await this.api.getAllPersonajes()
    .toPromise().then
              ((data:listpersonajesI[]) => {this.personajes= data;
                this.cantPersonajes = this.personajes.length;
                this.chartP.push({ "name":"Personajes","value":this.cantPersonajes});
                  });
                  this.chartP = [...this.chartP];
}
async setValores() {
      
    this.chartP.push({
     "name": "Jugadores",
     "value": this.jugadores.length
   },
   {
     "name": "Especies",
     "value": this.especies.length
   },
   {
     "name": "Personajes",
     "value": this.personajes.length
   });
     
   }
}
