import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from "./component/header/header";
import { Footer } from './component/footer/footer';
import { SideBar } from './component/side-bar/side-bar';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header,Footer,SideBar],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'RadioActivo';
}
