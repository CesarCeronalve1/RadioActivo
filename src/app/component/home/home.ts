import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SideBar } from "../side-bar/side-bar";
import { Carrusel } from "../carrusel/carrusel";

@Component({
  selector: 'app-home',
  imports: [RouterModule, SideBar, Carrusel],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

}
