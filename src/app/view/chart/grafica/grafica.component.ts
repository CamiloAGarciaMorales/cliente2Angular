import { Component, OnInit } from '@angular/core';
import { listpersonajesI } from '../../../modelos/listapersonajes.interface';
import { listjugadoresI } from '../../../modelos/listajugadores.interface';
import { listaespeciesI } from '../../../modelos/listaespecies.interface';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/servicios/api/api.service';
import { chartI } from 'src/app/modelos/chart.interface';
@Component({
  selector: 'app-grafica',
  templateUrl: './grafica.component.html',
  styleUrls: ['./grafica.component.scss']
})
export class GraficaComponent implements OnInit {

  cantJugadores:number=0;
  cantPersonajes:number=0;
  cantEspecies:number=0;
 
  chartP:chartI[]=[];
  view: [number,number] = [700, 400];

  // options
  gradient: boolean = true;
  showLegend: boolean = true;
  showLabels: boolean = true;
  isDoughnut: boolean = false;
  legendPosition: string = 'below';

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };

  
  
  constructor(private api:ApiService, private router:Router) { 
    //Object.assign(this, { this.chartP });
    this.api.getAllPersonajes().subscribe((data: string | any[]) => {this.cantPersonajes = data.length });
    this.api.getAllEspecies().subscribe((data: string | any[]) => {this.cantEspecies = data.length;
      console.log(this.cantEspecies) });
      this.api.getAllJugadores().subscribe((data: string | any[]) =>{this.cantJugadores= data.length  });
   }

  ngOnInit(): void {
    
    console.log(this.cantEspecies+1)
  }
 
  onSelect(data:any): void {
    console.log('Item clicked', JSON.parse(JSON.stringify(data)));
  }

  onActivate(data:any): void {
    console.log('Activate', JSON.parse(JSON.stringify(data)));
  }

  onDeactivate(data:any): void {
    console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  }

  
  setValores(){
    this.chartP[0].name="Jugadores";
    this.chartP[1].name="Personajes";
    this.chartP[2].name="Especies";
    this.chartP[0].value= this.cantJugadores;
    this.chartP[1].value= this.cantPersonajes;
    this.chartP[2].value= this.cantEspecies;
   
  }





}
