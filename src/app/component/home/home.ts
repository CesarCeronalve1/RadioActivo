import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SideBar } from "../side-bar/side-bar";

@Component({
  selector: 'app-home',
  imports: [RouterModule, SideBar],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

}
