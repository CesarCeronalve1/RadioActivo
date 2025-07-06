import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { InterfazPlaylist } from '../../services/sidebar/playlist';
import { Playlist } from '../../services/sidebar/playlist';
@Component({
  selector: 'app-side-bar',
  imports: [RouterModule],
  templateUrl: './side-bar.html',
  styleUrl: './side-bar.css'
})
export class SideBar {
  playlist:InterfazPlaylist[] = [];
  constructor(private listas:Playlist){
    this.playlist = this.listas.getPlaylist();
  }
}
