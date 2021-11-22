import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrincipalComponent } from './view/principal/principal.component';
import { DashjugadorComponent } from "./view/dashboards/dashjugador/dashjugador.component";
import { DashpersonajeComponent } from './view/dashboards/dashpersonaje/dashpersonaje.component';
import { InsjugadorComponent } from './view/insert/insjugador/insjugador.component';
import { InspersonajeComponent } from './view/insert/inspersonaje/inspersonaje.component';
import { DeljugadorComponent } from './view/delete/deljugador/deljugador.component';
import { DelpersonajeComponent } from './view/delete/delpersonaje/delpersonaje.component';
import { UpjugadorComponent } from './view/update/upjugador/upjugador.component';
import { UppersonajeComponent } from './view/update/uppersonaje/uppersonaje.component';
import { GraficaComponent } from './view/chart/grafica/grafica.component';

const routes: Routes = [
    {path:'', redirectTo:'principal', pathMatch:'full'},
    {path:'principal', component:PrincipalComponent},
    {path:'dashjugador', component:DashjugadorComponent},
    {path:'dashpersonaje', component:DashpersonajeComponent},
    {path:'insjugador', component:InsjugadorComponent},
    {path:'inspersonaje', component:InspersonajeComponent},
    {path:'deljugador', component:DeljugadorComponent},
    {path:'delpersonaje', component:DelpersonajeComponent},
    {path:'upjugador/:id', component:UpjugadorComponent},
    {path:'uppersonaje/:id', component:UppersonajeComponent},
    {path:'grafica', component:GraficaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [PrincipalComponent,
DashjugadorComponent,DashpersonajeComponent,
InsjugadorComponent,InspersonajeComponent,
DeljugadorComponent,DelpersonajeComponent,
UpjugadorComponent,UppersonajeComponent,GraficaComponent]
