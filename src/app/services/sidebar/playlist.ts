import { Injectable } from '@angular/core';

export interface InterfazPlaylist {
  id: number;
  nombre: string;
  imagen: string;
}


@Injectable({
  providedIn: 'root'
})
export class Playlist {
  private playlist: InterfazPlaylist[] = [
    { id: 1, nombre: 'Rock en español', imagen: 'Logo.png' },
    { id: 2, nombre: 'Musica de Humanos', imagen: 'Logo.png' },
    { id: 3, nombre: 'sonidos del Mar', imagen: 'Logo.png' }

  ];
  constructor() { }
  getPlaylist(): InterfazPlaylist[] {
    return this.playlist;

  }
}
