import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-letras',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
  ],
  templateUrl: './letras.component.html',
  styleUrl: './letras.component.css',
})
export class LetrasComponent {
  palabra: string = '';
  cuento: string = '';
  copiaCuento: string = '';
  buscado: boolean = false;
  reseteado: boolean = false;
  contador: number = 0;

  buscar() {
    this.buscado = true;
    this.reseteado = false;
    this.contarPalabras();
    const palabras = this.cuento.split(/\s+/);
    let copiaPalabras: string[] = [];
    palabras.forEach((p) => {
      if (p == this.palabra) {
        p = `<span class="resaltado">${this.palabra}</span>`;
      }
      copiaPalabras.push(p);
    });

    this.copiaCuento = copiaPalabras.join(' ');
  }

  borrar() {
    this.buscado = false;
    this.palabra = '';
    this.cuento = '';
    this.contador = 0;
  }

  contarPalabras() {
    this.contador = 0;
    const palabras = this.cuento.split(/\s+/);

    palabras.forEach((p) => {
      if (p == this.palabra) {
        this.contador++;
      }
    });
  }

  reset() {
    this.reseteado = true;
  }
}
