import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-atualizar-pessoa',
  templateUrl: './atualizar-pessoa.component.html',
  styleUrls: ['./atualizar-pessoa.component.css']
})
export class AtualizarPessoaComponent implements OnInit {

  id = new FormControl('');
  nome = new FormControl('');
  sexo = new FormControl('');
  socorrista = new FormControl('');
  rg = new FormControl('');
  graduacao = new FormControl('');
  nomeDeGuerra = new FormControl('');
  modeloCapa = new FormControl('');
  condicaoCapa = new FormControl('');
  tamanhoCapaQueTem = new FormControl('');
  tamanhoCapaQueUsa = new FormControl('');
  modeloCalca = new FormControl('');
  condicaoCalca = new FormControl('');
  tamanhoCalcaQueTem = new FormControl('');
  tamanhoCalcaQueUsa = new FormControl('');
  modeloBota = new FormControl('');
  condicaoBota = new FormControl('');
  tamanhoBotaQueTem = new FormControl('');
  tamanhoBotaQueUsa = new FormControl('');
  modeloCapacete = new FormControl('');
  condicaoCapacete = new FormControl('');
  numeroCapacete = new FormControl('');
  modeluva = new FormControl('');
  condicaoLuva = new FormControl('');
  tamanhoLuva = new FormControl('');
  condicaoBalaclava = new FormControl('');
  condicaoLuvaVaqueta = new FormControl('');
  tamanhoLuvaVaqueta = new FormControl('');
  condicaoOculosProtecao = new FormControl('');


  form = new FormGroup({

      id: this.id,
      nome: this.nome,
      sexo: this.sexo,
      socorrista: this.socorrista,
      rg: this.rg,
      graduacao: this.graduacao,
      nomeDeGuerra: this.nomeDeGuerra,
      modeloCapa: this.modeloCapa,
      condicaoCapa: this.condicaoCapa,
      tamanhoCapaQueTem: this.tamanhoCapaQueTem,
      tamanhoCapaQueUsa: this.tamanhoCapaQueUsa,
      modeloCalca: this.modeloCalca,
      condicaoCalca: this.condicaoCalca,
      tamanhoCalcaQueTem: this.tamanhoCalcaQueTem,
      tamanhoCalcaQueUsa: this.tamanhoCalcaQueUsa,
      modeloBota: this.modeloBota,
      condicaoBota: this.condicaoBota,
      tamanhoBotaQueTem: this.tamanhoBotaQueTem,
      tamanhoBotaQueUsa: this.tamanhoBotaQueUsa,
      modeloCapacete: this.modeloCapacete,
      condicaoCapacete: this.condicaoCapacete,
      numeroCapacete: this.numeroCapacete,
      modeluva: this.modeluva,
      condicaoLuva: this.condicaoLuva,
      tamanhoLuva: this.tamanhoLuva,
      condicaoBalaclava: this.condicaoBalaclava,
      condicaoLuvaVaqueta: this.condicaoLuvaVaqueta,
      tamanhoLuvaVaqueta: this.tamanhoLuvaVaqueta,
      condicaoOculosProtecao: this.condicaoOculosProtecao,

  });

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  atualizar() {

      this.http.post<string>('http://localhost:8080/bombeiros/atualizarPessoa', this.form.value).subscribe(
          data => {
              console.log("POST Request is successful ", data);
          },
          error => {

              console.log("Error", error);

          });

      alert('Cadastrado.');
  }
}
