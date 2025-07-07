import { Card } from '../card/card';
import { CommonModule } from '@angular/common';
import { Component, ViewChild, ElementRef } from '@angular/core';
@Component({
  selector: 'app-carrusel',
  imports: [Card,CommonModule],
  templateUrl: './carrusel.html',
  styleUrl: './carrusel.css'
})
export class Carrusel {
  @ViewChild('carrucel') carrucel!: ElementRef<HTMLDivElement>;

  scrollAmount = 240; // px que quieres que se mueva con cada click

  scrollLeft() {
    const el = this.carrucel.nativeElement;
  
    if (el.scrollLeft <= 0) {
      // Si estás al principio y quieres ir más a la izquierda,
      // saltamos al final (loop)
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
}
