import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
  selector: 'app-numeros',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatSlideToggleModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
  ],
  templateUrl: './numeros.component.html',
  styleUrl: './numeros.component.css',
})
export class NumerosComponent {
  limite: number = 0;
  rapido: boolean = false;
  selectedArray: { number: number; color: string }[] = [];
  poolNumber: number[] = [];
  interval: any;
  colors: string[] = [
    'Black',
    'Blue',
    'Brown',
    'Chartreuse',
    'Chocolate',
    'Coral',
    'Crimson',
    'Cyan',
    'Gold',
    'Gray',
    'Green',
    'Indigo',
    'Lime',
    'Magenta',
    'Maroon',
    'Navy',
    'Olive',
    'Orange',
    'Orchid',
    'Purple',
    'Red',
    'Salmon',
    'Tan',
    'Teal',
    'Turquoise',
    'Violet',
    'Yellow',
  ];

  pintar(number: number) {
    clearInterval(this.interval);
    this.selectedArray = [];
    this.poolNumber = [...Array(this.limite).keys()].map((i) => i + 1);
    this.interval = setInterval(
      () => {
        if (number == this.limite) {
          clearInterval(this.interval);
          return;
        }
        this.selectedArray.push({
          number: this.poolNumber[number],
          color: this.colors[Math.floor(Math.random() * this.colors.length)],
        });
        number++;
      },
      this.rapido ? 1 : 1000
    );
  }
}
