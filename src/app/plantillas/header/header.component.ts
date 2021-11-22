import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  irDashJugadores()
  {
    this.router.navigate(['dashjugador']);
  }

  irDashPersonajes()
  {
    this.router.navigate(['dashpersonaje'])
  }
  irGrafica()
  {
    this.router.navigate(['grafica'])
  }
}
