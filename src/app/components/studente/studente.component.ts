import { Component, OnInit } from '@angular/core';
import { St } from 'src/app/models/st';

@Component({
  selector: 'app-studente',
  templateUrl: './studente.component.html',
  styleUrls: ['./studente.component.scss']
})

export class StudenteComponent implements OnInit {
  nome = 'nome';
  title = 'Titolo';
  st: St[] = {
    id: 1,
    nome: 'nome-studente'
  };

  constructor() { }

  ngOnInit(): void {
  }

}
