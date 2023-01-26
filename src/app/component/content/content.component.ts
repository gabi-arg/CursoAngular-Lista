import { Component } from '@angular/core';
import { Estudiante } from 'src/app/models/estudiante';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent {
    variableTitulo: number = 3;

    listaEstudiantes: Array<Estudiante> =[
      {
        nombre: 'Luciano',
        edad: 21,
        cursando: 2,
        alumnoregular: false,
      },
      {
      nombre: 'Valentino',
      edad: 18,
      cursando: 1,
      alumnoregular: true,
      },
      { nombre: 'Lucia',
      edad: 20,
      cursando: 2,
      alumnoregular: true,
      },

    ]
}
