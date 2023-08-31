import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // I tuoi dati di esempio
  data = [
    {
      "luogo": "Milano",
      "latitudine": 45.4654219,
      "longitudine": 9.1859243,
      "altitudine": 120,
      "clima": "temperato umido"
    },
    {
      "luogo": "Roma",
      "latitudine": 41.9027835,
      "longitudine": 12.4963655,
      "altitudine": 21,
      "clima": "mediterraneo"
    },
    {
      "luogo": "Aosta",
      "latitudine": 45.734955,
      "longitudine": 7.313076,
      "altitudine": 583,
      "clima": "alpino"
    },
    {
      "luogo": "Palermo",
      "latitudine": 38.1156879,
      "longitudine": 13.3612671,
      "altitudine": 14,
      "clima": "mediterraneo"
    }
  ];

  // Variabile per il tipo di ordinamento
  sortBy: string = 'luogo';

  // Funzione per cambiare il tipo di ordinamento
  changeSortType(type: string) {
    this.sortBy = type;
  }
}
