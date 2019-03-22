import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-procurar-pessoas',
  templateUrl: './procurar-pessoas.component.html',
  styleUrls: ['./procurar-pessoas.component.css']
})
export class ProcurarPessoasComponent implements OnInit {

  nome = new FormControl('');

  form = new FormGroup({

    nome: this.nome,
  });

  pessoas: string;

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {
  }

  procurar() {

    this.http.get<string>('http://localhost:8080/bombeiros/pessoa?nome=' + this.nome.value).subscribe(
      data => {
        this.pessoas = data;
      },
      error => {

        console.log("Error", error);

      });

  }
}
