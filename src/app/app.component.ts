import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule, CommonModule], // Importando CommonModule para usar *ngFor
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  mensagem: string = 'Projeto';
  textoDigitado: string = '';
  listaPalavras: string[] = [];

  atualizarTexto(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    this.textoDigitado = inputElement.value;
  }

  limparLista(): void {
    this.listaPalavras = [];
  }

  adicionarPalavra(): void {
    if (this.textoDigitado.trim()) {
      this.listaPalavras.push(this.textoDigitado.trim());
      this.textoDigitado = '';
    }
  }
}
