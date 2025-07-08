import { Card } from '../card/card';
import { CommonModule } from '@angular/common';
import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { MusicCard } from '../../models/card';
import { Input } from '@angular/core';
@Component({
  selector: 'app-carrusel',
  imports: [Card,CommonModule],
  templateUrl: './carrusel.html',
  styleUrl: './carrusel.css'
})
export class Carrusel implements OnInit{
  tarjetas: MusicCard[] = [];
  @Input() TituloCarrusel:string = "Titulo Carrusel";
  ngOnInit(): void {
    this.tarjetas=[
      {
        id: 1,
        titulo: 'Sin Sentimiento',
        artist: ['Salsa latina', 'Grupo Niche'],
        imagen: 'Logo.png',
      },
      {
        id: 1,
        titulo: 'Peligro',
        artist: ['Vertigo'],
        imagen: 'Logo.png',
      },
      {
        id: 1,
        titulo: 'Tu belleza nada igualará jamas',
        artist: ['alonso Guerra'],
        imagen: 'Logo.png',
      },
      {
        id: 1,
        titulo: 'Consome Costecho',
        artist: ['Salsa latina'],
        imagen: 'Logo.png',
      },
      {
        id: 1,
        titulo: 'Besame Esta   noche',
        artist: ['junio churchs'],
        imagen: 'Logo.png',
      },
      {
        id: 1,
        titulo: 'Huelo a Cebolla',
        artist: ['Axilas','Los Tuister sister'],
        imagen: 'Logo.png',
      },
   ]  }

  
  
  
  
  //Para que funcione el scrool de carrucel
  @ViewChild('carrucel') carrucel!: ElementRef<HTMLDivElement>;
  scrollAmount = 240; 
  scrollLeft() {
    const el = this.carrucel.nativeElement;

    if (el.scrollLeft <= 0) {
      el.scrollTo({ left: el.scrollWidth - el.clientWidth, behavior: 'smooth' });
    } else {
      el.scrollBy({ left: -this.scrollAmount, behavior: 'smooth' });
    }
  }
  
  scrollRight() {
    const el = this.carrucel.nativeElement;
  
    if (el.scrollLeft + el.clientWidth >= el.scrollWidth) {
      // Si llegamos al final y queremos ir más a la derecha,
      // saltamos al inicio (loop)
      el.scrollTo({ left: 0, behavior: 'smooth' });
    } else {
      el.scrollBy({ left: this.scrollAmount, behavior: 'smooth' });
    }
  }

  //fin del scrolling
}
