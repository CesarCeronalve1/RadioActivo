import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card',
  imports: [CommonModule],
  templateUrl: './card.html',
  styleUrl: './card.css'
})
export class Card {

  @Input() Titulo: string = 'Cancion Title';
  @Input() imagen: string = 'Logo.png';
  @Input() artist: string[] = ["Artist", "artist2"];


}
