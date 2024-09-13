import { Component } from '@angular/core';

@Component({
  selector: 'app-my-component',
  standalone: true,
  imports: [],
  templateUrl: './my-component.component.html',
  styleUrl: './my-component.component.scss'
})
export class MyComponentComponent {
  titulo: string = 'Título de la tarjeta';
  texto: string = 'Este es el contenido de la tarjeta.';
  enlace: string = '#';
}
